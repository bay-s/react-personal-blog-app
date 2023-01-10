import React from 'react'

const AboutThumbnail = ({img}) => {

    return(
<article className='column is-5 '>
<figure class="image is-1by1">
  <img src={img} />
</figure>
</article>
    )
}

export default  AboutThumbnail 