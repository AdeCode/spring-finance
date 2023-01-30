import React, { useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import wallet from '../../images/dashboard/wallet.png';
import card from '../../images/dashboard/card.png';
import profile from '../../images/dashboard/profile.png';

function Customer() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [active, setActive] = useState(false)

  return (
    <Section className='flex justify-between'>
        <div className='flex flex-col'>
            <Link onClick={()=>navigate(-1)} className='flex items-center gap-2 mb-7'>
                <IoArrowBack/> Back
            </Link>
            <h2 className='text-[#6A707E] text-2xl mb-5'>Customer dashboard</h2>
            <div className='flex border-b border-[#C4C4C4] mb-7 gap-3 lg:min-w-[700px]'>
                {/* <h3 className={`${active ? 'text-red-900' : ''} pb-3 border-b-2 border-stone-700`} onClick={()=>{setShow(true); setActive(!active)}}>Wallets</h3> */}
                <h3 className={`${active ? 'active' : ''} pb-3 font-medium text-base cursor-pointer`} onClick={()=>{setShow(true); setActive(!active)}}>Wallets</h3>
                <h3 className={`${active === false ? 'active' : ''} pb-3 font-medium text-base cursor-pointer`} onClick={()=>{setShow(false);setActive(!active)}}>Cards</h3>
            </div>
            <div className=''>
                {
                    show ? 
                        // <div className='w-[325px] h-[150px] bg-green-700 rounded-[11px] text-white'>My wallets</div>
                        <div className='flex gap-5'>
                            <img src={wallet} alt='wallet'/>
                            <img src={wallet} alt='wallet'/>
                        </div>
                        : 
                        // <div className='w-[325px] h-[150px] bg-green-700 rounded-[11px] text-white'>My Cards</div> 
                        <div className=''>
                            <img src={card} alt='card'/>
                        </div>
                }
            </div>
        </div>
        
        {/* <hr className='h-[100vh] '/> */}
        <div className='py-6 border-l-2 border-[#6A707E] w-[400px]'>
            <div className='flex flex-col items-center'>
                <h2 className='text-[#6A707E] text-xl mb-3'>Customer Information</h2>
                <div className='mb-2'>
                    <img src={profile} alt='profile_image'/>
                </div>
                <p className='text-[#4BCA69] font-medium text-base mb-9'>Individual</p>
                <div className='flex flex-col w-full px-12'>
                    <div className='flex justify-between mb-5'>
                        <h3 className='text-[#323C47] font-medium text-[17px] opacity-70'>Name:</h3><h4 className='text-[#002333] font-medium text-base text-start'>Efe Adegoke</h4>
                    </div>
                    <div className='flex justify-between mb-5'>
                        <h3 className='text-[#323C47] font-medium text-[17px] opacity-70'>Email address:</h3><h4 className='text-[#002333] font-medium text-base text-start'>sekigu@gmail.com</h4>
                    </div>
                    <div className='flex justify-between mb-5'>
                        <h3 className='text-[#323C47] font-medium text-[17px] opacity-70'>Country:</h3><h4 className='text-[#002333] font-medium text-base text-start'>Nigeria</h4>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`
    .active{
        border-bottom: 2px solid #4BCA69;
        color: #4BCA69;
    }
`

export default Customer