import React from 'react'
import Logo from  './Logo'
import { CiSearch } from  "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={'/'}>
          <Logo w= {120} h={50}/>
          </Link>
      </div>

      <div className='flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-1'>
        <input type="text" placeholder="Search product here"  className='w-full outline-none'/>
        <div className='text-lg min-w-[50px] h-8 bg-orange-200 flex items-center justify-center rounded-r-full'>
          <CiSearch />
        </div>
      </div>


      <div className='flex items-center gap-7'>
        <div className='text-3xl cursor-pointer'>
          <FaRegCircleUser />
          </div>

          <div className='text-2xl relative'>
            <span>< FaShoppingCart /></span>

            <div className='bg-orange-200 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
            <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
          <Link to={'/login'} className='px-3 py-1 rounded-full bg-orange-200 text-white hover:bg-orange-400'
          >Login</Link>
          </div>
        

      </div>


      </div>
    </header>
  )
}

export default Header