import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Layout from '../../Components/Layout'
import React, { useContext, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

export default function SignUp() {
  const context = useContext(ShoppingCartContext)
  const account = JSON.parse(localStorage.getItem('account'));
  const form = useRef(null)

  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    //create account
    localStorage.setItem('account', JSON.stringify(data));
    context.setAccount(data);

    //signIn
    // context.handleSingIn()
    return <Navigate replace to={'/'} />
  }

  return (
    <Layout>
      <form ref={form} action="" method="get">

        <div className='flex flex-col text-center w-80 my-9 mt-2'>

          <div className='py-3 font-medium text-3xl relative'>  
            <Link to='/sign-in' className='absolute left-0 top-1/3'>
              <ChevronLeftIcon className='h-7 w-7 text-black/90 cursor-pointer'/>
            </Link>
            <span className='pt-5'>Sign Up</span>
          </div>

          <label htmlFor='name' className='text-left'>Your name:</label>
          <input 
            type='text'
            id='name'
            name='name'
            defaultValue={account?.name}
            placeholder='Peter'
            className='rounded-lg border-2 border-black p-2 text-sm mb-3' 

          />

          <label htmlFor='email' className='text-left'>Your email:</label>
          <input 
            type='email'
            id='email'
            name='email'
            defaultValue={account?.email}
            placeholder='hi@helloworld.com'
            className='rounded-lg border-2 border-black  p-2 text-sm mb-3' 
            
            />

          <label htmlFor='password' className='text-left'>Your password:</label>
          <input 
            type='password' 
            id='password'
            defaultValue={account?.password}
            name='password'
            placeholder='***********' 
            className='rounded-lg border-2 border-black p-2 text-sm mb-3' 
          />

          <Link to='/'>
            <button 
              className='py-3 w-full bg-black text-white cursor-pointer rounded-lg mt-2'
              onClick={() => createAnAccount()}
            >
              Create
            </button>
          </Link>
        </div>
      </form>
    </Layout>
  )
}