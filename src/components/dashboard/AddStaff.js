import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import avatar from '../../images/dashboard/avatar.png'
import * as Yup from 'yup'
// import InputField from '../@shared/InputField'
import InputField from '../@shared/dashboard/InputField'
import SelectField from '../@shared/dashboard/SelectField'
import styled from 'styled-components'

function AddStaff() {
    const [role, setRole] = useState('')

    const AddStaffMutation = () => { }

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
                    email: '',
                    phoneNumber1: '',
                    alternateNumber: '',
                    streetAddress1: '',
                    streetAddress2: '',
                    role: '',
                    firstName: '',
                    lastName: '',
                    age: 0,
                    gender: '',
                    country: '',
                    state: '',
                    town: '',

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
                        phoneNumber: Yup.string()
                            .required("Phone number is required"),
                        alternateNumber: Yup.string()
                            .required("Phone number is required"),
                        streetAddress1: Yup.string()
                            .required("Address is required"),
                        streetAddress2: Yup.string()
                            .required("Address is required"),
                        gender: Yup.string()
                            .required("Please select your gender"),
                        country: Yup.string()
                            .required("Please select your country"),
                        state: Yup.string()
                            .required("Please select your state"),
                        town: Yup.string()
                            .required("Please select your town"),
                        age: Yup.number('only number is accepted')
                            .min(18,'Invalid, can not be less than 18 years')
                            .required("Field is required"),
                    })
                }
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false)
                    onSubmit(values)
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='flex flex-col w-full'>
                        {/* <select
                            required
                            className="form-control h-[45px] lg:w-[355px]  border-2 border-light_gray rounded-md px-2 lg:mb-8"
                            name='role'
                            onChange={handleRoleChange}
                        >
                            <option value=''>Select role</option>
                            <option value='admin'>Admin</option>
                            <option value='super-admin'>Super Admin</option>
                        </select>
                        <ErrorMessage name='role' component="div" className='text-red-500' /> */}
                        <SelectField
                            name='role'
                            type='text'
                            label='User role'
                        >
                            <option value=''>Select</option>
                            <option value='admin'>Admin</option>
                            <option value='super-admin'>Super Admin</option>
                        </SelectField>
                        <hr />
                        <div className=''>
                            <h3 className='text-[#6A707E] text-xl'>New user Information</h3>
                            <div className='flex justify-center lg:mb-16'>
                                <div className='flex flex-col'>
                                    <h4 className='text-[#A0A3BD] font-medium text-xs'>Staff image</h4>
                                    <div className='lg:w-[166px] bg-[#E5E5E5] lg:h-[156px] rounded-[4px] flex justify-center items-center my-[11px]'>
                                        <img src={avatar} alt='avatar' />
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
                                        placeholder='E.g user@yahoo.com'
                                        label='Email Address'
                                    />
                                    <InputField
                                        name='phoneNumber'
                                        type='text'
                                        placeholder='E.g 08080342356 '
                                        label='Phone Number'
                                    />
                                    <InputField
                                        name='alternateNumber'
                                        type='text'
                                        placeholder='E.g 08080342356 '
                                        label='Phone Number (alternate number)'
                                    />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <InputField
                                        name='streetAddress1'
                                        type='text'
                                        placeholder='E.g 39 Oluwakemi Street 83759 SimisolaVille '
                                        label='Street Address 1'
                                    />
                                    <InputField
                                        name='streetAddress2'
                                        type='text'
                                        placeholder='E.g 39 Oluwakemi Street 83759 SimisolaVille '
                                        label='Street Address 2'
                                    />
                                    <SelectField
                                        name='gender'
                                        type='text'
                                        label='Gender'
                                    >
                                        <option value=''>Select gender</option>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                    </SelectField>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <SelectField
                                        name='country'
                                        type='text'
                                        label='Country'
                                    >
                                        <option value=''>Select</option>
                                        <option value='Nigeria'>Nigeria</option>
                                        <option value='Mali'>Mali</option>
                                    </SelectField>

                                    <SelectField
                                        name='state'
                                        type='text'
                                        label='State'
                                    >
                                        <option value=''>Select</option>
                                        <option value='Lagos'>Lagos</option>
                                        <option value='Oyo'>Oyo</option>
                                    </SelectField>

                                    <SelectField
                                        name='town'
                                        type='text'
                                        label='Town/City'
                                    >
                                        <option value=''>Select</option>
                                        <option value='Lagos'>Lagos</option>
                                        <option value='Ibadan'>Ibadan</option>
                                    </SelectField>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full lg:justify-end">
                            <Button type="submit" disabled={isSubmitting} className='py-[11px] w-fit lg:px-14 rounded-[5px] text-white text-[16px] mt-[13px]'>
                                {
                                    AddStaffMutation.isLoading
                                        ? "Please wait..."
                                        : "Submit"
                                }
                            </Button>
                        </div>

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

const Button = styled.button`
    background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
`

export default AddStaff