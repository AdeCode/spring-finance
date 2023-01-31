import React, { useState } from 'react'
import styled from 'styled-components'
import add from '../images/add-money.png'
import Icon4 from '../images/Icon4.png'
import Icon2 from '../images/Icon2.png'
import Icon33 from '../images/Icon33.png'
import Icon1 from '../images/Icon1.png'
import playWhite from '../images/play-white.png'
import apple from '../images/apple.png'
import appleM from '../images/appleM.png'
import leftC from '../images/leftC.png'
import lefti from '../images/lefti.png'
import lft from '../images/lft.png'
import rht from '../images/rht.png'
import rtt from '../images/rtt.png'
import rightC from '../images/rightC.png'
import mobile from '../images/mobile_send.png'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import WaitlistForm from './WaitlistForm'

function GlobalSection() {
    const [modal, setModal] = useState(false)

    const closeModal = () => {
        setModal(false)
        console.log(modal)
    }

    const openModal = () => {
        setModal(true)
        console.log(modal)
    }
    return (
        <Section>
            {modal &&
                <Modal
                    title='Join the waitlist'
                    subTitle='Spring is a great way to send money to friends, family and businesses, even pay your international tuition fees.'
                    closeModal={() => closeModal()}
                >
                    <WaitlistForm />
                </Modal>
            }
            <div className='top flex flex-col-reverse lg:flex-row lg:justify-between lg:px-[200px]'>
                <div className='px-[66px] lg:pt-8 lg:pl-[200px]'>
                    <img src={add} alt='add money' />
                </div>
                <div className='right flex flex-col items-center font-medium lg:ml-[56px] lg:pt-14 lg:pr-[63px] lg:items-start'>
                    <h2 className='text-2xl text-center leading-7 pt-[33px] lg:text-left'>Global digital banking at your fingertips</h2>
                    <p className='text-center lg:text-start leading-[140%] pt-[14px] text-xs w-[291px]'>Get free NGN, USD, GBP and EUR virtual accounts, wallets & cards for all required international transactions</p>
                    <div className='flex flex-col mt-[31px] font-medium lg:items-start'>
                        <div className='flex flex-col items-center mb-6 lg:mb-[25px] lg:flex-row'>
                            <img src={Icon4} alt='icon' className='w-[40px] h-[40px]' />
                            <h4 className='text-center lg:text-start text-sm tracking-tight w-[308px] px-[33px]'>Remote workers can get paid by foreign employers and clients.</h4>
                        </div>
                        <div className='flex flex-col items-center mb-6 lg:mb-[25px] lg:flex-row'>
                            <img src={Icon33} alt='icon' className='w-[40px] h-[40px]' />
                            <h4 className='text-center lg:text-start text-sm tracking-tight w-[308px] px-[33px]'>Get quick & efficient foreign exchange transactions within the same app.</h4>
                        </div>
                        <div className='flex flex-col items-center mb-6 lg:mb-[25px] lg:flex-row'>
                            <img src={Icon2} alt='icon' className='w-[40px] h-[40px]' />
                            <h4 className='text-center lg:text-start text-sm tracking-tight w-[308px] px-[33px]'>Faster global money transfer with other international banks within Spring.</h4>
                        </div>
                        <div className='flex flex-col items-center mb-8 lg:mb-[38px] lg:flex-row'>
                            <img src={Icon1} alt='icon' className='w-[40px] h-[40px]' />
                            <h4 className='text-center lg:text-start text-sm tracking-tight w-[308px] px-[33px]'>Opening an international bank account has never been this seamless.
                                <span className='bg-light_green text-dark_text text-[5px] lg:text-[13px] font-bold rounded-[5px] px-[2px] py-[3px] ml-[5px]'>Free</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-purpleMB lg:bg-purpleBG bg-no-repeat h-full bg-blue-bg w-full bg-cover'>
                <div className='font-medium text-[10px] tracking-tight lg:text-[39px] flex flex-col items-center lg:leading-[47px] py-[20px]  lg:py-[70px] lg:justify-center text-white'>
                    <h2 className='w-[156px] lg:w-[609px] text-center'>Start sending money to friends, family, businesses and international schools with Spring today.</h2>
                    <span className='w-[156px] lg:w-[609px] text-center lg:mt-[40px] mt-[6px]'>No stress or expensive fees.</span>
                    <button onClick={openModal} className='text-blue-bg font-semibold text-sm lg:text-lg bg-white py-1 px-[10px] lg:py-3 lg:px-11 mt-[6px] lg:mt-10 rounded-lg'>Join our waitlist</button>
                    <div className='lg:mt-5 mt-[6px] flex lg:gap-2 gap-[2px]'>
                        <button className='flex items-center border-[2px] border-[#E2E4E8] lg:py-[6px] py-[2px] lg:px-5 px-[5px] rounded-[4px] lg:gap-4 lg:w-[189px]'>
                            <div>
                                <img src={playWhite} alt='play store'/>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h4 className='text-white font-normal lg:text-xs text-[3px]'>Get it on</h4>
                                <h3 className='font-bold lg:text-lg text-[4.8px]'>Google Play</h3>
                            </div>
                        </button>
                        <button className='flex items-center bg-[#7B61FF] lg:py-[6px] py-[2px] lg:px-5 px-1 rounded-[4px] lg:gap-4 gap-1 lg:w-[189px]'>
                            <div className='hidden lg:flex'>
                                <img src={apple} alt='app store'/>
                            </div>
                            <div className='lg:hidden'>
                                <img src={appleM} alt='app store'/>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h4 className='text-white font-normal lg:text-xs text-[3px]'>Coming soon</h4>
                                <h3 className='font-bold lg:text-lg text-[4.8px]'>App Store</h3>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className='bottom hidden w-full bg-blue-bg justify-between lg:flex px-[200px] lg:pt-[100px]'>
                <div>
                    <img src={lft} alt='icon' />
                </div>
                <div className='lg:w-[940 flex flex-col items-center'>
                    <div className='text-white tracking-tight font-medium lg:text-[30px]'>
                        <h2 className='text-center leading-9'>Start sending money to friends, family, businesses and international schools with Spring today.</h2>
                        <p className='text-center pt-3'>No stress, or expensive fees.</p>
                    </div>
                    <div onClick={openModal} className='text-blue-bg text-lg bg-white py-3 px-9 w-fit mt-[16px] rounded-lg font-semibold cursor-pointer'>Join our waitlist</div>
                </div>
                <div>
                    <img src={rtt} alt='icon' />
                </div>
            </div> */}
            {/* <div className='lg:hidden w-full bg-blue-bg relative flex justify-center'>
                <img src={mobile} alt='send money' width='100%' height='100%' />
                <div className='absolute top-6 flex flex-col items-center'>
                    <h2 className='text-white w-[165px] tracking-tight font-semibold text-center text-xs'>Start sending money to friends, family and also businesses with Spring today with no fuss.</h2>
                    <p className='text-center text-white font-medium text-xs pt-1'>No stress, or expensive fees.</p>
                    <div onClick={openModal} className='bg-white text-blue-bg text-xs font-semibold py-1 px-1 w-fit rounded-sm text-center mt-[6px]'>Join our waitlist</div>
                </div>
            </div> */}
        </Section>
    )
}

export default GlobalSection

const Section = styled.section`

    .top{
        background: linear-gradient(128.03deg, rgba(97, 153, 219, 0.1) -0.78%, rgba(75, 202, 105, 0.1) 90.56%);
    }

`