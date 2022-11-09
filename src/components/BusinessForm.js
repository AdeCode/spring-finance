import React, { useState } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BusinessForm() {
    const [formData, setFormData] = useState({
        email: '',
        name: ''
    })

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        // console.log(formData)
    }

    const validate = (field) => {
        if (field === ''){
            return false;
        }else{
            return true;
        }
    }

    async function submitForm(e) {
        e.preventDefault()
        if(validate(formData.email) === false){
            return toast("The email field can not be empty.")
        }
        if(validate(formData.name) === false){
            return toast("The name field can not be empty.")
        }

        await fetch('https://geolocation-db.com/json/', { method: 'GET' }).then((res) => {
            res.json().then((json) => {
                // console.log(json)
                const bodyParams = {
                    "business_email": formData.email,
                    // "ip_address": json.IPv4,
                    // "city": json.city,
                    // "state": json.state,
                    "business_name": formData.name,
                    // "latitude": json.latitude,
                    // "longitude": json.longitude,
                    // "form": 1
                };
                console.log(bodyParams)

                fetch('https://frkrvith3d.execute-api.us-east-1.amazonaws.com/api/business', {
                    method: 'POST',
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
            <div className="form">
                <div className="form-group flex flex-col mb-6 lg:w-full">
                    <label for="email" className="text-xl text-label_text mb-[5px]">Name of Business</label>
                    <input
                        type="text"
                        required
                        value={formData.business_name}
                        className="form-control h-[45px] w-full border-2 border-light_gray rounded-md px-2"
                        placeholder=""
                        name='name'
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group flex flex-col mb-6">
                    <label for="email" className="text-xl text-label_text mb-[5px]">Business email address*</label>
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

                <button onClick={submitForm}
                    className="h-[56px] py-4 w-full md:px-[118px] rounded-md bg-gradient-to-t from-light_green to-dark_green text-white text-base">
                    Send
                </button>
                <ToastContainer />
            </div>
        </Wrapper>
    )
}

export default BusinessForm

const Wrapper = styled.div`

    input, select{
        background: linear-gradient(128.03deg, rgba(97, 153, 219, 0.1) -0.78%, rgba(75, 202, 105, 0.1) 90.56%);
    }
`