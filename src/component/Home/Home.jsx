import React from 'react'

const Home = () => {
    return (
        <div className='' >
            <div className='px-8 ' >
            <div className='flex justify-between  ' >
                <h1 className='  text-[#343C6A] text-[18px] font-[600] mt-[106px] ' >My Cards</h1>
                <div className='flex text-[#343C6A] gap-14 text-[18px] font-[600] mt-[106px] ' >
                    <h1>See All</h1>
                    <h1 className='mr-[120px]' >Recent Transaction</h1>
                </div>
            </div>

            <div className='card grid   lg:grid-cols-3 md:grid-cols-1 2xl:grid-cols-3 sm:grid-cols-1   gap-x-8 ' >
                <div 
                className="card-1 mt-[44px] bg-[#4C49ED]   p-6 text-[white] rounded-[20px] hover:border-[2px solid black hover:outline-none ]
                transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
                ">
                    <div className='flex justify-between  ' >
                        <h1 className='text-[18px] font-[400] ' >Balance</h1>
                        <div>
                            <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723724443/Ishan/gfdu3ufbjcwkdnyl0nnb.png" 
                            alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-[20px] font-[600] font-mono  ' >$5,756</h1>
                    </div>
                        <div className='flex justify-between pt-10   ' >
                            <p className=' text-[#eeeaea] font-[400] ' >CARD HOLDER</p>
                            <p className=' text-[#eeeaea] font-[400] mr-2 ' >VALID THRU</p>
                        </div>
                        <div className='flex justify-between font-mono text-[18px] ' >
                            <h1 className='text-[#FFFFFF]'>Eddy Cusuma</h1>
                            <h1 className= ' mr-[55px] ' >12/22</h1>
                        </div>
                    <div>
                        <div className='flex justify-between mt-6   ' >
                            <h1 className='text-[20px]' >3778 **** **** 1234</h1>
                            <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723729916/Ishan/vm1pjg7omlywlb5ijkxm.png" 
                            alt="" />
                        </div>
                    </div>
                </div>
                <div 
                className="card-1 mt-[44px] bg-[#4C49ED]  p-6 text-[white] rounded-[20px] hover:border-[2px solid black hover:outline-none ]
                transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
                ">
                    <div className='flex justify-between  ' >
                        <h1 className='text-[18px] font-[400] ' >Balance</h1>
                        <div>
                            <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723724443/Ishan/gfdu3ufbjcwkdnyl0nnb.png" 
                            alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-[20px] font-[600] font-mono  ' >$5,756</h1>
                    </div>
                        <div className='flex justify-between pt-10   ' >
                            <p className=' text-[#eeeaea] font-[400] ' >CARD HOLDER</p>
                            <p className=' text-[#eeeaea] font-[400] mr-2 ' >VALID THRU</p>
                        </div>
                        <div className='flex justify-between font-mono text-[18px] ' >
                            <h1 className='text-[#FFFFFF]'>Eddy Cusuma</h1>
                            <h1 className= ' mr-[55px] ' >12/22</h1>
                        </div>
                    <div>
                        <div className='flex justify-between mt-6   ' >
                            <h1 className='text-[20px]' >3778 **** **** 1234</h1>
                            <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723729916/Ishan/vm1pjg7omlywlb5ijkxm.png" 
                            alt="" />
                        </div>
                    </div>
                </div>
                <div 
                className="card-1 mt-[44px] bg-[#4C49ED]  p-6 text-[white] rounded-[20px] hover:border-[2px solid black hover:outline-none ]
                transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
                ">
                    <div className='flex justify-between  ' >
                        <h1 className='text-[18px] font-[400] ' >Balance</h1>
                        <div>
                            <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723724443/Ishan/gfdu3ufbjcwkdnyl0nnb.png" 
                            alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-[20px] font-[600] font-mono  ' >$5,756</h1>
                    </div>
                        <div className='flex justify-between pt-10   ' >
                            <p className=' text-[#eeeaea] font-[400] ' >CARD HOLDER</p>
                            <p className=' text-[#eeeaea] font-[400] mr-2 ' >VALID THRU</p>
                        </div>
                        <div className='flex justify-between font-mono text-[18px] ' >
                            <h1 className='text-[#FFFFFF]'>Eddy Cusuma</h1>
                            <h1 className= ' mr-[55px] ' >12/22</h1>
                        </div>
                    <div>
                        <div className='flex justify-between mt-6   ' >
                            <h1 className='text-[20px]' >3778 **** **** 1234</h1>
                            <img src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1723729916/Ishan/vm1pjg7omlywlb5ijkxm.png" 
                            alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home





{/* <div>
                            <p>VALID THRU</p>
                            <h1>12/22</h1>
                        </div> */}