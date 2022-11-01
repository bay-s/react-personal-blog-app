import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import supabase from '../supabase-config';


const Headers = () => {
const {value} = useContext(AppContext);
const [menus,setMenus] = useState([])
const [siteInfo,setSiteInfo] = useState([])
console.log(value);
useEffect(() => {
  const fetchMenu = async () => {
    const { data, error } = await supabase
    .from('menu')
    .select()
    if(data){
      setMenus(data)
    }if(error) console.log(error);
     }
     fetchMenu()
     window.addEventListener('scroll',scrolls)
     fetchSiteInfo()
},[])

const fetchSiteInfo = async () => {
  const { data, error } = await supabase
  .from('blog-info')
  .select()
  .eq('id',value.data.id)
  if(error) console.log(error.message);
  else {
    setSiteInfo(data[0])
  }
}


let y = window.scrollX
const header = useRef()
const scrolls = (e) => {
    let x = window.scrollY;
    const headers = header.current
    if (x > y) {
      headers.classList.add("fixed-header");
      console.log("tes");
    }else {
      headers.classList.remove("fixed-header");
      console.log("Tesss");
    }
    
y = x;
  }

const menuList = menus.map(menus => {
  return menus.menu_item.map((menu ,index)=> {
   return  <li key={index} className='hvr-underline-from-center py-3'><Link to={`/pages/${menu}`} className=' has-text-white'>{menu}</Link></li>
  })
})

console.log(siteInfo.blog_name == null);
console.log(siteInfo.blog_name);
    return(
<header className='headers p-2 bg-dark' ref={header}>
<nav className="navbar mx-5 is-flex  align-center justify-between bg-transparent container" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link className="navbar-item main-title hvr-underline-from-center" to='/'>
    <h3 className='text-title is-title is-size-4 is-bold main-title '>{siteInfo.blog_name == null ? 'Home' : siteInfo.blog_name }</h3>
    </Link>
  </div>

     <ul className='is-flex  is-flex-gap-xl'>
        {menuList}
        <li className={value.isLogin ? 'hvr-underline-from-center py-3' : 'hide'}><Link to='/dashboard/index' className=' has-text-white'>Dashboard</Link></li>
     </ul>

</nav>
</header>
    )
}

export default Headers;


