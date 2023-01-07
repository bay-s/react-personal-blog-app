import React from 'react'
import img from '../img/banner.jpg'
const About = () => {

    return(
      <div className='about p-50' id='about'>
         <section className='columns is-multiline'>
            <article className='column is-5 '>
<figure class="image is-1by1">
  <img src={img} />
</figure>
            </article>
            <article className='column is-7  is-flex-column is-flex-gap-xl'>
              <div className='is-flex-column '>
                <h3 className='title is-3 text-white is-title'>About</h3>
                <p className='has-text-white-ter lh-lg'>
                Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.
                </p>
              </div>
              <div className='is-flex-column '>
                <h3 className='title is-3 text-white is-title'>Contact Details</h3>
                <p className='has-text-white-ter lh-lg'>
                Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.
                </p>
              </div>
            </article>
         </section>
      </div>
    )
}

export default About