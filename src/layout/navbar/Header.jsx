import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
<div className=' fixed w-[calc(100vw-250px)]    top-0 z-40' >
    <div className=" w-full rounded h-[70px] px-8 flex justify-between items-center bg-white " >
        <h3 className='text-[#343C6A] font-[600] text-[26px] ' >Overview</h3>
        <div className=" mr-2" >
            <div className=" flex  gap-x-3 " >
                    <div className=" flex " >
                        <input type="text" placeholder="Search for something" 
                        className="px-4 w-[255px] h-[40px] bg-[#F5F7FA] rounded-[40px] outline-none " />
                </div>
                
            </div>
        </div>
        <div className=" mr-2" >
            <div className=" flex items-center justify-between  gap-x-3 " >
                <NavLink>
                    <img
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723701400/setting_ji3eqr.png" 
                    alt="" />  
                </NavLink>
                <NavLink>
                    <img className='mx-8' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723702134/Ishan/sxhvybpuzfvhrxvwbba3.png"
                    alt="" />
                </NavLink>
                <NavLink>
                    <img className=' rounded-full'
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723702512/Ishan/dkusqdlp2a5acoehdgbf.png"
                    alt=''/>
                </NavLink>
            </div>
        </div>
    </div>
</div>
    )
}

export default Header
