import React from 'react'
import styled from 'styled-components'
import add from '../images/add-money.png'
import Icon4 from '../images/Icon4.png'
import Icon2 from '../images/Icon2.png'
import Icon33 from '../images/Icon33.png'
import Icon1 from '../images/Icon1.png'

function GlobalSection() {
  return (
    <Section>
        <div className='top flex flex-col-reverse lg:flex-row lg:justify-between'>
            <div className='px-[66px] lg:pt-4 lg:pl-[187px]'>
                <img src={add} alt='add money' />
            </div>
            <div className='right flex flex-col items-center font-medium lg:ml-[256px] lg:pt-14 lg:pr-[63px] lg:items-start'>
                <h2 className='text-2xl text-center leading-7 pt-[33px] lg:text-left'>Global digital banking at your fingertips</h2>
                <p className='text-center lg:text-start leading-[140%] pt-[14px] text-xs w-[291px]'>Get free NGN, USD, GBP and EUR virtual accounts, wallets & cards for all required international transactions</p>
                <div className='flex flex-col mt-[31px] font-medium lg:items-start'>
                    <div className='flex flex-col items-center mb-6 lg:mb-[25px] lg:flex-row'>
                        <img src={Icon4} alt='icon' className='w-[40px] h-[40px]'/>
                        <h4 className='text-center lg:text-start text-sm tracking-tight w-[308px] px-[33px]'>Remote workers can get paid by foreign employers and clients.</h4>
                    </div>
                    <div className='flex flex-col items-center mb-6 lg:mb-[25px] lg:flex-row'>
                        <img src={Icon33} alt='icon' className='w-[40px] h-[40px]'/>
                        <h4 className='text-center lg:text-start text-sm tracking-tight w-[308px] px-[33px]'>Get quick & efficient foreign exchange transactions within the same app.</h4>
                    </div>
                    <div className='flex flex-col items-center mb-6 lg:mb-[25px] lg:flex-row'>
                        <img src={Icon2} alt='icon' className='w-[40px] h-[40px]'/>
                        <h4 className='text-center lg:text-start text-sm tracking-tight w-[308px] px-[33px]'>Faster global money transfer with other international banks within Spring.</h4>
                    </div>
                    <div className='flex flex-col items-center mb-8 lg:mb-[38px] lg:flex-row'>
                        <img src={Icon1} alt='icon' className='w-[40px] h-[40px]'/>
                        <h4 className='text-center lg:text-start text-sm tracking-tight w-[308px] px-[33px]'>Opening an international bank account has never been this seamless.</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottom'></div>
    </Section>
  )
}

export default GlobalSection

const Section = styled.section`

    .top{
        background: linear-gradient(128.03deg, rgba(97, 153, 219, 0.1) -0.78%, rgba(75, 202, 105, 0.1) 90.56%);
    }

`