import React from 'react'
import {Field} from 'formik'

function CheckBox({label, value, name}) {
  return (
    <div className='flex gap-4'>
        <Field type="checkbox" name={name} value={value} />
        <h3 className='font-medium text-[#0E1F30] text-[15px]'>{label}</h3>
    </div>
  )
}

export default CheckBox