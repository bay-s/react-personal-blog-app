import React, { useState } from 'react'
import FsLightbox from "fslightbox-react";
import img1 from '../img/banner.jpg'
import img2 from '../img/no-image.png'
import img3 from '../img/test.png'
import img4 from '../img/banner2.jpg'

const Gallery = () => {
  const [toggler, setToggler] = useState(false);

  const arr = [img1,img2,img3,img4]
    return(
      <div className='p-50' id='gallery'>
         <h3 className='text-center my-3 is-title is-size-4 is-bold'>CHECK OUT SOME OF MY WORKS.</h3>
         <section className='columns is-multiline my-5'>
         {
            arr.map((item,i)=> {
                return <div className='column is-3'>
  <div className='card p-0'>
  <figure class="image is-16by9" onClick={() => setToggler(!toggler)}>
  <img src={item} />
</figure>
<h4 className='text-center p-1'>Judul {i + 1}</h4>
  </div>
</div>
            })
         }
         <FsLightbox
				toggler={toggler}
				sources={arr}
			/>
         </section>
      </div>
    )
}

export default Gallery