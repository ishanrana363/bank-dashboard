import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className=" w-[250px] h-screen fixed bg-white top-0 left-0 shadow-xl ">
                        <nav className=' py-16 px-8 ' >
                            <ul className='' >
                                <li> <NavLink to={""} className="-mt-[40px] inline-block flex items-center gap-4 " >
                                            <img className='text-[#343C6A]  ' src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723699704/Ishan/bi0cbcumgxfac5cgyi1m.png" alt="" />
                                            <span className='text-[#B1B1B1] text-[18px] font-medium ' >
                                                BankDash.
                                            </span>
                                    </NavLink> 
                                </li>
                                <li> <NavLink to={""} className=" my-[10px] mt-8    inline-block flex items-center gap-4 " >
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
    )
}

export default Navbar
