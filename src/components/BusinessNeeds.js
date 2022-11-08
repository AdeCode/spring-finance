import React, {useState} from 'react'
import styled from 'styled-components'
import local from '../images/local.png'
import family from '../images/family.png'
import tuition from '../images/tuition.png'
import pay from '../images/g-pay.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal'
import WaitlistForm from './WaitlistForm'

function BusinessNeeds() {
    const [modal, setModal] = useState(false)
    
    const closeModal = () => {
        setModal(false)
        console.log(modal)
    }

    const openModal = () => {
        setModal(true)
    }


    return (
        <Section className='px-8 py-10 lg:py-0 lg:px-16'>
            {modal && 
                <Modal
                    title='Join our waitlist'
                    closeModal={()=>closeModal()}
                >
                    <WaitlistForm/>
                </Modal>
            }
            <div className='top flex flex-col-reverse lg:flex-row lg:justify-between'>
                <div className='left flex flex-col lg:pt-56'>
                    <div className='flex justify-center lg:justify-start'>
                        <h2 className='lg:w-[595px] w-[317px] mt-[15.5px] text-center lg:text-left font-medium lg:text-[46px] lg:leading-[56px] text-2xl'>All local businesses needs to keep growing</h2>

                    </div>
                    <p className='lg:w-[595px] text-center lg:text-left lg:text-[20px] lg:leading-[160%] mt-[18px]'>Irrespective of where your business is located, you should be discovered and able to collect payments from your customers either as a one-off, automated or recurring payments golbally without frustration. </p>
                    <a href='./' className='btn w-full flex justify-center py-[13.5px] lg:py-4 lg:px-8 text-white mt-[18px] lg:mt-9 lg:w-[181px] cursor-pointer'>Register Now</a>
                </div>
                <div className='right'>
                    <img src={local} alt='local business needs' />
                </div>
            </div>
            <div className='bottom flex flex-col lg:flex-row lg:justify-between mt-[67.2px] lg:mt-[232px]'>
                <img src={family} alt='family' />
                <div className='flex pt-[60px] flex-col lg:mt-[60px] lg:pt-[60px]'>
                    <h2 className='lg:w-[595px] w-[317px] mt-[15.5px] text-center lg:text-left font-medium lg:text-[46px] lg:leading-[56px] text-2xl'>Pay your friends & family globally</h2>
                    <p className='lg:w-[573px] text-center lg:text-left lg:text-[20px] lg:leading-[160%] mt-[18px]'>Request, send and receive money from friends and family globally in a fun and easy way on Spring. </p>
                    <div onClick={openModal} className='btn w-full flex justify-center py-[13.5px] lg:py-4 lg:px-8 text-white mt-[18px] lg:mt-9 lg:w-[181px] cursor-pointer'>Join our waitlist</div>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row lg:justify-between'>
                <div className='left flex flex-col '>
                    <div className='flex justify-center lg:justify-start lg:flex-col'>
                        <img src={pay} alt='pay' className='hidden lg:flex'/>
                        <h2 className='lg:w-[595px] w-[317px] mt-[15.5px] text-center lg:text-left font-medium lg:text-[46px] lg:leading-[56px] text-2xl'>Pay your international tuition fees directly to your school</h2>
                    </div>
                    <p className='lg:w-[595px] text-center lg:text-left lg:text-[20px] lg:leading-[160%] mt-[18px]'>International students can now search and pay tuition fees directly to their school’s bank account at a cheaper FX rates, faster settlement periods without multiple calls to an entire family to make tuition payments. </p>
                    <div onClick={openModal} className='btn w-full flex justify-center py-[13.5px] lg:py-4 lg:px-8 text-white mt-[18px] lg:mt-9 lg:w-[181px] cursor-pointer'>Join our waitlist</div>
                </div>
                <div className='right mt-[34.2px]'>
                    <img src={tuition} alt='local business needs' />
                </div>
            </div>
        </Section>
    )
}

export default BusinessNeeds

const Section = styled.div`
    background: rgba(103, 65, 252, 0.04);
    display: flex;
    flex-direction: column;

    .top{
        display: flex;
        .left{
            h2{
                color: #263238;
                letter-spacing: -0.02em;
            }
            p{
                color: #263238;
                opacity: 0.8;
            }
            
        }
    }
    .btn{
        background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
    }
`