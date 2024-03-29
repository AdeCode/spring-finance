import React, { useState } from 'react'
import styled from 'styled-components'
import pay from '../images/g-pay.png'
import friend from '../images/friend-desk.png'
import fam from '../images/fam-desk.png'
import nlocal from '../images/nlocal.png'
import Mlocal from '../images/Mlocal.png'
import card from '../images/3d.png'
import Mremote from '../images/Mremote.png'
import edu from '../images/edu-desk.png'
import mobile_friend from '../images/mobile_friend.png'
import mobile_fam from '../images/mobile_fam.png'
import mobile_edu from '../images/mobile_edu.png'
import remote from '../images/remote.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal'
import BusinessForm from './BusinessForm'
import WaitlistForm from './WaitlistForm'

function BusinessNeeds() {
    const [modal, setModal] = useState(false)

    const [businessModal, setBusinessModal] = useState(false)

    const closeBusinessModal = () => {
        setBusinessModal(false)
    }

    const openBusinessModal = () => {
        setBusinessModal(true)
    }

    const closeModal = () => {
        setModal(false)
        console.log(modal)
    }

    const openModal = () => {
        setModal(true)
    }


    return (
        <Section className='px-8 py-10 lg:py-0 lg:px-[200px]'>
            {modal &&
                <Modal
                    title='Join the waitlist'
                    subTitle='Spring is a great way to send money to friends, family and businesses, even pay your international tuition fees.'
                    closeModal={() => closeModal()}
                >
                    <WaitlistForm />
                </Modal>
            }
            {businessModal &&
                <Modal
                    title='Free for you,'
                    subTitle='With Spring, businesses can get paid instantly from their customers, while you also stay in tune with daily customers across continents with no friction in payments.'
                    closeModal={() => closeBusinessModal()}
                >
                    <BusinessForm />
                </Modal>
            }
            <div className='lg:flex lg:flex-col lg:gap-8 lg:pb-10'>
                <div className='top flex flex-col-reverse lg:flex-row lg:pt-8 lg:justify-between'>
                    <div className='left flex flex-col lg:pt-56'>
                        <div className='flex justify-center lg:justify-start'>
                            <h2 className='lg:w-[595px] w-[317px] mt-[15.5px] text-center lg:text-left font-medium lg:text-[40px] lg:leading-[56px] text-2xl'>All local businesses needs to keep growing locally</h2>
                        </div>
                        <p className='lg:w-[595px] text-center lg:text-left lg:text-[18px] lg:leading-[160%] mt-[18px]'> Irrespective of where your business is located, you should be discovered, boost your sales and earn in multiple currencies across the globe from your customers either as a one-off, automated or recurring payments globally without frustration. </p>
                        {/* <div onClick={openBusinessModal} className='btn w-full flex justify-center py-[13.5px] lg:py-4 lg:px-8 text-white mt-[18px] lg:mt-9 lg:w-[181px] cursor-pointer'>
                            Register Now
                        </div> */}
                    </div>
                    <div className='right'>
                        <div className='hidden lg:flex lg:w-[435px]'>
                            <img src={nlocal} alt='local business needs' />
                        </div>
                        <div className='lg:hidden flex justify-center'>
                            <img src={Mlocal} alt='local business needs' />
                        </div>
                    </div>
                </div>
                <div className='bottom flex flex-col lg:flex-row lg:justify-between mt-8'>
                    <div className='hidden lg:flex lg:w-[475px]'>
                        <img src={fam} alt='family' />
                    </div>
                    <div className='lg:hidden flex justify-center'>
                        <img src={mobile_fam} alt='local business needs' />
                    </div>
                    <div className='flex justify-center flex-col lg:mt-[60px] lg:pt-[60px]'>
                        <h2 className='lg:w-[595px] mt-[15.5px] text-center lg:text-left font-medium lg:text-[40px] lg:leading-[56px] text-2xl'>Send money to your friends, family &amp; business partners globally</h2>
                        <p className='lg:w-[573px] text-center lg:text-left lg:text-[18px] lg:leading-[160%] mt-[18px]'>Request, send and receive money from friends, family and your business partners around the world easily on Spring.</p>
                        {/* <div onClick={openModal} className='btn w-full flex justify-center py-[13.5px] lg:py-4 lg:px-8 text-white mt-[18px] lg:mt-9 lg:w-[181px] cursor-pointer'>Join our waitlist</div> */}
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row lg:justify-between'>
                    <div className='left flex flex-col justify-center'>
                        <h2 className='lg:w-[595px] w-[317px] mt-[15.5px] text-center lg:text-left font-medium lg:text-[40px] lg:leading-[56px] text-2xl'>Remote workers can now get paid in USD, GBP &amp; EURO</h2>
                        <p className='lg:w-[595px] text-center lg:text-left lg:text-[18px] lg:leading-[160%] mt-[18px]'>Seamlessly getting paid from foreign companies around the world without waiting for any stressful DOM bank account opening, transfers or conversions.</p>
                        {/* <div onClick={openModal} className='btn w-full flex justify-center py-[13.5px] lg:py-4 lg:px-8 text-white mt-[18px] lg:mt-9 lg:w-[181px] cursor-pointer'>Join our waitlist</div> */}
                    </div>
                    <div className='hidden lg:flex right mt-[34.2px] lg:h-[496px]'>
                        <img src={remote} alt='local business needs' />
                    </div>
                    <div className='lg:hidden flex justify-center mt-[34.2px]'>
                        <img src={Mremote} alt='local business needs' />
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row-reverse lg:justify-between'>
                    <div className='left flex flex-col '>
                        <div className='flex justify-center lg:justify-start lg:flex-col'>
                            <div className=''>
                                <img src={pay} alt='pay' className='hidden lg:flex h-[150px]' />
                            </div>
                            <h2 className='lg:w-[595px] w-[317px] mt-[15.5px] text-center lg:text-left font-medium lg:text-[40px] lg:leading-[56px] text-2xl'>Pay your international tuition fees directly to your school</h2>
                        </div>
                        <p className='lg:w-[595px] text-center lg:text-left lg:text-[18px] lg:leading-[160%] mt-[18px]'>International students can now search, discover and pay tuition fees directly to their school’s bank account at a cheaper FX rates, faster settlement periods without multiple calls to an entire family to make tuition payments.</p>
                        {/* <div onClick={openModal} className='btn w-full flex justify-center py-[13.5px] lg:py-4 lg:px-8 text-white mt-[18px] lg:mt-9 lg:w-[181px] cursor-pointer'>Join our waitlist</div> */}
                    </div>
                    <div className='hidden lg:flex right mt-[34.2px] lg:h-[550px]'>
                        <img src={edu} alt='local business needs' />
                    </div>
                    <div className='lg:hidden flex justify-center mt-[34.2px]'>
                        <img src={mobile_edu} alt='local business needs' />
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row lg:justify-between'>
                    <div className='left flex flex-col justify-center'>
                        <h2 className='lg:w-[595px] w-[317px] mt-[15.5px] text-center lg:text-left font-medium lg:text-[40px] lg:leading-[56px] text-2xl'>Use our 3D-secure virtual card for all online payments</h2>
                        <p className='lg:w-[595px] text-center lg:text-left lg:text-[18px] lg:leading-[160%] mt-[18px]'>Time to spend in style anytime you want with a secure virtual card globally without stress. No monthly maintenance fee, get one today either for Business or Personal use.</p>
                        {/* <div onClick={openModal} className='btn w-full flex justify-center py-[13.5px] lg:py-4 lg:px-8 text-white mt-[18px] lg:mt-9 lg:w-[181px] cursor-pointer'>Join our waitlist</div> */}
                    </div>
                    <div className='hidden lg:flex right mt-[34.2px] lg:h-[400px] w-[400px]'>
                        <img src={card} alt='virtual card' />
                    </div>
                    <div className='lg:hidden flex justify-center mt-[34.2px]'>
                        <img src={card} alt='virtual card' />
                    </div>
                </div>
            </div>
            {/* <div className='top flex flex-col-reverse lg:flex-row lg:justify-between'>
                <div className='left flex flex-col lg:pt-56'>
                    <div className='flex justify-center lg:justify-start'>
                        <h2 className='lg:w-[595px] w-[317px] mt-[15.5px] text-center lg:text-left font-medium lg:text-[46px] lg:leading-[56px] text-2xl'>All local businesses needs to keep growing</h2>
                    </div>
                    <p className='lg:w-[595px] text-center lg:text-left lg:text-[20px] lg:leading-[160%] mt-[18px]'>Irrespective of where your business is located, you should be discovered and able to collect payments from your customers either as a one-off, automated or recurring payments golbally without frustration. </p>
                    <div onClick={openModal} className='btn w-full flex justify-center py-[13.5px] lg:py-4 lg:px-8 text-white mt-[18px] lg:mt-9 lg:w-[181px] cursor-pointer'>
                        Register Now
                    </div>
                </div>
                <div className='right'>
                    <div className='hidden lg:flex lg:w-[475px]'>
                        <img src={friend} alt='local business needs' />
                    </div>
                    <div className='lg:hidden flex justify-center'>
                        <img src={mobile_friend} alt='local business needs' />
                    </div>
                </div>
            </div>
            <div className='bottom flex flex-col lg:flex-row lg:justify-between mt-[67.2px] lg:mt-[232px]'>
                <div className='hidden lg:flex lg:w-[475px]'>
                    <img src={fam} alt='family'/>
                </div>
                <div className='lg:hidden flex justify-center'>
                    <img src={mobile_fam} alt='local business needs' />
                </div>
                <div className='flex justify-center flex-col lg:mt-[60px] lg:pt-[60px]'>
                    <h2 className='lg:w-[595px] mt-[15.5px] text-center lg:text-left font-medium lg:text-[46px] lg:leading-[56px] text-2xl'>Pay your friends & family globally</h2>
                    <p className='lg:w-[573px] text-center lg:text-left lg:text-[20px] lg:leading-[160%] mt-[18px]'>Request, send and receive money from friends and family globally in a fun and easy way on Spring. </p>
                    <div onClick={openModal} className='btn w-full flex justify-center py-[13.5px] lg:py-4 lg:px-8 text-white mt-[18px] lg:mt-9 lg:w-[181px] cursor-pointer'>Join our waitlist</div>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row lg:mt-[67px] lg:justify-between'>
                <div className='left flex flex-col '>
                    <div className='flex justify-center lg:justify-start lg:flex-col'>
                        <div className=''>
                            <img src={pay} alt='pay' className='hidden lg:flex h-[150px]'/>
                        </div>
                        <h2 className='lg:w-[595px] w-[317px] mt-[15.5px] text-center lg:text-left font-medium lg:text-[46px] lg:leading-[56px] text-2xl'>Pay your international tuition fees directly to your school</h2>
                    </div>
                    <p className='lg:w-[595px] text-center lg:text-left lg:text-[20px] lg:leading-[160%] mt-[18px]'>International students can now search and pay tuition fees directly to their school’s bank account at a cheaper FX rates, faster settlement periods without multiple calls to an entire family to make tuition payments. </p>
                    <div onClick={openModal} className='btn w-full flex justify-center py-[13.5px] lg:py-4 lg:px-8 text-white mt-[18px] lg:mt-9 lg:w-[181px] cursor-pointer'>Join our waitlist</div>
                </div>
                <div className='hidden lg:flex right mt-[34.2px] lg:h-[596px]'>
                    <img src={edu} alt='local business needs' />
                </div>
                <div className='lg:hidden flex justify-center mt-[34.2px]'>
                    <img src={mobile_edu} alt='local business needs' />
                </div>
            </div> */}
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