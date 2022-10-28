import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Pagination from '../pages/pagination';
import supabase from '../supabase-config';
import PostList from './post-list';


const Posts = (props) => {
  const [post,setPost] = useState([])
  const [totalPost,setTotalPost] = useState(0)
  const {id} = useParams()
  const [value,setValue] = useState({
    page:0,
    leftPage:totalPost,
    counts:1
    })
  
  useEffect(() => {
   fetchPost()
  },[value.page,value.counts])

  const fetchPost = async () => {
   const { data, error ,count} = await supabase
   .from('posts')
   .select('*', { count: 'exact' })
   .order("id", { ascending: true })
   .range(value.page,value.counts)
   if(data){
     console.log(data);
     setTotalPost(count)
     setPost(data)
   }if(error) console.log(error.message);
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
<div className='box shadow is-flex align-center is-flex-gap-md bg-dark'>
<h3 className='is-bold is-title is-size-4 text-title'>Posts</h3>
<Link to='/dashboard/create-post/' className='button hvr-sweep-to-right is-outlined border-primary bg-transparent text-title is-small'>Add New</Link>
</div>

    {/* start table */}
<section class="section is-main-section p-2">
<div class="card has-table ">
      <header class="card-header ">
        <p class="card-header-title">
          <span class="icon"><i class="mdi mdi-account-multiple"></i></span>
          Clients
        </p>
        <a href="#" class="card-header-icon">
          <span class="icon"><i class="mdi mdi-reload"></i></span>
        </a>
      </header>
      <div class="card-content ">
        <div class="b-table has-pagination">
          <div class="table-wrapper has-mobile-cards">
            <table class="table is-fullwidth is-striped is-hoverable is-fullwidth">
              <thead>
              <tr>
                <th class="is-checkbox-cell">
         #
                </th>
                <th></th>
                <th>Title</th>
                <th>Author</th>
                <th>Categories</th>
                <th>Tags</th>
                <th onClick={nextPage}>Created</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
{/* POST LIST */}
<PostList post={post} key={post}/>
{/* END POST LIST */}
              </tbody>
            </table>
          </div>
{/* PAGINATION */}
<Pagination totalPost={totalPost} value={value} prevPage={prevPage} nextPage={nextPage}/>
{/* END PAGINATION */}
        </div>
      </div>
    </div>
</section>
{/* end table */}
</>
    )
}

export default Posts;