import React, { useState } from 'react'
import { Field, ErrorMessage } from 'formik'
import styled from 'styled-components'


function SelectField({name, label, type, value, placeholder, children}) {

  return (
    <Div className='form-control flex flex-col mb-6 relative lg:w-[321px]'>
        <label htmlFor={name} className='font-medium text-base text-[#273240] mb-[6px]'>{label}</label>
        <Field as="select" type={type} name={name} className='h-[46px] py-[11px] px-[14px] text-base text-input_text rounded-lg' placeholder={placeholder}>
            {children}
        </Field>
        <ErrorMessage name={name} component="div" className='text-red-500'/>
    </Div>
  )
}

const Div = styled.div`
  input{
    border: 2px solid #A0A3BD;
  }

  select{
    border: 2px solid #A0A3BD;
  }

  input:focus{
    outline: none !important;
    border: 2px solid #4BCA69;
  }
`

export default SelectField