import React from 'react'
import styled from 'styled-components'
import LoginForm from '../../components/LoginForm'
import currency from '../../images/auth/currency.png'
import logo from '../../images/logo1.png'

function Login() {
    return (
        <Container className='flex lg:justify-center lg:items-center w-full bg-white h-[100vh]'>
            <div className='flex content h-[100vh] lg:h-fit lg:w-fit'>
                <div className='left flex lg:items-center w-full lg:w-[600px] justify-center py-10 px-7 lg:px-[100px] lg:py-[66px]'>
                    <div className='w-full flex flex-col items-center'>
                        <img src={logo} alt='logo' className='lg:mb-12 mb-7' />
                        <h2 className='text-dark_text lg:font-bold font-semibold lg:text-[30px] text-[23px] mb-4'>Sign in to your account</h2>
                        <p className='text-[#8896AB] text-2xl lg:leading-7 mb-6 font-normal lg:font-medium'>Welcome back!</p>
                        <div className='form w-full'>
                            <LoginForm />
                        </div>
                    </div>
                </div>
                <div className='hidden lg:flex w-[600px]'>
                    <img src={currency} alt='bicycle' />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`

    .content{
        background: radial-gradient(50% 50% at 50% 50%, rgba(247, 248, 249, 0) 0%, #F7F8F9 100%)
        
    }

    input{
        border: 1px solid #D5DAE1;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
    }
    
`
export default Login

