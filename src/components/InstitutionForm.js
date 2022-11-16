import React, {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import services from '../services/FormService'
import {validate} from '../common/index'

function InstitutionForm() {
    const {submitInstitutionForm, fetchCountries} = services;

    const [formData, setFormData] = useState({
        name: '',
        country: '',
        email: '',
        institution: '',
        more: 'Anything you want us to know?'
    })
    const [countries, setCountries] = useState(null)
    
    const getCountries = async() => {
        await fetchCountries().then(response => {
            setCountries(response.data.data.results)
        })
        .catch(e => {
            console.log(e);
        })
    }

    useEffect(() => {
        getCountries()
    }, [])
    

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }


    const submitForm = async(e) => {
        e.preventDefault()
        if(validate(formData.name) === false) {
            return toast("The name field can not be empty.")
        }
        if(validate(formData.country) === false) {
            return toast("The country field can not be empty.")
        }
        if(validate(formData.email) === false) {
            return toast("The email field can not be empty.")
        }
        if(validate(formData.institution) === false) {
            return toast("The institution field can not be empty.")
        }
        submitInstitutionForm(formData)
        .then(response => {
            setFormData({
                name: '',
                country: '',
                email: '',
                institution: '',
                more:''
            })
            toast("Form submitted succesfully.")
        })
        .catch(e => {
            console.log(e)
            toast("An Error Occured!")
        });
    }


  return (
    <div className='lg:bg-white lg:py-9 lg:px-20 px-[50px]'>
        <div className="form lg:w-[349px]">
            <form>

                <div className="form-group flex flex-col mb-6 lg:w-full">
                    <label htmlFor="name" className="text-base text-label_text mb-[5px]">First & Last Name</label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        className="form-control h-[45px] w-full border-2 border-light_gray rounded-md px-2"
                        placeholder=""
                        name='name'
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group flex flex-col mb-6 lg:w-full">
                    <label htmlFor="country" className="text-base text-label_text mb-[5px]">Country*</label>
                    <select
                        required
                        className="form-control h-[45px] w-full border-2 border-light_gray rounded-md px-2"
                        name='country'
                        value={formData.country}
                        onChange={handleInputChange}
                    >
                        <option value=''>Select a country</option>
                        { countries &&
                            countries.map(country => {
                                return (
                                    <option key={country.id} value={country.name}>{country.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group flex flex-col mb-6">
                    <label htmlFor="institution" className="text-base text-label_text mb-[5px]">Email address*</label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        className="form-control h-[45px] w-full border-2 border-light_gray rounded-md px-2"
                        placeholder=""
                        name='email'
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group flex flex-col mb-6">
                    <label htmlFor="institution" className="text-base text-label_text mb-[5px]">Your institution?</label>
                    <input
                        type="text"
                        required
                        value={formData.institution}
                        className="form-control h-[45px] w-full border-2 border-light_gray rounded-md px-2"
                        placeholder=""
                        name='institution'
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group flex flex-col mb-6">
                   
                    <textarea
                        className="form-control w-full border-2 border-light_gray rounded-md px-2"
                        rows="4"
                        name='more'
                        value={formData.more}
                        onChange={handleInputChange}
                        style={{height: '100px'}}
                    >
                        Anything you want us to know?
                    </textarea>
                </div>

                <button onClick={submitForm}
                    className="h-[56px] flex items-center  justify-center py-4 w-full md:px-[118px] rounded-md bg-gradient-to-t from-light_green to-dark_green text-white text-base">
                    Send
                </button>
            </form>
                <ToastContainer />
        </div>
    </div>
  )
}

export default InstitutionForm