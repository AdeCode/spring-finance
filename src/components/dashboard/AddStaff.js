import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import avatar from '../../images/dashboard/avatar.png'
import * as Yup from 'yup'
// import InputField from '../@shared/InputField'
import InputField from '../@shared/dashboard/InputField'

function AddStaff() {
    const [role, setRole] = useState('')

    const AddStaffMutation = () => {}

    const handleRoleChange = (e) => {
        setRole(e.target.value)
        console.log(role)
    }

    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <div className='pr-10'>
            <h3 className='text-[#6A707E] text-2xl lg:mb-8'>Add New Staff Member</h3>
            <Formik
                initialValues={{
                    email:'',
                    password:'',
                    role:'',
                    firstName:'',
                    lastName:'',
                }}
                validationSchema={
                    Yup.object({                        
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("email field can not be empty"),
                        password: Yup.string()
                            .required("password field not be empty")
                            .min(6, "password be at least 11 characters"),
                        role: Yup.string()
                            .required("Please select a role"),
                        firstName: Yup.string()
                            .required("First name is required"),
                        lastName: Yup.string()
                            .required("last name is required"),
                        color: Yup.string()
                            .required("color is required"),
                        phoneNumber: Yup.string()
                            .required("Phone number is required"),
                        alternateNumber: Yup.string()
                            .required("Phone number is required"),
                    })
                }
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false)
                    onSubmit(values)
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='flex flex-col w-full'>
                        <select
                            required
                            className="form-control h-[45px] lg:w-[355px]  border-2 border-light_gray rounded-md px-2 lg:mb-8"
                            name='role'
                            // value={role}
                            onChange={handleRoleChange}
                        >
                            <option value='' selected>User role</option>
                            <option value='admin'>Admin</option>
                            <option value='super-admin'>Super Admin</option>
                        </select>
                        <ErrorMessage name='role' component="div" className='text-red-500'/>

                        <hr />
                        <div className=''>
                            <h3 className='text-[#6A707E] text-xl'>New user Information</h3>
                            <div className='flex justify-center lg:mb-16'>
                                <div className='flex flex-col'>
                                    <h4 className='text-[#A0A3BD] font-medium text-xs'>Staff image</h4>
                                    <div className='lg:w-[166px] bg-[#E5E5E5] lg:h-[156px] rounded-[4px] flex justify-center items-center my-[11px]'>
                                        <img src={avatar} alt='avatar'/>
                                    </div>
                                    <h4 className='text-[10px] font-medium text-[#6A707E] text-center'>JPG, PNG. Max size of 800K</h4>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex justify-between w-full'>
                                    <InputField
                                        name='firstName'
                                        type='firstName'
                                        placeholder='E.g Oluwakemi'
                                        label='First name'
                                    />
                                    <InputField
                                        name='lastName'
                                        type='lastName'
                                        placeholder='E.g Simisola'
                                        label='Last name'
                                    />
                                    <InputField
                                        name='age'
                                        type='age'
                                        placeholder='enter your age'
                                        label='Age'
                                    />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <InputField
                                        name='email'
                                        type='email'
                                        placeholder='E.g Oluwakemi'
                                        label='Email Address'
                                    />
                                    <InputField
                                        name='phoneNumber'
                                        type='text'
                                        placeholder='E.g Simisola'
                                        label='Phone Number'
                                    />
                                    <InputField
                                        name='alternateNumber'
                                        type='text'
                                        placeholder='enter your age'
                                        label='Phone Number (alternate number)'
                                    />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <div className='lg:w-[321px] h-[42px]'>
                                        <Field as="select" name="color" className='w-full'>
                                            <option value="">Select color</option>
                                            <option value="red">Red</option>
                                            <option value="green">Green</option>
                                            <option value="blue">Blue</option>
                                        </Field>
                                    </div>
                                
                                    <InputField
                                        name='phoneNumber'
                                        type='text'
                                        placeholder='E.g Simisola'
                                        label='Phone Number'
                                    />
                                    <InputField
                                        name='alternateNumber'
                                        type='text'
                                        placeholder='enter your age'
                                        label='Phone Number (alternate number)'
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <button type="submit" disabled={isSubmitting} className='w-full py-[11px] text-white text-[16px] mt-[13px]'>
                            {
                                AddStaffMutation.isLoading 
                                ? "Please wait..." 
                                : "Login Securely"
                            }
                        </button>
                    </Form>
                )}
            </Formik>
            {/* <div className=''>
                <select
                    required
                    className="form-control h-[45px] lg:w-[355px]  border-2 border-light_gray rounded-md px-2 lg:mb-8"
                    name='role'
                    value={role}
                    onChange={handleRoleChange}
                >
                    <option value='' selected>User role</option>
                    <option value='admin'>Admin</option>
                    <option value='super-admin'>Super Admin</option>
                </select>
                <hr />
                <div className=''>
                    <h3 className='text-[#6A707E] text-xl'>New user Information</h3>
                    <div className='flex justify-center'>
                        <div className='flex flex-col'>
                            <h4 className='text-[#A0A3BD] font-medium text-xs'>Staff image</h4>
                            <div className='lg:w-[166px] bg-[#E5E5E5] lg:h-[156px] rounded-[4px] flex justify-center items-center my-[11px]'>
                                <img src={avatar} alt='avatar'/>
                            </div>
                            <h4 className='text-[10px] font-medium text-[#6A707E] text-center'>JPG, PNG. Max size of 800K</h4>
                        </div>
                    </div>
                    <div className=''>
                        <div className=''>

                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default AddStaff