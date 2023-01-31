import React from 'react'
import EnhancedTable from './Table'
import CustomerTable from './CustomerTable'


function Customers() {
  return (
    <div className='bg-white mt-7 py-5'>
        <h2 className='text-[#334D6E] text-base font-medium pl-4'>Recent Customers</h2>
        <EnhancedTable/>
        
    </div>
  )
}

export default Customers