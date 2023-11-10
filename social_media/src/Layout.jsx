import React from 'react'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'
const Layout = () => {
  return (
    <>
   <div className='flex'>
    <Outlet />
   </div>
    </>
  )
}

export default Layout