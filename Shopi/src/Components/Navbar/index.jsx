import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import ShoppingCart from '../ShoppingCart'

// import { UserContext } from '../../Context'

const Navbar = () => {
    let activeStyle = "underline underline-offset-4 font-semibold"
    const context = useContext(ShoppingCartContext);

    // Sign Out
    let isActiveAccount = JSON.parse(localStorage.getItem('sign-out'));
    
    // Account 
    const account = JSON.parse(localStorage.getItem('account'));

    // Has an account
    const noAccountInLocalStorage = account ? Object.keys(account)?.length === 0 : true ;
    const noAccountInLocalState = context.account ? Object.keys(context.account)?.length === 0 : true;
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
    const isUserSignOut = isActiveAccount ?? context.signOut ;

    const handleSingOut = () => {
        const stringifiedSignOut = JSON.stringify(true);
        localStorage.setItem('sign-out', stringifiedSignOut);
        context.setSignOut(true);
    }

  return (
    <nav className=' bg-slate-100 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-7 text-base font-normal '>
        <ul className='flex items-center gap-3'>
            <li className='font-bold text-2xl cursor-pointer'>
                <NavLink 
                to={`${isUserSignOut ? '/sign-in' : '/'}`} 
                >
                    Shopi
                </NavLink>
            </li>
            <li className='w-5 ml-3'>
                <NavLink 
                    to='/' 
                    onClick={() => context.setSearchByCategory('')}
                    className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                >

                    All
                </NavLink>
            </li>
            <li className='w-14'>
                <NavLink 
                    to='/clothes' 
                    onClick={() => context.setSearchByCategory('clothes')}
                    className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                >

                    Clothes
                </NavLink>
            </li>
            <li className='w-20'>
                <NavLink 
                    to='/electronics' 
                    onClick={() => context.setSearchByCategory('electronics')}
                    className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                >

                    Electronics
                </NavLink>
            </li>
            <li className='w-11 '>
                <NavLink 
                    to='/shoes' 
                    onClick={() => context.setSearchByCategory('shoes')}
                    className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                >

                    Shoes
                </NavLink>
            </li>
            <li className='w-24 pr-1'>
                <NavLink 
                    to='/miscellaneous' 
                    onClick={() => context.setSearchByCategory('miscellaneous')}
                    className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                >

                    Miscellaneous
                </NavLink>
            </li>
            <li className='w-10 mx-1'>
                <NavLink 
                    to='/other' 
                    onClick={() => context.setSearchByCategory('other')}
                    className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                >

                    Other
                </NavLink>
            </li>
        </ul>

        <ul className='flex justify-start items-center gap-1 h-10 mx-7'> 
        {(!isUserSignOut ) && 
        <div className='flex items-center gap-1 h-10'>
            <li className='h-full my-2 mt-2 mr-1 relative text-gray-400'>
                <input
                    type="text" 
                    className='border border-slate-500/90 mt-1 bg-slate-100/20 w-56 mx-3 rounded-lg p-1 pl-10 hover:border-slate-700/90 hover:border-b-2 hover:shadow-lg' 
                    placeholder={`Search a product...`} 
                    onChange={(event) => context.setSearchByTitle(event.target.value)}
                />
                <MagnifyingGlassIcon className="w-6 h-6 pointer-events-none absolute top-1/2  transform -translate-y-1/2 left-7" />

            </li>
            <li className='text-slate-700/60 mx-2'>
                { context.account.email }
            </li>
            <li className='w-20  mx-0'>
                <NavLink 
                    to='/my-orders' 
                    className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                    >
                    My Orders
                </NavLink>
            </li>
            <div className='flex flex-col  items-center mt-0 gap-1 h-15 mx-1' >
                <li className='w-24 mx-1 '>
                    <NavLink 
                        to='/my-account' 
                        className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                        >
                        My account
                    </NavLink>
                </li>
                <li className='w-16 '>
                        <NavLink 
                            to='/sign-in' 
                            className="font-normal hover:font-medium w-16"
                            onClick={() => handleSingOut()}
                            >
                            Sign out
                        </NavLink>
                </li >
            </div>
                <li className=' cursor-pointer' onClick={() => {context.toggleCartMenu()}}>
                    <ShoppingCart />
                </li>
        </div>
        }
            {(isUserSignOut ) &&
                <div className='flex items-center gap-4 h-10'> 
                    <li className='w-24'>
                            <NavLink 
                                className={({ isActive }) => isActive ? "font-semibold" : 'hover:font-semibold w-16 font-medium' }
                                to='/sign-in' 
                            >
                            <button className='p-1 w-full bg-transparent border-2 border-black text-black/90 hover:text-white hover:bg-black hover:border-slate-400/70 cursor-pointer rounded-lg mt-2 text-lg'>
                                Sign in
                            </button>
                        </NavLink>
                    </li>
                    <li className='w-24'>
                            <NavLink 
                                className={({ isActive }) => isActive ? "font-semibold" : 'hover:font-semibold w-16 font-medium' }
                                to='/sign-up' 
                            >
                            <button className='p-1 w-full bg-transparent border-2 border-black text-black/90 hover:text-white hover:bg-black hover:border-slate-400/70 cursor-pointer rounded-lg mt-2 text-lg'>
                                Sign Up
                            </button>
                        </NavLink>
                    </li>
                </div>
            }
        {/* {(!isUserSignOut ) && 

        } */}

        </ul>
    </nav>
  )
}

export default Navbar