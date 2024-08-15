import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* <div className='  bg-[white] shadow-md border border-indigo-600 px-5  ' >
                <div className="bank-nav flex justify-between items-center h-[80px] ">
                    <div className="logo">
                        <div className="logo-text flex items-center  ">
                            <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723699704/Ishan/bi0cbcumgxfac5cgyi1m.png" alt="img" />
                            <h5 className=' font-mont size-[25px] font-bold ml-2 ' >BankDash.</h5>
                            <h1 className='mx-20' >Overview</h1>
                        </div>
                    </div>
                    <div className=" flex items-center ">
                        <div className='' >
                            <input type=" text" placeholder='Search for something' />
                            <button>search</button>
                        </div>
                        <div className='flex items-center ' >
                            <NavLink to={""} >
                                <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723701400/setting_ji3eqr.png" alt="" />
                            </NavLink>
                            <NavLink to={""} >
                                <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723702134/Ishan/sxhvybpuzfvhrxvwbba3.png" alt="" />
                            </NavLink>
                            <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723702512/Ishan/dkusqdlp2a5acoehdgbf.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
            <div>
                <div className="slide-logo my-[10px]   bg-[#fbfbfb] w-[250px] shadow-xl  ">
                    <nav className='ml-[40px] py-16 ' >
                        <ul >
                            {/* <li> <NavLink to={""} className=" mt-[36px] inline-block flex items-center gap-4 " >
                                        <img className='text-[#343C6A]  ' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723699704/Ishan/bi0cbcumgxfac5cgyi1m.png" alt="" />
                                        <span className='font-bold text-[#343C6A] text-[20px] ' >BankDash.</span>
                                </NavLink> 
                            </li> */}
                            <li> <NavLink to={""} className=" my-[10px]   inline-block flex items-center gap-4 " >
                                        <img className='text-[#343C6A]  ' 
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723704968/Ishan/m5orjoilaloxd7gjdd6y.png" 
                                        alt="" />
                                        <span className='text-[#B1B1B1] text-[18px] font-medium leading-[3rem]' >Dashboard.</span>
                                </NavLink> 
                            </li>
                            <li> <NavLink to={"/transaction"} className=" my-[10px]   inline-block flex items-center gap-4 " >
                                        <img className='text-[#343C6A]  ' 
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723708287/Ishan/qmcxrzkqklba3kmkk2pp.png"
                                        alt="" />
                                        <span className='text-[#B1B1B1] text-[18px] font-medium leading-[3rem]' >
                                            Transactions.
                                        </span>
                                </NavLink> 
                            </li>
                            <li> <NavLink to={"/account"} className=" my-[10px]  inline-block flex items-center gap-4 " >
                                        <img className='text-[#343C6A]'
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723708394/Ishan/vxjyn8gcujto22kxhbx4.png"
                                        alt="" />
                                        <span className='text-[#B1B1B1] text-[18px] font-medium leading-[3rem]' >
                                            Account.
                                        </span>
                                </NavLink> 
                            </li>
                            <li> <NavLink to={"/investment"} className=" my-[10px]   inline-block flex items-center gap-4 " >
                                        <img className='text-[#343C6A]'
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723708469/Ishan/cta2jt9o0mqzmhkwjxwq.png" 
                                        alt="" />
                                        <span className='text-[#B1B1B1] text-[18px] font-medium leading-[3rem]' >
                                            Investments.
                                        </span>
                                </NavLink> 
                            </li>
                            <li> <NavLink to={"/credit-card"} className=" my-[10px] inline-block flex items-center gap-4 " >
                                        <img className='text-[#343C6A]  '
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723708528/Ishan/jtwoglevbtnou01kliml.png"
                                        alt="" />
                                        <span className='text-[#B1B1B1] text-[18px] font-medium leading-[3rem]' >
                                            Credit Cards.
                                        </span>
                                </NavLink> 
                            </li>
                            <li> <NavLink to={"/loans"} className="my-[10px] inline-block flex items-center gap-4 " >
                                        <img className='text-[#343C6A]  ' 
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723708596/Ishan/hpsqj1kybucxs1nnawdz.png" 
                                        alt="" />
                                        <span className='text-[#B1B1B1] text-[18px] font-medium leading-[3rem]' >
                                            Loans.
                                        </span>
                                </NavLink> 
                            </li>
                            <li> <NavLink to={"/service"} className="my-[10px]  inline-block flex items-center gap-4 " >
                                        <img className='text-[#343C6A]' 
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723708669/Ishan/sc1pxfnp5cov0rvydvp7.png"
                                        alt="" />
                                        <span className='text-[#B1B1B1] text-[18px] font-medium leading-[3rem]' >
                                            Services.
                                        </span>
                                </NavLink> 
                            </li>
                            <li> <NavLink to={"/privileges"} className="my-[10px] inline-block flex items-center gap-4 " >
                                        <img className='text-[#343C6A]'
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723708771/Ishan/ndibrkaods7we4offrxo.png"
                                        alt="" />
                                        <span className='text-[#B1B1B1] text-[18px] font-medium leading-[3rem]' >
                                            My Privileges.
                                        </span>
                                </NavLink> 
                            </li>
                            
                            <li> <NavLink to={"/setting"} className=" text-inter inline-block flex items-center gap-4  " >
                                        <img className='text-[#343C6A]'
                                        src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723701400/setting_ji3eqr.png"
                                        alt="" />
                                        <span className=' text-[#B1B1B1] text-[18px] font-medium leading-[3rem]' >
                                            Setting
                                        </span>
                                </NavLink> 
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
