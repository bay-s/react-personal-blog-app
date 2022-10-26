import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../pages/header';
import Sidebar from './sidebar';
import ReactQuill from 'react-quill';
import supabase from '../supabase-config';
import ErrorMessage from './error-message';
import { AppContext } from '../App';
import EditPageSidebar from './edit-page-sidebar';
import module from './quill-modules';

const  CreatePageCopy = (props) => {
    const {value} = useContext(AppContext)
    const [isSave,setIsSave] = useState(false)
    const [message,setMessage] = useState({
      pesan:'',
      error:'',
      sukses:'',
      isSubmit:false
    })
    const [content,setContent] = useState({
      title:'',
      quill:''
    })
    const ref = useRef(null);
    const titles = useRef(null)

    const handlerChange = (e) => {
      setContent({...content,
        title:titles.current?.value,
        quill:ref.current?.value,   
         })
         console.log(content.title);
    if(content.quill.length > 0){
      setMessage({
        isSubmit:true
       })
    }else{
      setMessage({
       isSubmit:false
      })
    }
    }

  const createPages = async (e) => {
      e.preventDefault()
      setMessage({
        isSubmit:true
       })
      e.preventDefault()
      console.log("Test");
      if(!content.title || !content.quill){
        setMessage({
          pesan:`Input Value Required`,
          error:true,
          sukses:false
        })
        return
      }
    
      const { data, error } = await supabase
      .from('pages')
      .insert({
        pages_title:content.title,
        pages_content:content.quill,
        author_id:value.data.uid 
      })
      .select()
      if(data){
        console.log(data);
        setMessage({
          pesan:`Create Post Success`,
          isError:false,
          sukses:true
        })
        setMessage({
          isSubmit:false
         })
      }if(error){
        console.log(error);
        setMessage({
          pesan:`Something wrong ${error.message}`,
          error:true,
          sukses:false
        })
        setMessage({
          isSubmit:false
         })
      }
    }


    return(
<div id="app">
<Header />
<div class="container is-fluid my-5 ">
<div className='columns is-multiline'>
{/* START SIDEBAR */}
<div className='column is-2  bg-dark'>
<Sidebar />
</div>
{/* END SIDEBAR */}
{/* START COLUMN RIGHT */}
<div className='column '>
{/* start table */}
<section class="section is-main-section  bg-dark">
  <form className='is-flex is-flex-column is-flex-gap-md' onSubmit={createPages}>
<div class="field">
  <div class="control">
    <input class="input is-primary is-bold is-size-4 text-white bg-transparent" type="text" placeholder="Add title" ref={titles}/>
  </div>
</div>
  <ReactQuill theme="snow" ref={ref} value={content.quill}  modules={module.toolbars} formats={module.formats}  name='quill' onChange={handlerChange} />
  <ErrorMessage pesan={message.pesan} isError={message.error} sukses={message.sukses}/>
  {message.isSubmit ? <button type='submit' className='button is-primary'>Publish</button> : 
  <button className='button is-primary' disabled>Publish</button> }
  </form>
</section>
{/* end table */}
</div>
{/* END SIDEBAR RIGHT */}

</div>
{/* end columns */}
</div>
{/* end container */}
</div>

    )
}

export default CreatePageCopy;