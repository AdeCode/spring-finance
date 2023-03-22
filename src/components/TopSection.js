import React, { useState } from 'react'
import styled from 'styled-components'
import phone from '../images/phone.png'
import Modal from './Modal'
import WaitlistForm from './WaitlistForm'
import mobileBan from '../images/mobile_ban.png'
import deskBan from '../images/desk-ban.png'
import zero from '../images/zero-charges.png'
import play from '../images/play.png'
import playM from '../images/playM.png'
import apple from '../images/apple.png'
import appleM from '../images/appleM.png'

function TopSection() {
    const [modal, setModal] = useState(false)

    const closeModal = () => {
        setModal(false)
    }

    const openModal = () => {
        setModal(true)
    }

    return (
        <Section className='lg:pt-[50px] pb-[20.8px] lg:pb-[83px] items-start lg:items-center px-7'>
            {modal &&
                <Modal
                    title='Join the waitlist'
                    subTitle='Spring is a great way to send money to friends, family and businesses, even pay your international tuition fees.'
                    closeModal={() => closeModal()}
                >
                    <WaitlistForm />
                </Modal>
            }
            <h1 className='lg:w-[1039px] text-left lg:text-center text-[26px] lg:text-[40px] font-semibold lg:font-normal leading-9 lg:leading-[53px]'>
                Seamless Global Banking Solution for African SMEs, International Students & Intending Migrants.
            </h1>
            <div className='lg:flex lg:flex-col lg:items-center lg:mb-4'>
                <p className='lg:w-[748px] text-left font-semibold lg:text-center mt-3 lg:mt-8 lg:text-xl'> <span className='title'>Send</span>  payments to SMEs in multiple currencies, <span className='title'>Request/Send</span> money to friends, family &amp; business partners and <span className='title'>Pay</span> your international tuiton fees with no fuss.</p>
                {/* <div onClick={openModal} href='./' className='btn cursor-pointer w-[100%] lg:w-fit lg:flex lg:justify-center lg:py-4 py-[13.5px] text-center lg:px-8 text-white mt-3 lg:mt-9'>
                    Join our waitlist
                </div> */}
            </div>

            <div className='hidden lg:flex h-[600px] w-[600px]'>
                <img src={zero} alt='spring-zero-charges'/>
            </div>
            <div className='lg:hidden'>
                <img src={mobileBan} alt='phone' />
            </div>
            {/* <h4 className='text-center w-full text-base font-normal leading-[18px] lg:text-[31px] lg:leading-9'>Get started with <strong>SPRING</strong></h4> */}
            {/* <div className='flex lg:gap-3 gap-2 mt-5 justify-center w-full'>
                <button className='flex play lg:gap-[22px] gap-[13px] lg:py-2 py-1 lg:px-6 px-[14px] rounded-[4px] items-center lg:w-[239px]'>
                    <div className='hidden lg:flex'>
                        <img src={play} alt='Google play'/>
                    </div>
                    <div className='lg:hidden'>
                        <img src={playM} alt='Google play'/>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h4 className='font-medium text-[#7C8087] lg:text-sm text-[8px] font-poppings'>Get it on</h4>
                        <h3 className='font-bold lg:text-xl text-xs text-black'>Google Play</h3>
                    </div>
                </button>
                <button className='flex store lg:gap-[22px] gap-[13px] lg:py-2 py-1 lg:px-6 px-[14px] bg-red rounded-[4px] items-center lg:w-[239px]'>
                    <div className='hidden lg:flex'>
                        <img src={apple} alt='apple'/>
                    </div>
                    <div className='lg:hidden'>
                        <img src={appleM} alt='apple'/>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h4 className='font-medium text-black lg:text-sm text-[8px] font-poppings'>Coming soon</h4>
                        <h3 className='font-bold lg:text-xl text-xs'>App Store</h3>
                    </div>
                </button>
            </div> */}

            <div className='lg:mt-0 mt-[6px] flex lg:gap-2 gap-[6px] lg:py-2 w-full justify-center'>
                <a href='https://play.google.com/store/apps/details?id=com.getspring.finance' target='_blank' rel='noreferrer' className='flex play items-center border-[2px] border-[#E2E4E8] lg:py-[6px] py-[2px] lg:px-5 px-[5px] rounded-[4px] gap-4 lg:w-[199px] min-w-[114px]'>
                    <div>
                        <img src={play} alt='play store' />
                    </div>
                    <div className='flex flex-col items-start'>
                        <h4 className='lg:text-[#7C8087] font-normal lg:text-xs text-[7.6px]'>Get it on</h4>
                        <h3 className='font-bold lg:text-lg text-black text-[11px] text-left'>Google Play</h3>
                    </div>
                </a>
                <a href='/' className='flex store items-center lg:py-[6px] py-[2px] lg:px-5 px-1 rounded-[4px] gap-4 lg:w-[199px] min-w-[114px]'>
                    <div className='hidden lg:flex'>
                        <img src={apple} alt='app store' />
                    </div>
                    <div className='lg:hidden'>
                        <img src={appleM} alt='app store' />
                    </div>
                    <div className='flex flex-col items-start text-white'>
                        <span className='text-white lg:text-xs text-[7.6px] font-normal'>Coming soon</span>
                        <h3 className='font-bold lg:text-lg text-[11px] text-white'>App Store</h3>
                    </div>
                </a>
            </div>

        </Section>
    )
}

export default TopSection

const Section = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */

    h1{
        letter-spacing: -0.02em;
        color: #263238;
    }

    p{
        font-weight: 600;
        font-size: 20px;
        line-height: 159%;
        color: #263238;
        
        .title{
            background: linear-gradient(166.62deg, #6741FC 5.52%, #258223 58.89%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    }
    .btn{
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
        box-shadow: 0px 1.11602px 2.23204px rgba(16, 24, 40, 0.05);
        border-radius: 8.92818px;
    }
    h4{
        text-align: center;
        letter-spacing: -0.02em;
        background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    .play{
        background: linear-gradient(128.03deg, rgba(97, 153, 219, 0.1) -0.78%, rgba(75, 202, 105, 0.1) 90.56%);
        color: #ffffff !important;
    }
    .store{
        background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
        color: #ffffff !important;
    }
    .text{
        color: #ffffff !important;
    }
`