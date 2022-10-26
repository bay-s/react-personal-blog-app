import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import supabase from '../supabase-config';
import PagesList from './pages-list';


const Pages = (props) => {
  const [post,setPost] = useState([])

  useEffect(() => {
   fetchPost()
  },[])
 
  const fetchPost = async () => {
   const { data, error } = await supabase
   .from('pages')
   .select()
   if(data){
     console.log(data);
     setPost(data)
   }if(error) console.log(error.message);
  }
 
    return(
<>
<div className='box shadow is-flex align-center is-flex-gap-md  bg-dark'>
<h3 className='is-bold is-title is-size-4 text-title'>Pages</h3>
<Link to='/dashboard/create-page/' className='button is-outlined is-info is-small'>Add New</Link>
</div>

{/* start table */}
<section class="section is-main-section p-2">
<div class="card has-table">
      <div class="card-content">
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
                <th>Created</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
{/* PAGES LIST */}
<PagesList  post={post} key={post}/>
{/* END PAGE LIST */}
              </tbody>
            </table>
          </div>
          <div class="notification">
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
          </div>
        </div>
      </div>
    </div>
</section>
{/* end table */}
</>
    )
}

export default Pages;