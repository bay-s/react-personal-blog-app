import ParticlesBg from 'particles-bg'
import React from 'react'


const Banner = () => {
 
    return(
        <div className='banner '>
            <ParticlesBg type="circle" bg={true} />
            <section className='is-flex-column is-flex-gap-md align-center mx-auto text-center banner-text w-50'>
                <h1 className='text-white is-title is-bold'>Landing Page</h1>
                <p className='has-text-white-ter lh-lg'>
                I am a web development engineer and I use react and vue.js to develop pages. This project is a resume template that can be used as the project home page or resume page.
                </p>
                <div className='is-flex is-flex-gap-lg'>
                    <button className='button is-primary is-medium'>
                        Project
                    </button>
                    <button className='button is-medium is-medium'>
                        Github
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Banner 

