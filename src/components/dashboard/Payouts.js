import React from 'react'
import payoutsCardData from '../@shared/PayoutsCardData'
import SummaryCard from '../@shared/SummaryCard'
import PayoutsTable from '../@tables/PayoutsTable'


function Payouts() {
    return (
        <div>
            <h2 className='text-[#6A707E] mb-6 text-xl font-semibold'>Payouts</h2>
            
            <div className='flex gap-2'>
            {
                payoutsCardData.map(card => {
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
            <div className='flex flex-col justify-between mt-10 pr-4'>
                {/* <div className='flex flex-col'>
                    <div className='flex flex-col text-[#6A707E]'>
                        <h2 className='text-xl'>Transactions History</h2>
                        <p className='text-[13px]'>List of payouts done by the user</p>
                    </div>
                    <div className='flex gap-[6px]'>
                        <h3 className=''>Search</h3>
                        <h3 className=''>Export all</h3>
                    </div>
                </div> */}
                <PayoutsTable/>
            </div>
        </div>
    )
}

export default Payouts