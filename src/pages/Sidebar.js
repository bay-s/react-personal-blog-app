import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import supabase from '../supabase-config';


const Sidebar = () => {
    const [category,setCategory] = useState([])

    useEffect(() => {
   const fetchCategory = async () => {
    const { data, error } = await supabase
    .from('category')
    .select()
    if(data){
      console.log(data);
      setCategory(data)
    }if(error) console.log(error);
   }
   fetchCategory()
    },[])
    

    const categories = category.length < 1 ? "" : category.map(cats => {
      return <li className='list-item border-butt p-2'>
      <Link to={`/posts/category-name/${cats.category}`} className='text-white'>{cats.category}</Link>
     </li>
    }) 
    return(
 <aside className='is-flex is-flex-column is-flex-gap-lg home-sidebar'>

<div class="field py-3">
  <div class="control has-icons-left has-icons-right">
    <input class="input  bg-darks text-white is-primary" type="text" placeholder="Text input"  />
    <span class="icon is-small is-left">
      <i class="fa fa-search"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fa fa-check"></i>
    </span>
  </div>
</div>

   <div className='is-flex is-flex-column is-flex-gap-md p-3'>
     <h3 className='is-title text-title is-bold is-size-5'>
      Category
     </h3>
     <ul className='is-flex is-flex-column is-flex-gap-md'>
      {categories }
     </ul>
   </div>
  </aside>
    )
}

export default Sidebar;