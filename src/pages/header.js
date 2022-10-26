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
      <nav id="navbar-main" class="navbar shadow bg-dark  p-1 ">
        <div class="navbar-brand">
        <Link class="navbar-item main-title hvr-underline-from-center" to='/'>
    <h3 className='text-title is-title is-size-4 is-bold main-title '>{value.data.site_title == null ? 'Your Website name' : value.data.site_title}</h3>
    </Link>
        </div>
        <div class="navbar-brand is-right">
        <a class="navbar-item is-hidden-desktop jb-aside-mobile-toggle">
            <span class="icon"><i class="fa fa-bars is-bold text-white" aria-hidden="true"></i></span>
          </a>
        </div>
        
        <div class="navbar-menu fadeIn animated faster" id="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable">
              <a class="navbar-link is-arrowless">
                <div class="is-user-avatar">
                  <img src={value.data.avatar === '' ? akun : value.data.avatar } alt="John Doe" />
                </div>
                <div class="is-user-name text-title"><span>{value.data.username}</span></div>
                <span class="icon"><i class="mdi mdi-chevron-down"></i></span>
              </a>
              <div class="navbar-dropdown bg-dark">
              <Link class="navbar-item" to='/dashboard/edit-profile'>
                  <span class="icon"><i class="fa fa-user text-white"></i></span>
                  <span className='text-white'>My Profile</span>
              </Link>
                <Link class="navbar-item" to='/dashboard/edit-profile'>
                  <span class="icon"><i class="fa fa-cog text-white"></i></span>
                  <span className='text-white'>Settings</span>
                </Link>
                <a class="navbar-item">
                  <span class="icon"><i class="fa fa-envelope text-white"></i></span>
                  <span className='text-white'>Messages</span>
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  <span class="icon"><i class="fa fa-sign-out text-white"></i></span>
                  <span onClick={Logout} className='text-white'>Log Out</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header ;