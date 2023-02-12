import React from 'react'
import styled from 'styled-components'
import SpringStaffTable from '../@tables/SpringStaffTable'

function SpringStaff() {
  return (
    <Container className='pr-8'>
        <div className="flex justify-between mb-8">
            <h3 className=''>Staff of Sprin finance</h3>
            <button className='rounded-[5px] text-white text-sm font-medium py-3 px-9'>Add staff</button>
        </div>
        <SpringStaffTable/>
    </Container>
  )
}

const Container = styled.div`
    button{
        background: linear-gradient(128.03deg, #6199DB -0.78%, #4BCA69 90.56%);
    }
`

export default SpringStaff