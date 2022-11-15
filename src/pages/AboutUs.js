import React, { useState } from 'react'
import styled from 'styled-components'
import springMB from '../images/about/springMB.png'
import springBG from '../images/about/springBG.png'
import mission from '../images/about/mission.png'
import purpose from '../images/about/purpose.png'
import vision from '../images/about/vision.png'
import Partners from '../components/Partners'
import Modal from '../components/Modal'
import WaitlistForm from '../components/WaitlistForm'
import lefti from '../images/lefti.png'
import right from '../images/rightC.png'
import lside from '../images/about/lside.png'
import rside from '../images/about/rside.png'


function AboutUs() {
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
        <Wrapper>
            {modal &&
                <Modal
                    title='Join the waitlist'
                    subTitle='Spring is a great way to send money to friends, family and businesses, even pay your international tuition fees.'
                    closeModal={() => closeModal()}
                >
                    <WaitlistForm />
                </Modal>
            }
            <div className="bg-aboutMB lg:bg-aboutBG flex flex-col items-center lg:flex-row h-fit lg:px-[200px] justify-between pt-[29px] pb-[13px] lg:pt-[60px] lg:pb-[90px]">
                <h2 className='font-bold text-2xl lg:text-left text-center  lg:text-6xl w-[279px] lg:w-[600px] text-text_green'>
                    <span className='text-text_blue'>We build bridges between</span> payments and Africa.</h2>
                <p className='w-[339px] font-normal text-xs lg:text-left text-center lg:w-[500px] lg:font-bold lg:text-lg'>Spring is a pan-African financial services provider that offers fast, easy, convenient, and secure local & cross-border payment solutions. Our mission is to provide a better way for individuals, international students, SMEs from Africa to send and recieve money seamlessly from anywhere.</p>
            </div>
            <div className='flex justify-center'>
                <img src={springMB} alt="spring" className='lg:hidden' />
                <img src={springBG} alt="spring" className='hidden lg:flex lg:h-[300px]' />
            </div>
            <div className='flex lg:px-[200px] flex-col mt-[30px] lg:mt-[50px]'>
                <h1 className='w-full px-3 lg:w-[545px] lg:font-normal text-2xl lg:text-5xl leading-[29px] lg:text-left text-center font-medium lg:leading-[69px]'>Our Core Values are wrapped into the word BORDERLESS</h1>
                <hr className='float-right lg:float-left w-[191px] h-1 bg-gradient-to-r from-light_green to-dark_green lg:mt-[5px]'></hr>
                <div className='flex flex-col lg:flex-row px-[30px] pt-8 lg:pt-0 lg:px-0 gap-[32px] lg:mt-[87px]'>
                    <div className='card bg-white lg:w-[423px] flex flex-col lg:items-start items-center py-[22px] lg:py-6 lg:px-[30px] lg:gap-[23px]'>
                        <div>
                            <img src={mission} alt="mission" />
                        </div>
                        <h2 className='lg:text-3xl text-lg font-bold pb-[9px] lg:pb-0'>Mission</h2>
                        <p className='font-normal px-4 lg:px-0 text-lg leading-[140%] mt-[19px] lg:mt-0 lg:text-left text-center'>Building reliable global digital payment infrastructure and applications to empower Africans to operate anywhere, anytime.</p>
                    </div>
                    <div className='card bg-white lg:w-[423px] flex flex-col lg:items-start items-center py-[22px] lg:py-6 lg:px-[30px] lg:gap-[23px]'>
                        <div>
                            <img src={vision} alt="mission" />
                        </div>
                        <h2 className='lg:text-3xl text-lg font-bold pb-[9px] lg:pb-0'>Vision</h2>
                        <p className='font-normal text-lg leading-[140%] mt-[19px] w-[270px] lg:w-full lg:mt-0 lg:text-left text-center'>To keep empowering individual & businesses of all sizes from Africa to grow without borders.</p>
                    </div>
                    <div className='card bg-white lg:w-[423px] flex flex-col lg:items-start items-center py-[22px] lg:py-6 lg:px-[30px] lg:gap-[23px]'>
                        <div>
                            <img src={purpose} alt="mission" />
                        </div>
                        <h2 className='lg:text-3xl text-lg font-bold pb-[9px] lg:pb-0'>Purpose</h2>
                        <p className='flex font-normal text-lg leading-[140%] mt-[19px] w-[270px] lg:w-full lg:mt-0 lg:text-left text-center lg:flex-start'>Committed to connect Africans with borderless opportunities in every corner of the world.</p>
                    </div>

                </div>
            </div>
            {/* <div className='bg-purpleMB lg:bg-aboutBtmBG bg-no-repeat h-full bg-blue-bg mt-[28px] lg:mt-[124px] w-full bg-cover'>
            <div className='flex justify-center'>
                <div className='hidden lg:flex items-end'>
                    <img src={lside} alt="left"/>
                </div>
                <div className='font-medium text-[10px] tracking-tight lg:text-[39px] flex flex-col items-center lg:leading-[47px] py-[20px] lg:justify-center text-white'>
                    <h2 className='w-[156px] lg:w-[609px] text-center'>Start sending money to friends, family, businesses and international schools with Spring today.</h2>
                    <span className='w-[156px] lg:w-[609px] text-center lg:mt-[40px] mt-[6px]'>No stress or expensive fees.</span>
                    <button onClick={openModal} className='text-blue-bg font-semibold text-sm lg:text-lg bg-white py-1 px-[10px] lg:py-4 lg:px-11 mt-[6px] lg:mt-10'>Join our waitlist</button>
                </div>
                <div className='hidden lg:flex items-end'>
                    <img src={rside} alt="right"/>
                </div>
            </div>
            
        </div> */}
            <div className='bg-purpleMB lg:bg-purpleBG bg-no-repeat h-full bg-blue-bg w-full bg-cover mt-[28px] lg:mt-[124px]'>
                <div className='font-medium text-[10px] tracking-tight lg:text-[39px] flex flex-col items-center lg:leading-[47px] py-[20px]  lg:py-[70px] lg:justify-center text-white'>
                    <h2 className='w-[156px] lg:w-[609px] text-center'>Start sending money to friends, family, businesses and international schools with Spring today.</h2>
                    <span className='w-[156px] lg:w-[609px] text-center lg:mt-[40px] mt-[6px]'>No stress or expensive fees.</span>
                    <button onClick={openModal} className='text-blue-bg font-semibold text-sm lg:text-lg bg-white py-1 px-[10px] lg:py-4 lg:px-11 mt-[6px] lg:mt-10'>Join our waitlist</button>
                </div>
            </div>
            <Partners />
        </Wrapper>
    )
}

export default AboutUs

const Wrapper = styled.div`

.card{
    box-shadow: 0px 2px 4px rgba(14, 86, 124, 0.165308);
    border-radius: 6px;

    h2{
        color: rgba(38, 50, 56, 0.8);
    }
}



`