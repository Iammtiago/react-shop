import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
    // let activeStyle = {
    //     textDecoration: ''
    // }

    const context = useContext(ShoppingCartContext);

    let activeStyle = "underline underline-offset-4 font-semibold"
  return (
    <nav className=' bg-slate-100 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-normal '>
        <ul className='flex items-center gap-3 '>
            <li className='font-bold text-lg cursor-pointer'>
                <NavLink 
                to='/' 
                >
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/' 
                onClick={() => context.setSearchByCategory('')}
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    All
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/clothes' 
                onClick={() => context.setSearchByCategory('clothes')}
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/electronics' 
                onClick={() => context.setSearchByCategory('electronics')}
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/furnitures' 
                onClick={() => context.setSearchByCategory('furnitures')}
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/toys' 
                onClick={() => context.setSearchByCategory('toys')}
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/other' 
                onClick={() => context.setSearchByCategory('other')}
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    Other
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-3'> 
            <li className='text-black/70'>
                tiagoddd279@gmail.com
            </li>
            <li>
                <NavLink 
                to='/my-orders' 
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/my-account' 
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    My account
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/sign-in' 
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    Sing in
                </NavLink>
            </li>
            <li className='flex gap-1 cursor-pointer' onClick={() => {context.toggleCartMenu()}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>

                <span className='font-bold'>{(context.count >= 1) && context.count }</span>   
            </li>
        </ul>
    </nav>
  )
}

export default Navbar