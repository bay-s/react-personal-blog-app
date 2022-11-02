import React, { useContext, useEffect, useRef, useState }  from "react";
import { Link } from 'react-router-dom';
import Header from '../pages/header';
import ReactQuill from 'react-quill';
import PostSidebar from './create-post-sidebar';
import supabase from '../supabase-config';
import ErrorMessage from './error-message';
import { AppContext } from '../App';
import module from './quill-modules';

const PostEditor = (props) => {
    const { value } = useContext(AppContext);
    const [message, setMessage] = useState({
      pesan: "",
      isError: false,
      sukses: false,
      isUpload: false,
    });
    const [values, setValues] = useState({
      title: "",
      quill: "",
    });
    const [text, setText] = useState({
      category: "",
      tags: "",
    });
    const [arrValue, setArrValue] = useState({
      catArr: [],
      tagArr: [],
      checkArr: [],
    });

    const [isSubmit, setIsSubmit] = useState(false);
    const ref = useRef(null);
    const titles = useRef(null);

    const handlerChange = (e) => {
      const texts = ref.current
        .getEditor()
        .getText()
        .match(/.{1,250}/g);
      setValues({
        ...values,
        title: titles.current?.value,
        quill: ref.current?.value,
        excerpt: texts[0],
      });
      if (values.quill.length > 0) {
        setIsSubmit(true);
      } else {
        setIsSubmit(false);
      }
    };

    const createPost = async (e) => {
      setIsSubmit(true);
      setMessage({ ...message, isUpload: true });
      e.preventDefault();

      if (!values.title || !values.quill) {
        setMessage({
          pesan: `Input Value Required`,
          isError: true,
          sukses: false,
        });
        setIsSubmit(false);
        setMessage({ ...message, isUpload: false });
        return;
      }

      const { data, error } = await supabase
        .from("posts")
        .insert({
          post_title: values.title,
          post_content: values.quill,
          post_cat: arrValue.checkArr,
          post_tag: arrValue.tagArr,
          the_excerpt: values.excerpt,
          post_thumbnail:props.data.imgPreview,
          author_id: value.data.uid,
        })
        .select();
      if (data) {
        console.log(data);
        incrementPosts()
        setIsSubmit(false);
        setMessage({
          pesan: `Create Post Success`,
          isError: false,
          sukses: true,
          isUpload: false,
        });
        setValues({})
        titles.current.value = ''
      }
      if (error) {
        console.log(error);
        setMessage({
          pesan: `Something wrong ${error.message}`,
          isError: true,
          sukses: false,
          isUpload: false,
        });
        setIsSubmit(false);
      }
    };

    const handlerChanges = (e) => {
      const { name, value } = e.target;
      let isChecked = e.target.checked;
      setText({ [name]: value });
      console.log(e.target.value.toLowerCase());
      if (isChecked) {
        setArrValue({
          ...arrValue,
          checkArr: [...arrValue.checkArr, e.target.value.toLowerCase()],
        });
      } else {
        const copyArr = [...arrValue.checkArr]; // make a separate copy of the array
        const index = copyArr.indexOf(e.target.value.toLowerCase());
        if (index !== -1) {
          // only splice array when item is found
          copyArr.splice(index, 1);
          setArrValue({ ...arrValue, checkArr: copyArr });
        }
      }
    };
    const addCategory = async (e) => {
      e.preventDefault();
      //  setCatArr(catArr => [...catArr, text.category]);
      setArrValue({ ...arrValue, catArr: [...arrValue.catArr, text.category] });
      if (!text.category) {
        alert("Input cant be empty");
        return;
      }
      const { data, err } = await supabase
        .from("category")
        .insert([{ category: text.category }])
        .select();
      if (err) console.log(err);
      if (data) console.log(data);
    };

    const addTags = (e) => {
      e.preventDefault();
      //  setTagArr(tagArr => [...tagArr, text.tags]);
      setArrValue({ ...arrValue, tagArr: [...arrValue.tagArr, text.tags] });
      console.log(arrValue.tagArr);
    };

    const removeTagArr = (e) => {
      e.preventDefault();
      const copyArr = [...arrValue.tagArr]; // make a separate copy of the array
      const index = copyArr.indexOf(e.target.parentElement.textContent);
      if (index !== -1) {
        copyArr.splice(index, 1);
        setArrValue({ ...arrValue, tagArr: copyArr });
      }
    };

    const button = () => {
      if (isSubmit) {
        return (
          <button type="submit" className="button is-primary">
            Publish
          </button>
        );
      } else if (!isSubmit) {
        return (
          <button className="button is-primary" disabled>
            Publish
          </button>
        );
      } else {
        return (
          <button className="button is-primary is-loading" disabled>
            Publish
          </button>
        );
      }
    };

    const incrementPosts = async () => {
      const { data, error } = await supabase
      .rpc('increment', { x: 1, row_id:value.data.id })
      if(error) console.log(error.message);
      else console.log(data);
     }

  const methods = {
    removeTagArr,
    addTags,
    addCategory,
    handlerChanges,
    tagArr:arrValue.tagArr,
    catArr:arrValue.catArr,
  }  
    return(
        <div className='columns is-multiline'>
<div className='column is-9  '>
{/* START EDITOR*/}
<section class="section is-main-section box bg-dark">
  <form className='is-flex is-flex-column is-flex-gap-md' onSubmit={createPost}>
<div class="field">
  <div class="control">
    <input class="input is-primary is-bold is-size-4 bg-transparent text-white holder-white" type="text" ref={titles }  placeholder="Post title" name='title' onChange={handlerChange}/>
  </div>
</div>
<ReactQuill ref={ref} theme="snow" value={values.quill} onChange={handlerChange} name='quill'  modules={module.toolbars} formats={module.formats} />
<ErrorMessage pesan={message.pesan} isError={message.isError} sukses={message.sukses}/>
  {button()}
</form>
</section>
{/* END EDITOR */}
</div>
{/* END SIDEBAR RIGHT */}
<div className='column box bg-dark is-3'>
<PostSidebar data={props.data} methods={methods} />
</div>
{/* END SIDEBAR RIGHT*/}
</div>
/* END COLUMNS INNER */
    )
}

export default PostEditor;