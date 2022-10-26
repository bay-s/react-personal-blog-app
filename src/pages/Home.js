import React, { useEffect, useState } from 'react'
import supabase from '../supabase-config';
import AnimasiSkeleton from './animasi-skeleton';
import Headers from './headers';
import PostCard from './post-card';
import Sidebar from './Sidebar';



const Home = () => {
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
  if(data){
    console.log(data);
    setPost(data)
  }if(error) console.log(error.message);
 }

 const createMarkup = (posts) => {
  return {__html:posts.post_content};
}

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
{post.length < 1 ? "" : post.map(posts => {
  return loader ? <AnimasiSkeleton /> : <PostCard posts={posts} />
})
}
  {/* END POST */}
</div>
        {/* end column card */}
    </article>
    </div>
    </> 
    )
}

export default Home;