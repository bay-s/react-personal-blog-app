import React, { useEffect, useState } from 'react'
import supabase from '../supabase-config';
import AnimasiSkeleton from './animasi-skeleton';
import Headers from './headers';
import Pagination from './pagination';
import PostCard from './post-card';
import Sidebar from './Sidebar';


const Home = () => {
 const [post,setPost] = useState([])
 const [loader,setLoader] = useState(true)
 const [totalPost,setTotalPost] = useState(0)
 const [value,setValue] = useState({
  page:0,
  leftPage:totalPost,
  counts:1
  })

 useEffect(() => {
  fetchPost()
  const timer = setTimeout(() => {
    setLoader(false)
    }, 1000);
    return () => clearTimeout(timer);
 },[value.page,value.counts])

 const fetchPost = async () => {
  const { data, error,count} = await supabase
  .from('posts')
  .select('*', { count: 'exact' })
  .range(value.page,value.counts)
  if(data){
    console.log(data);
    setTotalPost(count)
    setPost(data)
    
  }if(error) console.log(error.message);
 }

 const createMarkup = (posts) => {
  return {__html:posts.post_content};
}

const nextPage = (e) => {
  e.preventDefault()
  setValue({...value,
    page:value.page + 2,
    counts:value.counts + 2,
    leftPage:totalPost - value.counts
  })

}

const prevPage = (e) => {
  e.preventDefault()
  if(value.counts <= 1){

  }else{
    setValue({...value,
      page:value.page - 2,
      counts:value.counts - 2
    })
  }
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
  
 {/* PAGINATION */}
 <div className='py-5 px-4'>
<Pagination totalPost={totalPost} value={value} prevPage={prevPage} nextPage={nextPage}/>
</div>
{/* END PAGINATION */}
</div>
        {/* end column card */}

    </article>
    {/* END COLUMNS */}
    </div>
    </> 
    )
}

export default Home;