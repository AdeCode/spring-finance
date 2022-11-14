import React from 'react'
import BikeeBG from '../images/partners/BIKEE-LOGO.png'
import BikeeMB from '../images/partners/BIKEE-MB.png'

function Partners() {
  return (
    <div className='flex  flex-col items-center justify-center pt-5 lg:py-[80px] pb-7 bg-bg_light'>
        <h1 className='font-bold lg:font-normal lg:text-[40px] lg:leading-[46px] text-base lg:mb-[63px] mb-[35px]'>Powering growing businesses</h1>
        <div>
            <img src={BikeeBG} alt='bikee'  className='hidden lg:block'/>
            <img src={BikeeMB} alt='bikee'  className='lg:hidden'/>
        </div>
    </div>
  )
}

export default Partners