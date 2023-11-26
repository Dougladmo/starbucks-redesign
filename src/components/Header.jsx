import React from 'react'
import Logo from '../assets/starbucks-nav-logo.svg'

const Header = () => {
  return (
    <div className='w-full m-auto bg-transparent'>
        <div className='flex justify-between items-center px-16'>
            <a href="#">
                <img src={Logo} alt="Navbar logo" className='w-12' />
            </a>
            <nav>
                <ul className='flex gap-20 font-Open text-base drop-shadow-md font-bold justify-center items-center'>
                    <li><a href="#" className='hover:text-green  transition duration-500'>Home </a></li>
                    <li><a href="#" className='hover:text-green  transition duration-500'>Menu</a></li>
                    <li><a href="#" className='hover:text-green  transition duration-500'>Rewards</a></li>
                    <li><a href="#" className='hover:text-green  transition duration-500'>Gift Cards</a></li>
                    <li><a href="#" className='hover:text-green  transition duration-500'>Stores</a></li>
                </ul>
            </nav>
            <a href="#" className='bg-green text-sm font-Open shadow-md tracking-wider transition duration-500 text-white px-10 py-3 rounded-xl border-2 border-green hover:text-green hover:bg-blue'>Sign in</a>
        </div>
    </div>
  )
}

export default Header