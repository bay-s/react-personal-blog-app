import React from 'react'
import { Link } from 'react-router-dom'
import timeDifference from './timestamp';
import img from '../img/no-image.png'

const PostCard = (props) => {

    return(
        <div class="tile is-parent px-3 p-0">
        <article class="tile is-child box bg-dark is-flex-gap-sm is-flex is-flex-column">
         <div class="card-image mb-2">
            <figure class="image is-2by1">
             {props.posts.post_thumbnail !== null ? 
             <Link to={`/post/${props.posts.id}`} >
             <img src={props.posts.post_thumbnail} alt="Placeholder image" className='post-image'/>
             </Link>
              :  <img src={img} alt="Placeholder image" className='post-image w-100 h-100'/>
              }
             
            </figure>
          </div>
              <p class="title is-3"><Link to={`/post/${props.posts.id}`} className='text-title'>{props.posts.post_title}</Link></p>
              <p class="subtitle is-7 has-text-grey">{timeDifference(props.posts.created_at)}</p>
              <p class="subtitle is-6 text-white lh-md text-ellips">{props.posts.the_excerpt}</p>
              {/* <div dangerouslySetInnerHTML={createMarkup(posts)} /> */}
              <Link to={`/post/${props.posts.id}`} className='button is-outlined is-primary navbar-start'>
              Read More
              </Link>
            </article>
         </div>
    )
}

export default PostCard;