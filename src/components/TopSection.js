import React, {useState} from 'react'
import styled from 'styled-components'
import phone from '../images/phone.png'
import Modal from './Modal'
import WaitlistForm from './WaitlistForm'

function TopSection() {
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
    <Section className='lg:pt-[149px] pb-[20.8px] lg:pb-[83px] items-start lg:items-center px-7'>
        {modal && 
            <Modal
                title='Join our waitlist'
                closeModal={()=>closeModal()}
            >
                <WaitlistForm/>
            </Modal>
        }
        <h1 className='lg:w-[1039px] text-left lg:text-center text-[26px] lg:text-[46px] font-semibold lg:font-normal leading-9 lg:leading-[53px]'>
            Your fast, easy and safe Social & Cross-border everyday payments with no frustration.
        </h1>
        <p className='lg:w-[748px] text-left lg:text-center mt-3 lg:mt-8'> <span className='title'>Send</span>  payments to businesses,  <span className='title'>Request/Send</span> money to friends & family and <span className='title'>Pay</span> your international tuiton fees with no fuss.</p>
        <div onClick={openModal} href='./' className='btn cursor-pointer w-[100%] lg:w-[auto] lg:flex lg:justify-center lg:py-4 py-[13.5px] text-center lg:px-8 text-white mt-3 lg:mt-9'>
            Join our waitlist
        </div>
        <img src={phone} alt='phone'/>
        <h4 className='text-center w-full text-base font-normal leading-[18px] lg:text-[31px] lg:leading-9'>Get started with SPRING</h4>
        
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
        font-weight: 700;
        font-size: 20px;
        line-height: 159%;
       
        color: #263238;
        
        .title{
            background: linear-gradient(166.62deg, #6741FC 0.52%, #44F040 58.89%);
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
        text-fill-color: transparent;
    }
`