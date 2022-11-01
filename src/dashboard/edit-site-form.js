import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App';
import supabase from '../supabase-config';
import UploadAvatar from './edit-avatar.js';
import ErrorMessage from './error-message';

const EditSiteForm = (props) => {
const {value} = useContext(AppContext)
const [datas,setDatas] = useState({
 blog_name:'',
 blog_logo:''
})
const [message,setMessage] = useState({
  pesan:'',
  error:'',
  sukses:'',
  isSubmit:false
})

useEffect(() => {

},[])

const handlerChange = (e) => {
const {name,value} = e.target
setDatas({...datas,
  [name]:value
  })
if(datas.blog_name.length < 1){
  setMessage({
    isSubmit:false
  })
}else{
  setMessage({
    isSubmit:true
  })
}
}

const insertSiteInfo = async (e) => {
  e.preventDefault()
  const { data, error } = await supabase
  .from('blog-info')
  .upsert({ 
    id:1,
    blog_name:'test',
    blog_logo:'coba'
  })
  .select()
  if(error) alert(error.message)
  else alert('success')
}
    return(
<div className='px-5 text-white bg-dark py-2'>

<form className='is-flex is-flex-direction-column is-flex-gap-lg ' onSubmit={insertSiteInfo}>

<div class="field">
<label class="label text-white">Site Name</label>
<div class="control">
<input class="input  is-link" type="text" name='blog_name' onChange={handlerChange}/>
</div>
</div>

<div class="field">
<label class="label text-white">Site Logo</label>
<div class="control">
<input class="input  is-link" type="text" name='blog_logo'  onChange={handlerChange}/>
</div>
</div>

<ErrorMessage pesan={message.pesan} isError={message.error} sukses={message.sukses}/>

<div class="field">
{message.isSubmit ? <button class="button is-info" type='submit' title="Disabled button" >Submit</button> :
<button class="button is-info" title="Disabled button" disabled>Submit</button>}
</div>

 </form>
   </div>
    )
}

export default EditSiteForm;
