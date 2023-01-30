import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo1.png'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from '../../components/@shared/InputField'




function ForgotPassword() {
    const submitMutation = ()=>{}

    const onSubmit = (values) => {

    }

  return (
    <Box className='flex justify-center pt-[107px]'>
        <div className='flex flex-col items-center'>
            <div className='mb-5'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='bg-white form px-16 py-7 flex flex-col items-center'>
                <h2 className='text-[#373737] font-bold text-2xl mb-7'>Forgot Password</h2>
                <p className='lg:w-[351px] font-normal text-sm text-center'>Enter the email address dar**********@gmail.com associated with your account</p>

                <Formik
                initialValues={{
                    email:'',
                    password:'',
                }}
                validationSchema={
                    Yup.object({                        
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("email field can not be empty"),
                    })
                }
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false)
                    onSubmit(values)
                }}
                >
                    {({ isSubmitting }) => (
                        <Form className='flex flex-col w-full'>
                            <InputField
                                name='email'
                                type='email'
                                placeholder='enter your email'
                                label='Email'
                            />
                            <button type="submit" disabled={isSubmitting} className='w-full py-[11px] text-white text-[16px] mt-[13px]'>
                                {
                                    submitMutation.isLoading 
                                    ? "Please wait..." 
                                    : "Continue"
                                }
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className='mt-5'>
                    <h3 className='text-[#C4C4C4] font-normal text-base'>Didn’t get code? <span className='text-[#4BCA69]'>Resend</span></h3>
                </div>
            </div>
        </div>
    </Box>
  )
}

const Box = styled.div`
    .form{
        box-shadow: 10px 50px 50px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
    }
    button{
        background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
        box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
        border-radius: 6px;
    }
`

export default ForgotPassword