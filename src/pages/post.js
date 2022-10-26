import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Author from '../dashboard/author'
import PostCat from '../dashboard/post-cat'
import PostTag from '../dashboard/post-tag'
import supabase from '../supabase-config'
import AnimasiSkeleton from './animasi-skeleton'
import Headers from './headers'
import Sidebar from './Sidebar'
import timeDifference from './timestamp'


const PostDetail = (props) => {
const {id} = useParams()
const [post,setPost] = useState([])
const [loader,setLoader] = useState(true)

useEffect(() => {
 fetchPost()
 const timer = setTimeout(() => {
  setLoader(false)
  }, 1000);
  return () => clearTimeout(timer);
},[])

const fetchPost = async () => {
 const { data, error } = await supabase
 .from('posts')
 .select()
 .eq('id',id)
 if(data){
   setPost(data)
 }if(error) console.log(error.message);
}

const createMarkup = (posts) => {
 return {__html:posts.post_content};
}

const postCard = post.length < 1 ? "" : post.map(posts => {
  return <div class="tile is-parent">
       <article class="tile is-child box bg-dark is-flex-gap-sm is-flex is-flex-column">
       <div class="card-image mb-2">
           <figure class="image is-16by9">
            {posts.post_thumbnail !== null ? 
             <img src={posts.post_thumbnail} alt="Placeholder image" className='post-image w-100 h-100'/>
             : ""
             }
            
           </figure>
         </div>
             <p class="title is-3 text-title">{posts.post_title}</p>
             <div dangerouslySetInnerHTML={createMarkup(posts)} />
             <div className='is-flex align-center is-flex-gap-md my-3'>
             <p class="is-title is-size-7 has-text-grey-lighter">{timeDifference(posts.created_at)}</p>
             <PostTag tag={posts.post_tag}/>
             <PostCat cat={posts.post_cat}/>
             <Author id={posts.author_id}/>
             </div>
           </article>
</div>
 })
 
    return(
        <>
        <Headers />
      <div className='container is-fluid is-max-widescreen my-5 post'>
      <article className='columns is-multilne'>
          <div className='column is-3 box bg-dark'>
              <Sidebar />
          </div>
  <div className='column p-0'>
  {/* start post */}
{loader ? <AnimasiSkeleton /> : postCard}
    {/* END POST */}
  </div>
          {/* end column card */}
      </article>
      </div>
      </> 
    )
}

export default PostDetail;