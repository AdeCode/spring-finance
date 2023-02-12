import React, { useState } from 'react'
import { Field, ErrorMessage } from 'formik'
import styled from 'styled-components'
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";


function InputField({name, label, type, value, placeholder, icon}) {
  const [show, setShow] = useState(false)

  const toggleIcon = () => {
    setShow(!show)
  }

  return (
    <Div className='form-control flex flex-col mb-6 relative lg:w-[321px]'>
        {
          icon ? 
          <div className='absolute right-2 top-12 cursor-pointer'  onClick={toggleIcon}>
            {
              show ?
              <IoEyeOutline/>
              :
              <IoEyeOffOutline/>
            }
          </div>
          : null
        }
        <label htmlFor={name} className='font-medium text-base text-[#273240] mb-[6px]'>{label}</label>
        <Field type={show ? 'text' : type} name={name} className='h-[46px] py-[11px] px-[14px] text-base text-input_text rounded-lg' placeholder={placeholder}/>
        <ErrorMessage name={name} component="div" className='text-red-500'/>
    </Div>
  )
}

const Div = styled.div`
  input{
    border: 2px solid #A0A3BD;
  }

  input:focus{
    outline: none !important;
    border: 2px solid #4BCA69;
  }
`

export default InputField