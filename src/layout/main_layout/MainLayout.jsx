import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Header from '../navbar/Header'

const MainLayout = () => {
    return (
        <div className='min-w-screen min-h-screen bg-slate-100' >
            <Navbar></Navbar>
        <div className="ml-[250px] w-[calc(100vw-268px)] min-h-[vw]" >

            <Header/>
            <div className=''>
                <div className='pt-[85px]' >
                    <Outlet/>
                </div>
            </div>
        </div>        
    </div>
    )
}

export default MainLayout
