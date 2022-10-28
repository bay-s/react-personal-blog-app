import React from 'react'
import timeDifference from './timestamp'
import akun from '../img/akun.jpg'

const CommentCard = (props) => {
    const comment = props.comment
    const createMarkup = (posts) => {
        return {__html:posts.comment_content};
       }
     
    return(

 <div className='bg-dark shadow is-flex align-center is-flex-gap-xl p-2'>

 <div className='is-flex align-center is-flex-gap-md'>
 <figure class="image is-32x32">
  <img class="is-rounded" src={akun} />
</figure>
 <div className='is-flex is-flex-column'>
 <h3 className='is-title text-title is-size-7'>
  {comment.author_name}
</h3>
 <span className='has-text-grey is-size-7 is-title'>
{timeDifference(comment.created_at)}
</span>
 </div>
  </div>
  <div dangerouslySetInnerHTML={createMarkup(comment)} />
  <button className='button is-primary navbar-end'>Reply</button>
</div>
    )
}

export default CommentCard;