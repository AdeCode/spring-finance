import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {fetchCountries, fetchStates} from '../services/fetchCountries';

function WaitlistForm() {
    const [formData, setFormData] = useState({
        email:'',
        country: '',
        user_type: ''
    })
    const [countries, setCountries] = useState([])

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        // console.log(formData)
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => { return res.json() })
            .then(data => {
                setCountries(data)
            })
            .catch(err => { console.log(err) })
    }, [])

    async function submitForm(e) {
        e.preventDefault()
        await fetch('https://geolocation-db.com/json/', { method: 'GET' }).then((res) => {
            res.json().then((json) => {
                console.log(json)
                const bodyParams = {
                    "email": formData.email,
                    "user_type": formData.user_type,
                    "ip_address": json.IPv4,
                    "city": json.city,
                    "state": json.state,
                    "country": formData.country,
                    "latitude": json.latitude,
                    "longitude": json.longitude,
                    "form": 1
                };


                fetch('https://frkrvith3d.execute-api.us-east-1.amazonaws.com/api/waitlist', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bodyParams)
                })
                    .then((data) => {
                        data.json().then((res) => {
                            console.log(res)
                            toast("You have joined the waiting list succesfully.")
                        });
                    })
                    .catch((err) => toast("An Error Occured!"));
            })

        })
    }

    

    return (
        <Wrapper>
            <div class="form">
                <div class="form-group flex flex-col mb-6">
                    <label for="email" class="text-xl text-label_text mb-[5px]">Email address*</label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        class="form-control h-[45px] w-full md:w-[350px] border-2 border-light_gray rounded-md px-2"
                        placeholder=""
                        name='email'
                        onChange={handleInputChange}
                    />
                </div>
                <div class="form-group flex flex-col mb-6">
                    <label for="country" class="text-xl text-label_text mb-[5px]">Country*</label>
                    <select id="countries" 
                        required
                        name='country' 
                        onChange={handleInputChange}
                        class="form-control h-[45px] md:w-[350px] border-2 border-light_gray rounded-md px-2"
                    >
                        <option>Select your country</option>
                        {
                            countries.map(country => {
                                return (
                                    <option value={country.name.common}>{country.name.common}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div class="form-group flex flex-col mb-6">
                    <label for="coutry" class="text-xl text-label_text mb-[5px]"> Please associate yourself as a/an
                        ...</label>
                    <div class="flex">
                        <span class="flex items-center">
                            <input
                                type="radio" id="html" class="form-control border-2 accent-bgsec"
                                name="user_type"
                                checked={formData.user_type === 'student'}
                                onChange={handleInputChange}
                                value="student"
                            />
                            <h3 class="pl-2 text-sm text-radio_text">Student</h3>
                        </span>
                        <span class="ml-2 flex items-center">
                            <input type="radio" id="html" class="form-control pl-4 accent-bgsec"
                                name="user_type"
                                checked={formData.user_type === 'individual'}
                                onChange={handleInputChange}
                                value="individual"
                            />
                            <h3 class="pl-2 text-sm text-radio_text">Individual</h3>
                        </span>
                        <span class="ml-2 flex items-center">
                            <input type="radio" id="html" class="form-control accent-bgsec"
                                name="user_type"
                                checked={formData.user_type === 'business'}
                                onChange={handleInputChange}
                                value="business"
                            />
                            <h3 class="pl-2 text-sm text-radio_text">Business Owner</h3>
                        </span>
                    </div>
                </div>
                <button onClick={submitForm}
                    class="h-[56px] py-4 w-full md:w-auto md:px-[118px] rounded-md bg-gradient-to-t from-light_green to-dark_green text-white text-base">
                    Get early access
                </button>
                <ToastContainer />
            </div>
        </Wrapper>
    )
}

export default WaitlistForm

const Wrapper = styled.div`

`