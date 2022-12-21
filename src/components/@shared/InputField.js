import React from 'react'
import { Field, ErrorMessage } from 'formik'


function InputField({name, label, type, value, placeholder}) {
  return (
    <div className='form-control flex flex-col mb-6'>
        <label htmlFor={name} className='font-medium text-lg text-label mb-[6px]'>{label}</label>
        <Field type={type} name={name} className='h-[46px] py-[11px] px-[14px] text-base text-input_text' placeholder={placeholder}/>
        <ErrorMessage name={name} component="div" className='text-red-500'/>
    </div>
  )
}

export default InputField