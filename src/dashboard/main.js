import React, { useContext } from 'react'
import { AppContext } from '../App';

const Main = (props) => {
  const {value} = useContext(AppContext);
console.log(value);
    return(
   <div className='columns'>
        <div className='column is-4 '>
        <div class="tile is-child box  bg-dark ">
        <div class="level-item has-text-centered ">
            <div className=''>
              <p class="heading is-size-6 text-white">Posts</p>
              <p class="title text-white">{value.data.total_post == null ? "0" : value.data.total_post }</p>
            </div>
        </div>
        </div>
        {/* end tile */}
        </div>
        {/* END COL */}
        <div className='column is-4'>
        <div class="tile is-child box bg-dark">
        <div class="level-item has-text-centered">
            <div>
              <p class="heading is-size-6 text-white">User</p>
              <p class="title text-white">3,456</p>
            </div>
        </div>
        </div>
        {/* end tile */}
        </div>
        {/* END COL */}
        <div className='column is-4'>
        <div class="tile is-child box bg-dark">
        <div class="level-item has-text-centered">
            <div>
              <p class="heading is-size-6 text-white">Posts</p>
              <p class="title text-white">3,456</p>
            </div>
        </div>
        </div>
        {/* end tile */}
        </div>
        {/* END COL */}
           </div>
    )
}

export default Main;