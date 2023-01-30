import React from 'react'
import BarChart from '../charts/BarChart'

function Spending() {
  return (
    <div className='w-full flex flex-col'>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <h3 className='text-blue_text text-lg font-medium'>Spending Statistic</h3>
                <span>vs last month</span>
                <h3 className=''>Sales from 1-12 Dec, 2022</h3>
            </div>
            <div className=''>
              <select className='py-3 px-3 rounded-md text-[#334D6E] border border-[#FBFCFE]'>
                <option value='' selected>Month</option>
                <option value=''>Year</option>
              </select>
            </div>
        </div>
        <div className=''>
          <BarChart/>
        </div>
    </div>
  )
}

export default Spending