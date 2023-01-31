import React from 'react'
import styled from 'styled-components'
import CustomTable from '../@shared/CustomTable'
import CustomerTable from '../@shared/CustomerTable'
import CustomerListTable from '../@tables/CustomerListTable'


const headers = [
    {
      name:'name',
      label:'Name',
    },
    {
      name:'email',
      label:'Email',
    },
    {
      name:'address',
      label:'Address',
    },
  ]
  
  const tableData = [
    {
        name:'Omosetan Omorele',
        email:'omorele@yahoo.com',
        address:'Canada'
    },
    {
        name:'Kolapo Isola',
        email:'isola@yahoo.com',
        address:'Rwanda'
    },
    {
        name:'Oyin Jolayemi',
        email:'jolayei@yahoo.com',
        address:'Lagos'
    },
  ]

function Customers() {
  return (
    <Section className='flex flex-col'>
        {/* <div className='flex mb-8'>
            <h2 className='text-[#6A707E] text-2xl font-semibold'>Customers List</h2>
        </div> */}
        {/* <CustomerTable/> */}
        <CustomerListTable/>
    </Section>
  )
}

const Section = styled.section`

`

export default Customers