import React from 'react'
import payinsCardData from '../@shared/PayinsCardData'
import SummaryCard from '../@shared/SummaryCard'
import PayinsTable from '../@tables/PayinsTable'


function Payins() {
    return (
        <div>
            <h2 className='mb-5 font-semibold'>Payins</h2>
            
            <div className='flex gap-2'>
            {
                payinsCardData.map(card => {
                    return (
                        <SummaryCard
                            name={card.title}
                            icon={card.icon}
                            amount={card.amount}
                            percentage={card.percentage}
                        />
                    )
                })
            }
            </div>
            <div className='flex justify-between mt-10 pr-4'>
                {/* <div className='flex flex-col text-[#6A707E]'>
                    <h2 className='text-xl'>Transactions History</h2>
                    <p className='text-[13px]'>List of payouts done by the user</p>
                </div>
                <div className='flex gap-[6px]'>
                    <h3 className=''>Search</h3>
                    <h3 className=''>Export all</h3>
                </div> */}
                <PayinsTable/>
            </div>
        </div>
    )
}

export default Payins