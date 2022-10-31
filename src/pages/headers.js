import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import supabase from '../supabase-config';


const Headers = () => {
const {value} = useContext(AppContext);
const [menus,setMenus] = useState([])
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

},[])


const menuList = menus.map(menus => {
  return menus.menu_item.map((menu ,index)=> {
   return  <li key={index} className='hvr-underline-from-center p-3'><Link to={`/pages/${menu}`} className=' has-text-white'>{menu}</Link></li>
  })
})
    return(
<header className='headers p-2 bg-dark'>
<nav className="navbar mx-5 is-flex  align-center justify-between bg-transparent container" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link className="navbar-item main-title hvr-underline-from-center" to='/'>
    <h3 className='text-title is-title is-size-4 is-bold main-title '>{value.data.site_title == null ? 'Home' : value.data.site_title}</h3>
    </Link>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

     <ul className='is-flex  is-flex-gap-xl'>
        {menuList}
        <li className={value.isLogin ? 'hvr-underline-from-center p-3' : 'hide'}><Link to='/dashboard/index' className=' has-text-white'>Dashboard</Link></li>
     </ul>

</nav>
</header>
    )
}

export default Headers;


