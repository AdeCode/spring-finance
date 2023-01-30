import React from 'react'
import styled from 'styled-components'
import SummaryCard from '../@shared/SummaryCard'
import waitListData from '../@shared/waitListData'

function Waitlist() {
  return (
    <Section className='mr-3'>
        <h2 className='title text-2xl mb-6'>Waitlist Information</h2>
        <div className='flex gap-3'>
            {
                waitListData.map(card => {
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
    </Section>
  )
}

const Section = styled.section`

`
export default Waitlist