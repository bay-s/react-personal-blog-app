import React from 'react'
import Author from '../dashboard/author'
import PostCat from '../dashboard/post-cat'
import PostTag from '../dashboard/post-tag'
import timeDifference from './timestamp'
import img from '../img/no-image.png'


const PostCardSingle = (props) => {
     const posts = props.posts
     const createMarkup = (posts) => {
        return {__html:posts.post_content};
       }
       
    return(
        <div class="tile is-parent" key={posts.id}>
       <article class="tile is-child box bg-dark is-flex-gap-sm is-flex is-flex-column">
       <div class="card-image mb-2">
           <figure class="image is-16by9">
            {posts.post_thumbnail !== '' ? 
             <img src={posts.post_thumbnail} alt="Placeholder image" className='post-image w-100 h-100'/>
             : <img src={img} alt="Placeholder image" className='post-image w-100 h-100'/>
             }
            
           </figure>
         </div>
             <p class="title is-3 text-title">{posts.post_title}</p>
             <div dangerouslySetInnerHTML={createMarkup(posts)} />
             <div className='is-flex align-center is-flex-gap-md my-3'>
             <p class="is-title is-size-7 has-text-grey-lighter">{timeDifference(posts.created_at)}</p>
             <PostTag tag={posts.post_tag}/>
             <PostCat cat={posts.post_cat}/>
             <Author id={posts.author_id}/>
             </div>
           </article>
</div>
    )
}

export default PostCardSingle;