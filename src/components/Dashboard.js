import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { Outlet, Navigate } from 'react-router-dom'


function Dashboard() {
    const [open, setOpen] = useState(false)

    const toggleButton = () => {
        setOpen(!open)
    }

    return (
        // <Container className='bg-app_bar'>
        //     <div className='flex gap-[29px]'>
        //         <Sidebar/>
        //         <div className='flex flex-col'>
        //             <TopBar/>

        //             <div className='main w-full h-[100vh]'>
        //                 <Outlet/>
        //             </div>
        //         </div>
        //     </div>
        // </Container>
        <Container className='bg-[#F5F5F5] hidden justify-between lg:flex w-full'>
            <div className='w-[13%] h-full'>
                <div className="fixed">
                    <Sidebar />
                </div>
            </div>
            <div className='flex flex-col w-[80%] min-h-[100vh]'>
                <TopBar />

                <div className='main min-h-full mt-4'>
                    <Outlet />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    /* background: rgba(246, 246, 246, 0.34); */

    .main{
        /* border: 1px solid black; */
    }
`
export default Dashboard