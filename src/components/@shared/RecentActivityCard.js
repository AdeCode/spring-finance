import React from 'react'
import Moment from 'react-moment';
// import 'moment-timezone';


function RecentActivityCard({img, name, type, amount, date}) {
  return (
    <div className='flex w-full border-b-[1px] border-[#DBE5EB] pb-3 pt-5'>
        <div className="mr-4">
            <img src={img} alt={name}/>
        </div>
        <div className="flex justify-between w-full">
            <div className='flex flex-col text-[#273240]'>
                <h3 className="font-semibold text-[13px] mb-1">{name}</h3>
                <h4 className="font-normail text-[11px] opacity-70">{type}</h4>
            </div>
            <div className='flex flex-col'>
                <h3 className="text-end text-[13px] text-black mb-1 font-bold">{amount}</h3>
                <h4 className="text-end font-normal text-[11px] text-[#273240]"><Moment date={date} /></h4>
            </div>
        </div>
    </div>
  )
}

export default RecentActivityCard