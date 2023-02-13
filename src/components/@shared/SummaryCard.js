import React from 'react'
import helperFunctions from '../../@helpers/helperFunction'

function SummaryCard({name, icon, amount, percentage}) {
  return (
    <div className='flex flex-col bg-white py-3 pl-4 pr-3 rounded-md lg:min-w-[230px]'>
        <div className='flex justify-between'>
            <h3 className=''>{name}</h3>
            <img src={icon} alt={name}/>
        </div>
        <div className='flex justify-between mt-7'>
            <h2 className='font-bold text-lg text-blue_text'>{helperFunctions.nairaFormat(amount)}</h2>
            <h4 className='font-[450] text-xs'>+{percentage}%</h4>
        </div>
    </div>
  )
}

export default SummaryCard