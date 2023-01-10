import React from 'react'
import { Link } from 'react-router-dom';


const Sidebar = () => {

    return(
        <aside class=" h-100 home-sidebar ">
        <div className='dashboard-sidebar'>

        <div class="p-3 text-center mx-auto is-centered">
            <Link to='/' className='has-text-white is-title is-bold text-center'>View Site</Link>
        </div>
        <div class="menu is-menu-main">
          <ul class="menu-list">
            <li>
            <Link to='/dashboard/index' class="is-active router-link-active has-icon">
                <span class="icon"><i class="mdi mdi-desktop-mac"></i></span>
                <span class="menu-item-label">Dashboard</span>
                </Link>
            </li>
          </ul>
          <ul class="menu-list py-2">
            <li>
              <Link to='/dashboard/pages' class="has-icon">
                <span class="icon has-update-mark"><i class="mdi mdi-table"></i></span>
                <span class="menu-item-label">Pages</span>
              </Link>
            </li>
            <li>
            <Link to='/dashboard/posts/' class="has-icon">
                <span class="icon"><i class="mdi mdi-square-edit-outline"></i></span>
                <span class="menu-item-label">Posts</span>
            </Link>
            </li>
            <li>
            <Link to='/dashboard/about/' class="has-icon">
                <span class="icon"><i class="mdi mdi-square-edit-outline"></i></span>
                <span class="menu-item-label">About</span>
            </Link>
            </li>
            <li>
            <Link to='/dashboard/skills/' class="has-icon">
                <span class="icon"><i class="mdi mdi-square-edit-outline"></i></span>
                <span class="menu-item-label">Skills</span>
            </Link>
            </li>
            <li>
            <Link to='/dashboard/works/' class="has-icon">
                <span class="icon"><i class="mdi mdi-square-edit-outline"></i></span>
                <span class="menu-item-label">Project</span>
            </Link>
            </li>
            <li>
            <Link to='/dashboard/media/' class="has-icon">
                <span class="icon"><i class="mdi mdi-square-edit-outline"></i></span>
                <span class="menu-item-label">Media</span>
            </Link>
            </li>
            <li>
            <Link to='/dashboard/comment/' class="has-icon">
                <span class="icon"><i class="mdi mdi-square-edit-outline"></i></span>
                <span class="menu-item-label">Comment</span>
            </Link>
            </li>
            <li>
            <Link to='/dashboard/category/' class="has-icon">
                <span class="icon"><i class="mdi mdi-account-circle"></i></span>
                <span class="menu-item-label">Category</span>
            </Link>
            </li>
                   <li>
            <Link to='/dashboard/contact/' class="has-icon">
                <span class="icon"><i class="mdi mdi-account-circle"></i></span>
                <span class="menu-item-label">Contact</span>
            </Link>
            </li>
            <li>
            <Link to='/dashboard/edit-profile/' class="has-icon">
                <span class="icon"><i class="mdi mdi-account-circle"></i></span>
                <span class="menu-item-label">Setting</span>
            </Link>
            </li>
            <li>
            <Link to='/dashboard/menus' class="has-icon">
            <span class="icon"><i class="mdi mdi-account-circle"></i></span>
                <span class="menu-item-label">Menus</span>
            </Link>
            </li>
          </ul>

        </div>
        
        </div>
      </aside>
    )
}

export default Sidebar;