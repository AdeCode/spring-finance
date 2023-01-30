import React from 'react'
import InputField from './@shared/InputField'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function LoginForm() {

    const loginMutation = ()=>{}

    const onLogin = (values) => {
        console.log(values)
    }

  return (
    <Section>
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
                        password: Yup.string()
                            .required("password field not be empty")
                            .min(6, "password be at least 11 characters")
                    })
                }
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false)
                    onLogin(values)
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
                        <InputField
                            name='password'
                            type='password'
                            placeholder='enter your password'
                            label='Password'
                            icon={true}
                        />
                        <div className='flex justify-end'>
                            <Link to='/forgot-password' className='forgot text-[#4BCA69] font-normal text-sm'>Forgot Password?</Link>
                        </div>
                        <button type="submit" disabled={isSubmitting} className='w-full py-[11px] text-white text-[16px] mt-[13px]'>
                            {
                                loginMutation.isLoading 
                                ? "Please wait..." 
                                : "Login Securely"
                            }
                        </button>
                    </Form>
                )}
            </Formik>
    </Section>
    
  )
}

const Section = styled.section`

    button{
        background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
        box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
        border-radius: 6px;
    }
   
`

export default LoginForm