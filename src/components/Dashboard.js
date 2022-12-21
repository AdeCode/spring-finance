import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from './Sidebar';
import TopBar from './TopBar';

function Dashboard() {
    const [open, setOpen] = useState(false)

    const toggleButton = () => {
        setOpen(!open)
    }

  return (
    <Container className='bg-app_bar'>
        <div className='flex gap-[29px]'>
            <Sidebar/>
            <div className='flex flex-col'>
                <TopBar/>

                <div className='main w-full h-[100vh]'>

                </div>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    /* background: rgba(246, 246, 246, 0.34); */

    .main{
        border: 1px solid black;
    }
`
export default Dashboard