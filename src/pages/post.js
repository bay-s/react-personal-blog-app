import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../supabase-config'
import AnimasiSkeleton from './animasi-skeleton'
import Headers from './headers'
import Sidebar from './Sidebar'
import CommentForm from './comment-form'
import HasComment from './has_comment'
import PostCardSingle from './post-card-single'
import CommentCard from './comment-card'


const PostDetail = (props) => {
const {id} = useParams()
const [post,setPost] = useState([])
const [loader,setLoader] = useState(true)
const [dataComment,setDataComment] = useState([])

useEffect(() => {
 fetchPost()
 const timer = setTimeout(() => {
  setLoader(false)
  }, 1000);
  return () => clearTimeout(timer);
},[])

const fetchPost = async () => {
 const comments = await HasComment(id);
 setDataComment(comments)
 const { data, error } = await supabase
 .from('posts')
 .select()
 .eq('id',id)
 if(data){
   setPost(data)
 }if(error) console.log(error.message);
}


const postCard = post.length < 1 ? "" : post.map(posts => {
  return <PostCardSingle posts={posts}/>
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
    {/* DISPLAY COMMENT */}

<article className='section is-main-section px-5 py-1'>
<h3 className={dataComment.length < 1 ? 'hide' : 'text-title is-title p-2'}>
Leave a Comment
</h3>
{dataComment.length < 1 ? "" :
dataComment.map(comment => {
  return <CommentCard comment={comment}/>
})
}
</article>
    {/* END DISPLAY */}
   
    {/* START COMMENT FORM */}
    <CommentForm id={id}/>
    {/* END COMMENT FORM */}
</div>
          {/* end column card */}
      </article>
      {/* END COLUMNS */}
</div>
      </> 
    )
}

export default PostDetail;