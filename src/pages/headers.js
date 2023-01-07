import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import supabase from '../supabase-config';
import akun from '../img/akun.jpg'

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
  .eq('id',2)
  if(error) console.log(error.message);
  else {
    setSiteInfo(data[0])
  }
}

const Logout = async e => {
  e.preventDefault()
  const { error } = await supabase.auth.signOut()
  console.log(error);
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

    return(
<header className='headers p-2 ' ref={header}>
<nav className="navbar mx-5 bg-transparent is-flex justify-center align-center container" role="navigation" aria-label="main navigation">
<ul className='is-flex justify-center align-center is-flex-gap-xl'>
<li className="main-title hvr-underline-from-center py-3" >
<Link  to='/'>
    <h3 className='text-title is-title  is-bold main-title '>{siteInfo.blog_name == null ? 'Home' : siteInfo.blog_name }</h3>
</Link>
</li>
{menuList}
<li className='hvr-underline-from-center py-3'><Link to='/dashboard/index' className=' has-text-white'>Dashboard</Link></li>
<li className={value.isLogin ? '' : 'hide'}>
<div className="navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable">
              <a className="navbar-link is-arrowless">
                <div className="is-user-avatar">
                  <img src={value.data.avatar === '' ? akun : value.data.avatar } alt="IMAGES" />
                </div>
                <div className="is-user-name text-title"><span>{value.data.username}</span></div>
                <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
              </a>
              <div className="navbar-dropdown bg-dark">
              <Link className="navbar-item" to='/dashboard/edit-profile'>
                  <span className="icon"><i className="fa fa-user text-white"></i></span>
                  <span className='text-white'>My Profile</span>
              </Link>
                <Link className="navbar-item" to='/dashboard/edit-profile'>
                  <span className="icon"><i className="fa fa-cog text-white"></i></span>
                  <span className='text-white'>Settings</span>
                </Link>
                <a className="navbar-item">
                  <span className="icon"><i className="fa fa-envelope text-white"></i></span>
                  <span className='text-white'>Messages</span>
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  <span className="icon"><i className="fa fa-sign-out text-white"></i></span>
                  <span onClick={Logout} className='text-white'>Log Out</span>
                </a>
              </div>
</div>
</li>
</ul>

</nav>
</header>
    )
}

export default Headers;


