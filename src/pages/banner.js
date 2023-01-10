import ParticlesBg from 'particles-bg'
import React, { useContext } from 'react'
import { AppContext } from '../App'


const Banner = () => {
    const {value} = useContext(AppContext)

    return(
        <div className='banner '>
            <ParticlesBg type="circle" bg={true} />
            <section className='is-flex-column is-flex-gap-md align-center mx-auto text-center banner-text w-50'>
                <h1 className='text-white is-title is-bold'>
                {
                    value.data.banner_title ===  null || "" ? 'Your Page title here edit via dashboard' 
                    :  value.data.banner_title
                }
                </h1>
                <p className='has-text-white-ter lh-lg'>
              {
                value.data.banner_description ===  null || "" ? 'Your Page description here edit via dashboard' 
                :  value.data.banner_description
              }
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

