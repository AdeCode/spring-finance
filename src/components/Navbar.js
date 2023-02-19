import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/logo1.png'
import menu from '../images/menu.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';
import WaitlistForm from './WaitlistForm';
import BusinessForm from './BusinessForm';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import close from '../images/close.png'
import './Navbar.css'
import playWhite from '../images/play-white.png'
import apple from '../images/apple.png'
import appleM from '../images/appleM.png'
import play from '../images/play.png'


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

    const style = ({ isActive }) => ({
        color: isActive ? '#4BCA69' : '#263238',
    });

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
                <div className='flex justify-between items-center w-full lg:px-[100px]'>
                    <div className='logo w-[90px] lg:w-[120px]'>
                        <Link to='./'>
                            <img src={logo} alt='Spring Finance Logo' />
                        </Link>
                    </div>
                    <div className='nav-menu'>
                        <ul className={`${mobileMenu ? 'mobile' : 'hidden'} lg:flex lg:justify-end lg:gap-12 lg:items-center lg:h-[100%] z-10`}>
                            <div className='flex justify-end lg:hidden my-4' onClick={() => setMobileMenu(false)}>
                                <img src={close} alt='close' />
                            </div>
                            <li className='' onClick={closeMenu}>
                                <span className='menu flex items-center gap-[3px] lg:gap-[6px] cursor-pointer font-semibold text-lg lg:m-0 lg:p-0 leading-[20px]'>
                                    Products
                                    <h3 className='flex new font-normal text-xs py-1 px-3 rounded-2xl'>New</h3>
                                    <MdOutlineKeyboardArrowDown className=''/>
                                </span>

                                <ul className='sub-menu absolute z-[1] bg-white lg:flex-col min-w-[200px] h-fit top-12'>
                                    <li className='lg:text-sm font-semibold'>P2P Payment</li>
                                    <li className='lg:text-sm font-semibold'>SMEs Global Payments</li>
                                    <li className='lg:text-sm font-semibold'>Cross-border Tuition Payments</li>
                                    <li className='lg:text-sm'>Global Payout/Payins</li>
                                    <li className='lg:text-sm'>Cross-border Virtual Wallets & Cards</li>
                                    <li className='lg:text-sm'>Domestic & Foreign Virtual Accounts</li>
                                </ul>
                            </li>
                            <li onClick={closeMenu} className='flex items-center flex-row lg:items-center lg:gap-[6px] cursor-pointer font-medium text-[22px] pb-[22px] lg:p-0 leading-[20px]  lg:font-semibold lg:text-lg lg:m-0'>
                                <span className='menu flex items-center gap-[3px] lg:gap-[6px] cursor-pointer font-semibold text-lg lg:m-0 pb-[24.6px] lg:p-0 leading-[20px]'>
                                    Industries
                                    <MdOutlineKeyboardArrowDown />
                                </span>
                                <ul className='sub-menu absolute z-[1] bg-white lg:flex-col min-w-[200px] h-fit top-12'>
                                    <li className='lg:text-sm'>Education
                                        <ul className='sub-menu1 bg-white lg:min-w-[250px]'>
                                            <li>
                                                <NavLink to='institution'>International  Institutions</NavLink>
                                            </li>
                                            <li>
                                                <NavLink>International  Students  <span className='text-light_green'>(Coming soon)</span></NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='lg:text-sm'>B2B
                                        <ul className='sub-menu1 bg-white lg:min-w-[250px]'>
                                            <li>
                                                <NavLink to='/'>Banking as a Service <span className='text-light_green'>(Coming soon)</span></NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* <li onClick={closeMenu} className='flex items-center flex-row lg:items-center lg:gap-[6px] cursor-pointer font-medium text-[22px] pb-[22px] lg:p-0 leading-[20px] text  lg:font-semibold lg:text-lg lg:m-0'>
                                <a href='https://holidaycards.getspring.finance/'>Holiday Card</a>
                            </li> */}
                            <li onClick={closeMenu} className='flex items-center flex-row lg:items-center lg:gap-[6px] cursor-pointer font-medium text-[22px] pb-[22px] lg:p-0 leading-[20px]  lg:font-semibold lg:text-lg lg:m-0'>
                                <NavLink to='./about' style={style}>About</NavLink>
                            </li>
                            {/* <li className='font-medium text-[22px] pb-[24.6px] lg:p-0 leading-[20px] lg:font-semibold lg:text-lg lg:m-0'>
                                About
                            </li>*/}
                            <li className='font-medium text-[22px] pb-[22px] lg:p-0 leading-[20px]  lg:font-semibold lg:text-lg lg:m-0'>
                                FAQ
                            </li> 
                            {/* <div className='flex flex-col lg:w-[30%] lg:hidden'>
                                <div onClick={openModal} className='mobile-btn cursor-pointer'>Join our waitlist</div>
                                <span onClick={openModal} className='mobile-btn reg cursor-pointer'>Register Now</span>
                            </div>
                            <div className='right lg:flex gap-9 hidden lg:justify-between'>
                                <h4 onClick={openModal} className='font-semibold text-lg cursor-pointer'>
                                    <NavLink to='./' style={style}>Join our waitlist</NavLink>
                                </h4>
                                <div className='btn cursor-pointer' onClick={openBusinessModal}>Register Now</div>
                                <ToastContainer />
                            </div> */}

                        </ul>

                    </div>
                    <div className='lg:mt-0 mt-[6px] lg:flex hidden lg:gap-2 gap-[2px] lg:py-2'>
                        <a href='https://play.google.com/store/apps/details?id=com.getspring.finance' target='_blank' rel='noreferrer' className='flex play-store items-center border-[2px] border-[#E2E4E8] lg:py-[6px] py-[2px] lg:px-5 px-[5px] rounded-[4px] lg:gap-4 lg:w-[199px]'>
                            <div>
                                <img src={play} alt='play store'/>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h4 className='text-[#7C8087] font-normal lg:text-xs text-[3px]'>Get it on</h4>
                                <h3 className='font-bold lg:text-lg text-[4.8px] text-left'>Google Play</h3>
                            </div>
                        </a>
                        <button className='flex app-store items-center lg:py-[6px] py-[2px] lg:px-5 px-1 rounded-[4px] lg:gap-4 gap-1 lg:w-[199px]'>
                            <div className='hidden lg:flex'>
                                <img src={apple} alt='app store'/>
                            </div>
                            <div className='lg:hidden'>
                                <img src={appleM} alt='app store'/>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h4 className='text-white font-normal lg:text-xs text-[3px]'>Coming soon</h4>
                                <h3 className='font-bold lg:text-lg text-[4.8px] text-white'>App Store</h3>
                            </div>
                        </button>
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

        .play-store{
            background: linear-gradient(128.03deg, rgba(97, 153, 219, 0.1) -0.78%, rgba(75, 202, 105, 0.1) 90.56%);
        }

        .app-store{
            background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
        }
    }
    
    
`