import React from 'react'
import img1 from '../icon/bootstrap.svg'
import img2 from '../icon/css3.svg'
import img3 from '../icon/firebase.svg'
import img4 from '../icon/html.svg'
import img5 from '../icon/javascript.svg'
import img6 from '../icon/jquery.svg'
import img7 from '../icon/react.svg'
import img8 from '../icon/wordpress.svg'

const Skills = () => {
  
    const arr = [
        {
          img:img1,
          title:'Bootstrap'
        },
        {
            img:img2 ,
            title:'CSS'
          },
          {
            img:img3,
            title:'HTML'
          },
          {
            img:img4,
            title:'JavaScript'
          },
          {
            img:img5,
            title:'Jquery'
          },
          {
            img:img6,
            title:'ReactJS'
          },
          {
            img:img7,
            title:'WordPress'
          },
          {
            img:img8,
            title:'Firebase'
          }
    ]
    return(
        <div className='p-50 about' >
        <h3 className='text-center my-3 text-white is-title is-size-4 is-bold'>Skills</h3>
        <section className='columns is-multiline my-5'>
      {
            arr.map((item,i)=> {
                return <div className='column is-3'>
  <div className='card p-3 is-flex align-center justify-center is-flex-gap-md bg-pink'>
  <figure class="image is-48x48" >
  <img src={item.img} className='w-100'/>
</figure>
<h4 className='is-title text-white'>{item.title}</h4>
  </div>
</div>
            })
         }
        </section>
     </div>
    )
}

export default Skills;