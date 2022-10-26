import React from 'react'
import { Link } from 'react-router-dom';
import Headers from './headers';

function  NotFound (){

        return(
          <>
            <Headers />
<section class="hero  mt-5 pt-5">
  <div class="hero-body">
    <p class="subtitle text-center">
    <h1 className='is-title is-bold is-italic title is-1 text-white'>PAGE NOT FOUND</h1>
  <Link to='/' className='text-title'>  <i class="fa fa-long-arrow-left text-title" aria-hidden="true"></i>BACK TO HOME</Link>
    </p>
  </div>
</section>
          </>
        )
}

export default NotFound;

