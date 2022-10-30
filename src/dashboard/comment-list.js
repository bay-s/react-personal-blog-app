import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import supabase from '../supabase-config'
import Author from './author'
import PostCat from './post-cat'
import PostTag from './post-tag'


const CommentList = (props) => {
  const {value} = useContext(AppContext)
  const deletePost = async (e) => {
    e.preventDefault()
    const id = parseInt(e.target.dataset.target)
    console.log(id);
    if(window.confirm("Are you sure want to delete this post ?")){
      const { data,error } = await supabase.from('posts')
       .delete()
       .eq('id', id)
       .select()
       if(data)  {
        alert("Delete post success")
        postDecrement() 
        window.location.reload()
      }
       if(error) alert(`Something wrong ${error.message}`)
    }
  }

  const postDecrement = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.rpc('post_inc', { x: 1, row_id: value.data.id })

  if (error) console.error(error)
  else console.log(data)
  }

  const createMarkup = (posts) => {
    return {__html:posts.comment_content};
   }
   
    return(
props.post.length < 1 ? "" : props.post.map((posts ,index) => {
return   <tr>
<td class="is-checkbox-cell w-25" >
<h3 className='is-size-7 has-text-info'>
    {posts.author_name}
</h3>
<h3 className='is-size-7 has-text-info'>
    {posts.author_email}
</h3>
</td>
<td class="is-image-cell w-25">
<span className='is-size-7' dangerouslySetInnerHTML={createMarkup(posts)} />
</td>
<td data-label="Author w-25">
<Link to={`/post/${posts.post_id}`} className='has-text-info is-size-7'>
    {posts.post_title}
</Link>
</td>
<td data-label="Created">
  <small class="has-text-grey is-abbr-like text-nowrap is-size-7" title= {posts.created_at}>
    {posts.created_at}
  </small>
</td>
<td class="is-actions-cell">
  <div class="buttons is-right">
     <i class="fa fa-trash has-text-danger is-size-5 is-clickable" data-target={posts.id} type="button" onClick={deletePost }></i>
  </div>
</td>
</tr>
})        

    )
}

export default CommentList;