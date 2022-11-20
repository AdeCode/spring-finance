import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import edu from '../images/Iconedu.png'
import cash from '../images/Iconcash.png'
import wallet from '../images/Iconwallet.png'
import How from '../components/How';
import { AiOutlineSearch } from "react-icons/ai";
import services from '../services/FormService';
import {validate} from '../common/index'
import tution from '../images/institution/tution.png'


function InstitutionPage() {
    const [institution, setInstitution] = useState([])
    const [country, setCountry] = useState([])
    const [formData, setFormData] = useState({
        country: '',
        institution: ''
    })
   
    const handleInputChange = async(event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        
        if(name === 'country' && value !== ''){
            let selectedCountry = country.filter(coun => coun.name === value)
            filterCountries(selectedCountry[0].id)
        }
    }

    const filterCountries = (id) => {
        let institutions = services.getInstitutionsByCountry(id)
        institutions.then((res) => {
            console.log(res)
            setInstitution(res)
        })
    }

    useEffect(() => {
        let countries = services.fetchCountries()
        countries.then((res) => {
            setCountry(res.data.data.results)
        })      
    }, [formData.country])

    const submitForm = async(e) => {
        e.preventDefault()
        if(validate(formData.country) === false) {
            return toast("The country field can not be empty.")
        }
        if(validate(formData.institution) === false) {
            return toast("The institution field can not be empty.")
        }
        try{
            toast("Congratulations! your institution is listed.")
        }catch(err){
            console.log(err)
            toast("An Error Occured!")
        }
    }

    return (
        <Wrapper className='bg-background relative'>
            <div className="bg-mobileBg lg:bg-institute bg-no-repeat h-fit pb-8 lg:pb-0 pt-[17px] px-[25px] bg-cover lg:w-full lg:h-[500px]">
                <div className="w-full flex lg:justify-between items-center h-full lg:px-12 lg:pr-[180px]">
                    <div className="hidden lg:flex items-end h-full">
                        <img src={tution} alt='tuition' height='200px' width='300px'/>
                    </div>
                    <div className='hidden lg:block w-[580px] text-white font-bold text-4xl text-center justify-end items-center'>
                        <h1 className=''>Students can now pay tuition fees easily with no stress. </h1>
                    </div>
                </div>

                <div className='w-[50%] lg:hidden'>
                    <div className="form text-white">
                        <div className="form-group flex flex-col mb-3 lg:w-full">
                            <label htmlFor="email" className="font-normal text-[10px] mb-[3px]">Country*</label>
                            <select
                                type="text"
                                required
                                value={formData.country}
                                className="form-control h-[45px] w-full border-[0.8px] border-light_gray rounded-md px-2 text-label_text text-[11px]"
                                name='country'
                                onChange={handleInputChange}
                            >
                                <option>Select country of study</option>
                                {country &&
                                    country.map(country => {
                                        return (
                                            <option key={country.id} value={country.name}>{country.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group flex flex-col mb-[3px]">
                            <label htmlFor="email" className="font-normal text-[10px] mb-[3px]">Institution*</label>
                            <select
                                required
                                value={formData.institution}
                                className="form-control h-[45px] w-full border-[0.8px] border-light_gray rounded-md px-2 text-label_text text-[11px]"
                                name='institution'
                                onChange={handleInputChange}
                            >
                                <option>Confirm institution name</option>
                                { institution && 
                                    institution.map(institution => {
                                        return (
                                            <option className=''
                                                key={institution.id} value={institution.institution_name}>{institution.institution_name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <p className='text-[9px] leading-[14px] font-medium mb-3'>What if my institution is not listed?</p>

                        <button onClick={submitForm}
                            className="py-[6px] w-full md:px-[118px] rounded-md bg-gradient-to-t from-light_green to-dark_green text-white text-[10px]">
                            Check
                        </button>
                        <ToastContainer />
                    </div>
                </div>
                <div>
                </div>

            </div>
            <div className="hidden lg:flex justify-center w-full mb-[7%]">
                <div className="w-[1000px] h-[107px] bg-white absolute top-[19.5%] rounded-lg">
                    <form className='flex h-full'>
                        <div className="form-group flex items-center pl-[40px] gap-8">
                            <AiOutlineSearch style={{ color: "#8C97AC" }} />
                            <select
                                type="text"
                                required
                                value={formData.country}
                                className="form-control h-full w-[325px] border-[0.8px] focus:outline-none border-none px-2 text-placeholder"
                                placeholder="Type country name"
                                name='country'
                                onChange={handleInputChange}
                            >
                                <option>Select country of study</option>
                                { country &&
                                    country.map(country => {
                                        return (
                                            <option key={country.id} value={country.name}>{country.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group pr-[20px]">
                            <select
                                type="text"
                                required
                                value={formData.institution}
                                className="form-control h-full w-[325px] border-[0.8px] focus:outline-none border-none px-2 text-placeholder"
                                placeholder="Type country name"
                                name='institution'
                                onChange={handleInputChange}
                            >
                                <option>Confirm institution name</option>
                                {institution &&
                                    institution.map(institution => {
                                        return (
                                            <option key={institution.id} value={institution.institution_name}>{institution.institution_name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <button onClick={submitForm} type="submit" 
                            className="text-xl rounded-r-lg rounded-l-none text-white py-[44px] px-28 bg-gradient-to-t from-light_green to-dark_green rounded">
                            Check
                        </button>
                    </form>
                </div>
            </div>
            <div className='lg:px-[200px] py-[18px] px-[21px] gap-6 lg:gap-0 flex flex-col lg:flex-row bg-card lg:py-[56px] lg:justify-between'>
                <div className='flex flex-col lg:flex-row gap-[4px] lg:gap-6 items-center'>
                    <div>
                        <img src={edu} alt='icon' />
                    </div>
                    <h2 className='w-[237px] text-base font-normal text-center lg:text-start'>Pay for your tuition fees anywhere around the world</h2>
                </div>
                <hr className='divider hidden lg:block'></hr>
                <div className='flex flex-col lg:flex-row gap-[4px] lg:gap-6 items-center'>
                    <div>
                        <img src={wallet} alt='icon' />
                    </div>
                    <h2 className='w-[295px] text-base font-normal text-center lg:text-start'>Easy payment options you know and trust: online payments (credit/debit card), direct bank transfer.</h2>
                </div>
                <hr className='divider hidden lg:block'></hr>
                <div className='flex flex-col lg:flex-row gap-[4px] lg:gap-6 items-center'>
                    <div>
                        <img src={cash} alt='icon' />
                    </div>
                    <h2 className='w-[237px] text-base font-normal text-center lg:text-start'>Pay directly from your Spring App</h2>
                </div>
            </div>
            <How />
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