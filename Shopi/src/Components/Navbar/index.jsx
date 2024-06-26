import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
// import { Bars4Icon } from '@heroicons/react/24/solid'
import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import ShoppingCart from '../ShoppingCart'

import { useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [query]);

  return matches;
};

const Navbar = () => {

    const context = useContext(ShoppingCartContext);

    // const isUserSignOut = isActiveAccount ?? context.signOut ;
    let isActiveAccount = JSON.parse(localStorage.getItem('sign-out'));
    const isUserSignOut = isActiveAccount ?? false ;

    const handleSingOut = () => {
        const stringifiedSignOut = JSON.stringify(true);
        localStorage.setItem('sign-out', stringifiedSignOut);
        context.setSignOut(true);
    }

    // const isMobile = useMediaQuery('(max-width: 767.98px)');

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767.98);

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth <= 767.98);
    });

    console.log(isMobile);
    console.log(window.innerWidth);

    return (
        <>
            {(!isMobile) ? (
            <NavbarPc userSign={isUserSignOut} accountEmail={context.account.email} context={context}/>
            ) : (
                    <BottomMenu
                        userSign={isUserSignOut}
                    onCartClick={() => {context.toggleCartMenu()}}
                    onAccountClick={() => {}
                    }
                    accountEmail={context.account.email}
                    context={context}    
                />
                    
            )
                
            }

        </>
  )
}


export const NavbarPc = ({ userSign , accountEmail}) => {
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
    // const isUserSignOut = isActiveAccount ?? context.signOut ;

    const handleSingOut = () => {
        const stringifiedSignOut = JSON.stringify(true);
        localStorage.setItem('sign-out', stringifiedSignOut);
        context.setSignOut(true);
    }

    return (
      <nav className=' bg-slate-100 flex justify-between items-center w-full fixed z-10 top-0 py-5 px-7 text-base font-normal '>
        {/* window.innerWidth */}
        {(!userSign ) && 
            <>
                <ul className='flex items-center gap-3'>
                    <li className='font-bold text-2xl cursor-pointer'>
                        <NavLink 
                        to={`${userSign ? '/sign-in' : '/'}`} 
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
                {(window.innerWidth < 900)
                    
                }
            </>
        }



        <ul className='flex justify-start items-center gap-1 h-10 mx-7'> 
        {(!userSign ) && 
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
                { accountEmail }
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
            {(userSign ) &&
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
        {/* {(!userSign ) && 

        } */}

        </ul>
    </nav>
  )
}


const BottomMenu = ({ userSign, onCartClick, onAccountClick, accountEmail }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    // const isUserSignOut = isActiveAccount ?? context.signOut ;

    const handleSingOut = () => {
        const stringifiedSignOut = JSON.stringify(true);
        localStorage.setItem('sign-out', stringifiedSignOut);
        context.setSignOut(true);
    }

    const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen) };
    return (
      <nav className=' bg-slate-100 flex items-center fixed z-10 top-0 w-full py-5 px-7 text-base font-normal '>

        <button onClick={toggleMobileMenu} className="z-30 ">
            <svg
                className="fill-current w-5 h-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                {isMobileMenuOpen ? (
                <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
                ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                )}
            </svg>
        </button>
        {/* { (isMobileMenuOpen) &&  */}
        
            <div className={`${isMobileMenuOpen ? 'fixed inset-0 bg-slate-200 z-10 pt-10 text-xl flex items-center justify-start flex-col w-full' : 'hidden'} mobile-menu`}
            >        
                <ul className='flex items-center gap-3 flex-col'>

                    <li className='w-5 ml-3'>
                        <NavLink 
                            to='/' 
                            onClick={() =>{ context.setSearchByCategory('')
                                toggleMobileMenu()
                            }}
                            className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                        >

                            All
                        </NavLink>
                    </li>
                    <li className='w-14'>
                        <NavLink 
                            to='/clothes' 
                            onClick={() => {context.setSearchByCategory('clothes') 
                                toggleMobileMenu()
                            }}
                            className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                        >

                            Clothes
                        </NavLink>
                    </li>
                    <li className='w-20'>
                        <NavLink 
                            to='/electronics' 
                            onClick={() => {context.setSearchByCategory('electronics') 
                                toggleMobileMenu()
                            }}
                            className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                        >

                            Electronics
                        </NavLink>
                    </li>
                    <li className='w-11 '>
                        <NavLink 
                            to='/shoes' 
                            onClick={() => {context.setSearchByCategory('shoes') 
                                toggleMobileMenu()
                            }}
                            className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                        >

                            Shoes
                        </NavLink>
                    </li>
                    <li className='w-24 pr-1'>
                        <NavLink 
                            to='/miscellaneous' 
                            onClick={() => {context.setSearchByCategory('miscellaneous') 
                                toggleMobileMenu()
                            }}
                            className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                        >

                            Miscellaneous
                        </NavLink>
                    </li>
                    <li className='w-10 mx-1'>
                        <NavLink 
                            to='/other' 
                            onClick={() => {context.setSearchByCategory('other') 
                                toggleMobileMenu()
                            }}
                            className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                        >

                            Other
                        </NavLink>
                    </li>
                </ul>
                
                <ul className='w-full flex flex-col items-center gap-3'>
                    <li className='mt-4'> ------------ </li>
                    <li className='text-slate-700/60 mx-1'>
                        {context.account.email}
                    </li>
                    <li className=''>
                        <NavLink 
                            to='/my-orders' 
                            className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                            >
                            My Orders
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink 
                            to='/my-account' 
                            className= {({ isActive }) => isActive ? activeStyle : 'hover:font-medium w-16' }
                            >
                            My account
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink 
                            to='/sign-in' 
                            className="font-normal hover:font-medium w-16"
                            onClick={() => handleSingOut()}
                            >
                            Sign out
                        </NavLink>
                    </li >
                </ul>
                         
            </div>
                
            {
                (!userSign) &&
                <ul className='flex flex-row items-start '>
                    <li className='h-full my-2 mt-2  relative text-gray-400 ml-9'>
                        <input
                            type="text" 
                            className='border border-slate-500/90 mt-1 bg-slate-100/20 w-56 mx-3 rounded-lg p-1 pl-10 hover:border-slate-700/90 hover:border-b-2 hover:shadow-lg' 
                            placeholder={`Search a product...`} 
                            onChange={(event) => context.setSearchByTitle(event.target.value)}
                        />
                        <MagnifyingGlassIcon className="w-6 h-6 pointer-events-none absolute top-1/2  transform -translate-y-1/2 left-5" />

                    </li>
                    <li className=' cursor-pointer mt-3 ml-7' onClick={() => {context.toggleCartMenu()}}>
                        <ShoppingCart />
                    </li>
                </ul>
            }

            {(userSign ) &&
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
    </nav>
  )
}


export default Navbar