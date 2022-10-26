import React from 'react'


const Result = (props) => {

    return(
        props.data.totalPost < 1 ?  <article class="message is-danger" >
<div class="message-body is-flex is-flex-gap-md align-center">
  <strong>Category : </strong>
   <span className='capital'>
    {props.data.result ? `${props.data.id} ${props.data.totalPost} Result` : `${props.data.id} ${props.data.totalPost} Result`}
   </span>
</div>
</article> 
:   <article class="message is-primary" >
<div class="message-body is-flex is-flex-gap-md align-center">
  <strong>Category : </strong>
   <span className='capital'>
    {props.data.result ? `${props.data.id} ${props.data.totalPost} Result` : `${props.data.id} ${props.data.totalPost} Result`}
   </span>
</div>
</article>
    )
}

export default Result;