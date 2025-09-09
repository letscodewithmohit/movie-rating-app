import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Home from '../pages/home/Home'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
   <>
    <div className='flex flex-col min-h-screen '>
    <header><Header/></header>

     <main  className="flex-grow container mx-auto p-4"><Outlet/></main>

    <footer><Footer/></footer>
    </div>
   </>
  )
}

export default MainLayout