import React, { useContext, useState } from 'react'
import Layout from '../../Components/Layout'
import { Link, NavLink, Navigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

export default function SignIn() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  // account
  const account = JSON.parse(localStorage.getItem('account'));
  
  
  //has an account
  const noAccountInLocalStorage = account ? Object.keys(account)?.length === 0 : true ;
  const noAccountInLocalState = context.account ? Object.keys(context.account)?.length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  return (
    <Layout>
      <div className='flex flex-col text-center w-72 m-9 mt-1'>
        <div className='py-2 font-medium text-xl'>  
          <h1 className='m-2 text-3xl'>Sign in</h1>
        </div>

        <label className='text-left'>Your email:</label>
        <input 
          type='email'
          id='email'
          className='rounded-lg border-2 border-black  p-2 text-sm mb-3' 
          defaultValue={account?.email}  
          placeholder='hi@helloworld.com' 
        />

        <label className='text-left'>Your password:</label>
        <input 
          id='password'
          className='rounded-lg border-2 border-black p-2 text-sm mb-3' 
          // defaultValue={account?.password} 
          type='password' 
          placeholder='**********' 
        />

        <NavLink to={'/'}>
          <button 
            className='py-3 w-full bg-black text-white cursor-pointer rounded-lg hover:shadow-lg'
            disabled={!hasUserAnAccount}
            onClick={() => { 
              let email = document.getElementById('email').value;
              let password = document.getElementById('password').value;
            
              if (email == account.email && password == account.password) {
                  localStorage.setItem('sign-out', JSON.stringify(false));
                  context.setSignOut(false);
                  
                  //redirect
                  return <Navigate replace to={'/'} />
              } else {
                location.reload()
              }

             }}
          >
            Log in
          </button>
        </NavLink>

        <span className='py-4 w-44 ml-14 cursor-pointer underline text-sm'>Forgot my password</span>

        <NavLink
            to='/sign-up'>
          <div 
            className='py-3 cursor-pointer rounded-lg border-2 border-black hover:shadow-lg  hover:font-semibold hover:border-none hover:text-slate-100 hover:bg-black'
            disabled={hasUserAnAccount}
          >
            Sign Up
          </div>
        </NavLink>
      </div>
    </Layout>
  )
}
