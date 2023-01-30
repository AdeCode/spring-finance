import React from 'react'
import styled from 'styled-components'
import RecentActivityCard from './@shared/RecentActivityCard'
import cus1 from '../images/dashboard/cus1.png'
import cus2 from '../images/dashboard/cus2.png'
import cus3 from '../images/dashboard/cus3.png'


const recentActivity = [
    {
        name:'Mukaram Sekinat',
        type:'deposit',
        amount:'$2000',
        date:'2/10/2022',
        img:cus1
    },
    {
        name:'Gbemisola Adesina',
        type:'deposit',
        amount:'$2000',
        date:'1/01/2023',
        img:cus2
    },
    {
        name:'Rohija Jaban',
        type:'deposit',
        amount:'$2000',
        date:'1/23/2023',
        img:cus3
    },
]

function RecentActivity() {
  return (
    <Div className='flex flex-col'>
        <div className='flex justify-between mb-4'>
            <h3 className='font-medium text-[#334D6E] text-[17px]'>Recent Activity</h3>
            <h4 className='text-[12px] view'>View all</h4>
        </div>
        {
            recentActivity.map(({name,type,date,amount, img})=>{
                return(
                    <RecentActivityCard
                        name={name}
                        type={type}
                        date={date}
                        amount={amount}
                        img={img}
                    />
                )
            })
        }
    </Div>
  )
}

const Div = styled.div`
    .view{
        color: rgba(51, 77, 110, 0.7);
    }
`

export default RecentActivity