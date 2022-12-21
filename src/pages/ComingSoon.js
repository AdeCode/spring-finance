import React from 'react'
import styled from 'styled-components'
import white from '../images/white-logo.png'
import pand from '../images/pand.png'

function ComingSoon() {
  return (
    <Section className='bg-[#6841FC] w-[100vw] h-[100vh] bg-comingBG py-[52px] px-8'>
        <div className='mb-[85px]'>
            <img src={white} alt='white-logo'/>
        </div>
        <div className='flex flex-col items-center text-white'>
            <div className='flex text-[150px] font-normal mb-[63px] items-center font-Playfair'>
                <h1>Coming</h1>
                <div className=''>
                    <img src={pand} alt='panda'/>
                </div>
                <h1>Soon</h1>
            </div>
            <p className='w-[811px] font-medium text-[33px] leading-[45px] text-center mb-[50px]'>Jolly Jolly this season with unbeatable cashbacks when you spend USD with our cards </p>
            {/* <button className='bg-white py-[17px] px-[72px] text-[#6841FC] text-lg rounded-[5px] font-medium'>Notify Me </button> */}
        </div>
        
    </Section>
  )
}

const Section = styled.section`

    button{
        border: 2px solid #4BCA69
    }
`

export default ComingSoon