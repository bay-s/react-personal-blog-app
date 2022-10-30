import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Pagination from '../pages/pagination';
import supabase from '../supabase-config';
import CommentList from './comment-list';
import PostList from './post-list';


const Comment = (props) => {
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
     .from('comment')
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
<Link to='/dashboard/create-post/' className='button hvr-sweep-to-right is-outlined border-primary bg-transparent text-title is-small'>Add New</Link>
</div>

    {/* start table */}
<section class="section is-main-section p-2">
<div class="card has-table ">
      <div class="card-content ">
        <div class="b-table has-pagination">
          <div class="table-wrapper has-mobile-cards">
            <table class="table is-fullwidth is-striped is-hoverable is-fullwidth">
              <thead className='border-butt'>
              <tr>
                <th>Author</th>
                <th>Comment</th>
                <th>In response to</th>
                <th>Submitted on</th>
              </tr>
              </thead>
              <tbody>
{/* POST LIST */}
<CommentList  post={post} key={post}/>
{/* END POST LIST */}
              </tbody>
            </table>
          </div>
{/* PAGINATION */}

{/* END PAGINATION */}
        </div>
      </div>
    </div>
</section>
{/* end table */}
</>
    )
}

export default Comment;