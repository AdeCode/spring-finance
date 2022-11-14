import React, { useState } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import edu from '../images/Iconedu.png'
import cash from '../images/Iconcash.png'
import wallet from '../images/Iconwallet.png'
import How from '../components/How';
import { AiOutlineSearch } from "react-icons/ai";


function InstitutionPage() {
    const [formData, setFormData] = useState({
        business_name: '',
        institution: ''
    })
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        // console.log(formData)
    }
    return (
        <Wrapper className='bg-background relative'>
            <div className="bg-mobileBg lg:bg-desktopBg bg-no-repeat h-fit pb-8 pt-[17px] px-[25px] bg-cover lg:w-full lg:h-[500px]">
                <div className="w-full flex justify-end items-center h-full">
                    <div className='hidden lg:block w-[780px] text-white font-bold text-5xl text-center justify-end items-center'>
                        <h1 className=''>Students can now pay tuition fees easily with no stress. </h1> 
                    </div>
                </div>
                
                <div className='w-[50%] lg:hidden'>
                    <div className="form text-white">
                        <div className="form-group flex flex-col mb-3 lg:w-full">
                            <label for="email" className="font-normal text-[10px] mb-[3px]">Name of Business</label>
                            <input
                                type="text"
                                required
                                value={formData.business_name}
                                className="form-control h-[45px] w-full border-[0.8px] border-light_gray rounded-md px-2 text-label_text"
                                placeholder="Type country name"
                                name='business_name'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group flex flex-col mb-[3px]">
                            <label for="email" className="font-normal text-[10px] mb-[3px]">Institution*</label>
                            <input
                                type="text"
                                required
                                value={formData.institution}
                                className="form-control h-[45px] w-full border-[0.8px] border-light_gray rounded-md px-2 text-label_text"
                                placeholder="Enter institution name"
                                name='institution'
                                onChange={handleInputChange}
                            />
                        </div>
                        <p className='text-[9px] leading-[14px] font-medium mb-3'>What if my institution is not listed?</p>

                        <button
                            className="py-[6px] w-full md:px-[118px] rounded-md bg-gradient-to-t from-light_green to-dark_green text-white text-[10px]">
                            Send
                        </button>
                        <ToastContainer />
                    </div>
                </div>
                <div>
                </div>

            </div>
            <div className="hidden lg:flex justify-center w-full mb-[7%]">
                <div className="w-[1000px] h-[107px] bg-white absolute top-[19.5%]">
                    <form className='flex h-full'>
                        <div className="form-group flex items-center pl-[40px] gap-8">
                            <AiOutlineSearch style={{color:"#8C97AC"}}/>
                            <select
                                type="text"
                                required
                                value={formData.business_name}
                                className="form-control h-full w-[325px] border-[0.8px] focus:outline-none border-none px-2 text-placeholder"
                                placeholder="Type country name"
                                name='business_name'
                                onChange={handleInputChange}
                            >
                                <option>Select country of study</option>
                                <option>One</option>
                                <option>One</option>
                            </select>
                        </div>
                        <div className="form-group pr-[20px]">
                            <select
                                type="text"
                                required
                                value={formData.business_name}
                                className="form-control h-full w-[325px] border-[0.8px] focus:outline-none border-none px-2 text-placeholder"
                                placeholder="Type country name"
                                name='business_name'
                                onChange={handleInputChange}
                            >
                                <option>Confirm institution name</option>
                                <option>One</option>
                                <option>One</option>
                            </select>
                        </div>
                        <btn type="submit" className="text-xl text-white py-[44px] px-28 bg-gradient-to-t from-light_green to-dark_green">Next</btn>
                    </form>
                </div>
            </div>
            <div className='lg:px-[200px] py-[18px] px-[21px] gap-6 lg:gap-0 flex flex-col lg:flex-row bg-card lg:py-[56px] lg:justify-between'>
                <div className='flex flex-col lg:flex-row gap-[4px] lg:gap-6 items-center'>
                    <div>
                        <img src={edu} alt='icon'/>
                    </div>
                    <h2 className='w-[237px] text-base font-medium text-center lg:text-start'>Pay into any education institutions around the world</h2>
                </div>
                <hr className='divider hidden lg:block'></hr>
                <div className='flex flex-col lg:flex-row gap-[4px] lg:gap-6 items-center'>
                    <div>
                        <img src={wallet} alt='icon'/>
                    </div>
                    <h2 className='w-[295px] text-base font-medium text-center lg:text-start'>Easy payment options you know and trust: online payments (credit/debit card), direct bank transfer.</h2>
                </div>
                <hr className='divider hidden lg:block'></hr>
                <div className='flex flex-col lg:flex-row gap-[4px] lg:gap-6 items-center'>
                    <div>
                        <img src={cash} alt='icon'/>
                    </div>
                    <h2 className='w-[237px] text-base font-medium text-center lg:text-start'>Pay directly from your Spring App</h2>
                </div>
            </div>
            <How/>
        </Wrapper>
    )
}

export default InstitutionPage

const Wrapper = styled.section`
    .divider{
        border-left-width: 3px;
        border-image: linear-gradient(to bottom, #6199DB, #4BCA69) 1;
        height: 100px;

    }
`