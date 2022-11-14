import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';

function InstitutionForm() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        more: 'Anything you want us to know?'
    })

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        // console.log(formData)
    }

    const submitForm = () => {

    }

  return (
    <div className='lg:bg-white lg:py-9 lg:px-20 px-[50px]'>
        <div className="form lg:w-[349px]">
                <div className="form-group flex flex-col mb-6 lg:w-full">
                    <label for="email" className="text-xl text-label_text mb-[5px]">First & Last Name</label>
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
                <div className="form-group flex flex-col mb-6 lg:w-full">
                    <label for="email" className="text-xl text-label_text mb-[5px]">Country*</label>
                    <select
                        type="text"
                        required
                        value={formData.business_name}
                        className="form-control h-[45px] w-full border-2 border-light_gray rounded-md px-2"
                        placeholder=""
                        name='name'
                        onChange={handleInputChange}
                    >
                        <option></option>
                    </select>
                </div>
                <div className="form-group flex flex-col mb-6">
                    <label for="institution" className="text-xl text-label_text mb-[5px]">Email address*</label>
                    <input
                        type="email"
                        required
                        value={formData.institution}
                        className="form-control h-[45px] w-full border-2 border-light_gray rounded-md px-2"
                        placeholder=""
                        name='institution'
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group flex flex-col mb-6">
                    <label for="institution" className="text-xl text-label_text mb-[5px]">Your institution?</label>
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
                    {/* <input
                        type="text"
                        required
                        value={formData.more}
                        className="form-control h-[45px] w-full border-2 border-light_gray rounded-md px-2 lg:h-[200px]"
                        placeholder="Anything you want us to know?"
                        name='more'
                        onChange={handleInputChange}
                    /> */}
                    <textarea
                        className="form-control h-[45px] w-full border-2 border-light_gray rounded-md px-2"
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
                <ToastContainer />
            </div>
    </div>
  )
}

export default InstitutionForm