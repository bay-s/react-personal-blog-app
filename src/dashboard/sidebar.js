import React from 'react'
import { Link } from 'react-router-dom';


const Sidebar = () => {

    return(
        <aside class=" h-100">
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
          <p class="menu-label">Examples</p>
          <ul class="menu-list">
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
            <Link to='/dashboard/category/' class="has-icon">
                <span class="icon"><i class="mdi mdi-account-circle"></i></span>
                <span class="menu-item-label">Category</span>
            </Link>
            </li>
            <li>
            <Link to='/dashboard/edit-profile/' class="has-icon">
                <span class="icon"><i class="mdi mdi-account-circle"></i></span>
                <span class="menu-item-label">Profile</span>
            </Link>
            </li>
            <li>
            <Link to='/dashboard/menus' class="has-icon">
            <span class="icon"><i class="mdi mdi-account-circle"></i></span>
                <span class="menu-item-label">Menus</span>
            </Link>
            </li>
          </ul>
          <p class="menu-label">About</p>
          <ul class="menu-list">
            <li>
              <a href="https://github.com/vikdiesel/admin-one-bulma-dashboard" target="_blank" class="has-icon">
                <span class="icon"><i class="mdi mdi-github-circle"></i></span>
                <span class="menu-item-label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://justboil.me/bulma-admin-template/free-html-dashboard/" class="has-icon">
                <span class="icon"><i class="mdi mdi-help-circle"></i></span>
                <span class="menu-item-label">About</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    )
}

export default Sidebar;