import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/logo1.png'
import menu from '../images/menu.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';
import WaitlistForm from './WaitlistForm';
import BusinessForm from './BusinessForm';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import close from '../images/close.png'
import './Navbar.css'

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    const [modal, setModal] = useState(false)

    const [businessModal, setBusinessModal] = useState(false)

    const closeBusinessModal = () => {
        setBusinessModal(false)
    }

    const openBusinessModal = () => {
        closeMenu()
        setBusinessModal(true)
    }


    const closeModal = () => {
        setModal(false)
        console.log(modal)
    }

    const openModal = () => {
        closeMenu()
        setModal(true)
    }

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
            <nav className='flex py-5 px-7  justify-between lg:gap-5 lg:h-[80px] items-center' id='top'>
                <div className='flex justify-between items-center w-full lg:px-[200px]'>
                    <div className='logo w-[90px] lg:w-[120px]'>
                        <Link to='./'>
                            <img src={logo} alt='Spring Finance Logo' />
                        </Link>
                    </div>
                    <div className='nav-menu'>
                        <ul className={`${mobileMenu ? 'mobile' : 'hidden'} lg:flex lg:justify-end lg:gap-9 lg:items-center lg:h-[100%]`}>
                            <div className='flex justify-end lg:hidden my-4' onClick={() => setMobileMenu(false)}>
                                <img src={close} alt='close' />
                            </div>
                            <li className=''>
                                <span className='menu flex items-center gap-[3px] lg:gap-[6px] cursor-pointer font-semibold text-lg lg:m-0 lg:p-0 leading-[20px]'>
                                    Products
                                    <h3 className='flex new font-normal text-sm py-1 px-3 rounded-2xl'>New</h3>
                                    <MdOutlineKeyboardArrowDown />
                                </span>

                                <ul className='sub-menu absolute z-[1] bg-white lg:flex-col min-w-[200px] h-fit top-12'>
                                    <li className='lg:text-sm'>P2P Payment</li>
                                    <li className='lg:text-sm'>SMEs Payments</li>
                                    <li className='lg:text-sm'>Cross-border Tuition Payments</li>
                                    <li className='lg:text-sm'>BaaS</li>
                                    <li className='lg:text-sm'>Global Payout/Payins</li>
                                    <li className='lg:text-sm'>Cross-border  Wallets & Cards</li>
                                    <li className='lg:text-sm'>Domestic & Foreign Accounts</li>
                                    <li className='lg:text-sm'>API</li>
                                </ul>
                            </li>
                            <li className='flex items-center flex-row lg:items-center lg:gap-[6px] cursor-pointer font-medium text-[22px] pb-[22px] lg:p-0 leading-[20px]  lg:font-semibold lg:text-lg lg:m-0'>
                                <span className='menu flex items-center gap-[3px] lg:gap-[6px] cursor-pointer font-semibold text-lg lg:m-0 pb-[24.6px] lg:p-0 leading-[20px]'>
                                    Industries
                                    <MdOutlineKeyboardArrowDown />
                                </span>
                                <ul className='sub-menu absolute z-[1] bg-white lg:flex-col min-w-[200px] h-fit top-12'>
                                    <li className='lg:text-sm'>Education
                                        <ul className='sub-menu1 bg-white'>
                                            <li>International  Institutions</li>
                                            <li>International  Students  (Coming soon)</li>
                                        </ul>
                                    </li>
                                    <li className='lg:text-sm'>B2B</li>
                                </ul>
                            </li>
                            {/* <li className='font-medium text-[22px] pb-[24.6px] lg:p-0 leading-[20px] lg:font-semibold lg:text-lg lg:m-0'>
                                About
                            </li>
                            <li className='font-medium text-[22px] pb-[22px] lg:p-0 leading-[20px]  lg:font-semibold lg:text-lg lg:m-0'>
                                FAQ
                            </li> */}
                            <div className='flex flex-col lg:w-[30%] lg:hidden'>
                                <div onClick={openModal} className='mobile-btn cursor-pointer'>Join our waitlist</div>
                                <span onClick={openModal} className='mobile-btn reg cursor-pointer'>Register Now</span>
                            </div>
                            <div className='right lg:flex gap-9 hidden lg:justify-between'>
                                <h4 onClick={openModal} className='font-semibold text-lg cursor-pointer'>Join our waitlist</h4>
                                <div className='btn cursor-pointer' onClick={openBusinessModal}>Register Now</div>
                                <ToastContainer />
                            </div>

                        </ul>

                    </div>
                    <button className='lg:hidden flex' onClick={toggleMobileMenu}>
                        <img src={menu} alt='menu' />
                    </button>
                </div>
            </nav>
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
    margin:0;
    padding: 0;
    nav{
        
        .new{
            background: linear-gradient(128.03deg, rgba(97, 153, 219, 0.1) -0.78%, rgba(75, 202, 105, 0.1) 90.56%);
        }

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
                padding: 8px 20px;
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