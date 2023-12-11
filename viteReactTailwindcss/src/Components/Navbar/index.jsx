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
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    All
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/clothes' 
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/electronics' 
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/furnitures' 
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/toys' 
                className= {({ isActive }) => isActive ? activeStyle : undefined }
                >

                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/other' 
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
            <li>
                🛒{context.count}
            </li>
        </ul>
    </nav>
  )
}

export default Navbar