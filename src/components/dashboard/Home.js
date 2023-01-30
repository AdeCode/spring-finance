import React from 'react'
import SummaryCard from '../@shared/SummaryCard'
import waiting from '../../images/dashboard/waiting.png'
import customers from '../../images/dashboard/customers.png'
import wallets from '../../images/dashboard/wallets.png'
import styled from 'styled-components'
import Spending from '../@shared/Spending'
import Customers from '../@shared/Customers'
import RecentActivity from '../RecentActivity'
import cardData from '../@shared/cardData'

// const cardData = [
//     {
//         title:'Waiting List',
//         icon:waiting,
//         amount:234000,
//         percentage:25
//     },
//     {
//         title:'Total Customers',
//         icon:customers,
//         amount:350,
//         percentage:5
//     },
//     {
//         title:'Total Wallets Issued',
//         icon:wallets,
//         amount:0,
//         percentage:0
//     },
//     {
//         title:'Total Transactions',
//         icon:wallets,
//         amount:2300,
//         percentage:15
//     },
//     {
//         title:'Total Wallets Issued',
//         icon:wallets,
//         amount:0,
//         percentage:0
//     }
// ]


function Home() {
  return (
    <Section>
        <h2 className='title text-2xl mb-6'>Dashboard</h2>
        <div className='flex gap-4'>
            <div className='w-[71%] flex flex-col gap-10'>
                <div className='flex gap-4 overflow-auto w-full hover:overflow-x-scroll container-snap'>
                    {cardData.map(card => {
                        return (
                            <SummaryCard
                                name={card.title}
                                icon={card.icon}
                                amount={card.amount}
                                percentage={card.percentage}
                            />
                        )
                    })}
                </div>
                <Spending/>
                <Customers/>
            </div>
            <div className='w-[23%] flex-col gap-6 fix'>
                <div className='w-[324px] h-[325px] bg-white rounded-md'>

                </div>
                <div className='w-[324px] bg-white rounded-md mt-6 py-5 px-4'>
                    <RecentActivity/>
                </div>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`
    /*hide scrool bar for Safari, Chrome and Opera */
    .container-snap::-webkit-scrollbar{
        display: none;
    }

    /*hide scrool bar for Edge IE and firefox */
    .container-snap{
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`

export default Home