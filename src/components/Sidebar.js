import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import Logo from '../images/logo.png'
import menu from '../images/dashboard/menu.png'
import mobileLogo from '../images/dashboard/nlogo.png'
import styled from 'styled-components';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";




function Sidebar() {
    const [open, setOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    const toggleButton = () => {
        setOpen(!open)
    }

    const menuToggle = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <Div className='sidebar w-fit p-6 bg-white text-[#324054]'>
            <img src={Logo} alt='logo' className={`${open ? 'hidden' : 'flex'}`}/>
            {
                open ? 
                <button className='' onClick={toggleButton}>
                    <img src={mobileLogo} alt='mobile-logo' />
                    {/* <AiOutlineMenu /> */}
                </button>
                :
                <div className={`btn p-[15px] cursor-pointer flex gap-[18.5px] w-[248px] ${open ? 'hidden' : 'flex'}`}
                    onClick={toggleButton}
                >
                    <img src={menu} alt='menu'/>
                    <h3 className='font-medium text-base'>Dashboard</h3>
                </div>
            }
            
            <ul className='flex flex-col lg:mt-9'>
                <li className='flex flex-col' key={1}>
                    <div className='flex justify-between pr-6 items-center mb-[30px]' onClick={menuToggle}>
                        <h3 className='font-medium text-base'>People</h3>
                        <span className='icon'>
                            {
                                openMenu ? 
                                <MdKeyboardArrowUp/>
                                :
                                <MdKeyboardArrowDown/>
                            }
                        </span>
                    </div>
                    <ul className={`flex-col gap-[23px] ${openMenu ? 'flex' : 'hidden'}`}>
                        <li className='flex gap-5 items-center'>
                            <span className='icon text-xl'>
                                <FiUsers/>
                            </span>
                            <label className={`icon ${open ? 'hidden' : 'flex'} font-medium text-base`}>Menu</label>
                        </li>
                        <li className='flex gap-5 items-center'>
                            <span className='icon text-xl'>
                                <FiFileText/>
                            </span>
                            <label className={`icon ${open ? 'hidden' : 'flex'} font-medium text-base`}>Waitlist</label>
                        </li>
                        <li className='flex gap-5 items-center'>
                            <span className='icon text-xl'>
                                <FiUser/>
                            </span>
                            <label className={`icon ${open ? 'hidden' : 'flex'} font-medium text-base`}>Customers</label>
                        </li>
                    </ul>
                </li>
                <li className='flex gap-3' key={2}>
                    <span className='icon'>M</span><label className={`icon ${open ? 'hidden' : 'flex'}`}>Menu</label>
                </li>
                <li className='flex gap-3'>
                    <span className='icon'>M</span><label className={`icon ${open ? 'hidden' : 'flex'}`}>Menu</label>
                </li>
                <li className='flex flex-col' key={4}>
                    <div className='flex justify-between pr-6 items-center mb-[30px]' onClick={menuToggle}>
                        <h3 className='font-medium text-base'>People</h3>
                        <span className='icon'>
                            {
                                openMenu ? 
                                <MdKeyboardArrowUp/>
                                :
                                <MdKeyboardArrowDown/>
                            }
                        </span>
                    </div>
                    <ul className={`flex-col gap-[23px] ${openMenu ? 'flex' : 'hidden'}`}>
                        <li className='flex gap-5 items-center'>
                            <span className='icon text-xl'>
                                <FiUsers/>
                            </span>
                            <label className={`icon ${open ? 'hidden' : 'flex'} font-medium text-base`}>Menu</label>
                        </li>
                        <li className='flex gap-5 items-center'>
                            <span className='icon text-xl'>
                                <FiFileText/>
                            </span>
                            <label className={`icon ${open ? 'hidden' : 'flex'} font-medium text-base`}>Waitlist</label>
                        </li>
                        <li className='flex gap-5 items-center'>
                            <span className='icon text-xl'>
                                <FiUser/>
                            </span>
                            <label className={`icon ${open ? 'hidden' : 'flex'} font-medium text-base`}>Customers</label>
                        </li>
                    </ul>
                </li>
            </ul>
        </Div>
    )
}

const Div = styled.div`
    .btn{
        background: linear-gradient(128.03deg, rgba(97, 153, 219, 0.1) -0.78%, rgba(75, 202, 105, 0.1) 90.56%);

        h3{
            color:#6199DB;
        }
    }
`

export default Sidebar