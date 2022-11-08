import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/logo1.png'
import menu from '../images/menu.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';
import WaitlistForm from './WaitlistForm';
import {Link} from 'react-router-dom'

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    const [modal, setModal] = useState(false)
    
    const closeModal = () => {
        setModal(false)
        console.log(modal)
    }

    const openModal = () => {
        closeMenu()
        setModal(true)
    }

    const showNotice = () => {
        toast("Coming soon...")
    };

    const closeMenu = () => {
        setMobileMenu(false)
    }

    const [active, setActive] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
        setActive(!active)
        console.log(mobileMenu)
    }

    return (
        <Nav>
            {modal && 
            <Modal
                title='Join our waitlist'
                closeModal={()=>closeModal()}
            >
                <WaitlistForm/>
            </Modal>
        }
            <nav className='flex py-5 px-7 justify-between lg:gap-5 lg:h-[80px] items-center' id='top'>
                <div className="left lg:w-[70%] flex items-center lg:h-[100%]">
                    <div className='w-full lg:flex lg:justify-between lg:h-[100%] lg:items-center'>
                        <div className="logo lg:w-[30%]">
                            <Link to='./'>
                                <img src={logo} alt='Spring Finance Logo'/>    
                            </Link>
                        </div>
                        <ul className={`${mobileMenu ? 'mobile' : 'hidden'} lg:flex lg:w-[70%] lg:justify-between lg:items-center lg:h-[100%]`}>
                            <h2 className='flex justify-end lg:hidden mb-4' onClick={() => setMobileMenu(false)}>X</h2>
                            <li className='font-medium text-[22px] pb-[24.6px] lg:p-0 leading-[20px] lg:font-semibold lg:text-lg lg:m-0'>
                                Products
                            </li>
                            <li className='font-medium text-[22px] pb-[22px] lg:p-0 leading-[20px]  lg:font-semibold lg:text-lg lg:m-0'>
                                Industries
                            </li>
                            {/* <li className='font-medium text-[22px] pb-[24.6px] lg:p-0 leading-[20px] lg:font-semibold lg:text-lg lg:m-0'>
                                About
                            </li>
                            <li className='font-medium text-[22px] pb-[22px] lg:p-0 leading-[20px]  lg:font-semibold lg:text-lg lg:m-0'>
                                FAQ
                            </li> */}
                            <div className='flex flex-col lg:w-[30%] lg:hidden'>
                                <div onClick={openModal} className='mobile-btn cursor-pointer'>Join our waitlist</div>
                                <span className='mobile-btn reg cursor-pointer'>Register Now</span>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className='right lg:w-[30%] lg:flex hidden lg:justify-between'>
                    <h4 onClick={openModal} className='font-semibold text-lg cursor-pointer'>Join our waitlist</h4>
                    <div className='btn cursor-pointer' onClick={showNotice}>Register Now</div>
                    <ToastContainer />
                </div>
                <button className='lg:hidden' onClick={toggleMobileMenu}>
                    <img src={menu} alt='menu'/>
                </button>
            </nav>
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
    margin:0;
    padding: 0;
    nav{
        

        @media (min-width: 1024px) {
            border-bottom: 1px solid #F2F4F7;
            box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.09);
            padding:1.5rem 1rem;
        }

        .right{
            .btn{
                display: flex;
                /* justify-content: center;
                align-items: center; */
                padding: 16px 28px;
                background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
                box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
                border-radius: 8px;
                color: #FFFFFF;
                font-weight: 600;
                font-size: 18px;
                line-height: 28px;
            }

            h4{
                display: flex;
                align-items: center;
                font-weight: 600;
                font-size: 18px;
                line-height: 28px;
            }
        
        }

        ul{
            .mobile-btn{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60px;
                width: 100%;
                background: linear-gradient(128.03deg, rgba(97, 153, 219, 0.1) -0.78%, rgba(75, 202, 105, 0.1) 90.56%);                
                border-radius: 8px; 
                font-size: 18px;
                line-height: 28px;
                margin-bottom: 20px;
                font-weight: 600;
            }

            .reg{
                background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
                box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
                color: #FFFFFF;
            }

            
        }
    }
    
    
`