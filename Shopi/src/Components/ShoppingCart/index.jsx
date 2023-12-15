import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  
  const openCheckoutSideMenu = () => {
    context.openCartMenu();
    context.closeProductDetail();
  }
  
  return (
    <div className='relative flex gap-0.5 items-center' onClick={() => openCheckoutSideMenu()}>
        <ShoppingCartIcon className='w-7 h-7 fill-none stroke-black cursor-pointer' />
        
        {(context.cartProducts?.length >= 1) &&
            <div className='absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white'>
            { context.cartProducts?.length }
        </div>
        }
    </div>
  )
}

export default ShoppingCart