import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterSection from '../components/Footer'

function Layout() {
  return (
    <div className="App bg-background h-auto">
        <Navbar/>
        <Outlet/>
        <FooterSection/>
    </div>
  )
}

export default Layout