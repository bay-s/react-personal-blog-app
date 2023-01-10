import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import supabase from '../supabase-config';
import akun from '../img/akun.jpg'

const Header = () => {
  const {value} = useContext(AppContext)
  console.log(value);
  const Logout = async e => {
    e.preventDefault()
    const { error } = await supabase.auth.signOut()
    console.log(error);
  }
    return(
<header className='headers shadow bg-dark p-1'>
<nav id="navbar-main" className="navbar mx-5 bg-transparent">
      <div className="navbar-brand">
        <Link className="navbar-item main-title hvr-underline-from-center" to='/'>
    <h3 className='text-title is-title is-size-4 is-bold main-title '>{value.data.site_title == null ? 'Your Website name' : value.data.site_title}</h3>
    </Link>
        </div>
        <div className="navbar-brand is-right">
        <a className="navbar-item is-hidden-desktop jb-aside-mobile-toggle">
            <span className="icon"><i className="fa fa-bars is-bold text-white" aria-hidden="true"></i></span>
          </a>
        </div>
        
        <div className="navbar-menu fadeIn animated faster" id="navbar-menu">
          <div className="navbar-end">
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
          </div>
        </div>
      </nav>
</header>
    )
}

export default Header ;