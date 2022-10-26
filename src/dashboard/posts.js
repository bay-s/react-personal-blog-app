import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import supabase from '../supabase-config';
import PostList from './post-list';

const Posts = (props) => {
  const [post,setPost] = useState([])
  const [totalPost,setTotalPost] = useState(0)
  const {id} = useParams()

  useEffect(() => {
   fetchPost()
  },[])
 
  const fetchPost = async () => {
   const { data, error ,count} = await supabase
   .from('posts')
   .select('*', { count: 'exact' })
   if(data){
     console.log(data);
     setTotalPost(count)
     setPost(data)
   }if(error) console.log(error.message);
  }
 
    return(
<>
<div className='box shadow is-flex align-center is-flex-gap-md bg-dark'>
<h3 className='is-bold is-title is-size-4 text-title'>Posts</h3>
<Link to='/dashboard/create-post/' className='button is-outlined is-info is-small'>Add New</Link>
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
                <th>Created</th>
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
{totalPost < 7 ? "" :
<div class="level">
              <div class="level-left">
                <div class="level-item">
                  <div class="buttons has-addons">
                    <button type="button" class="button is-active">1</button>
                    <button type="button" class="button">2</button>
                    <button type="button" class="button">3</button>
                  </div>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <small>Page 1 of 3</small>
                </div>
              </div>
 </div>
 }
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