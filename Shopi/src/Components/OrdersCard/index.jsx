import { HashtagIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import React, { useContext } from 'react'

const OrdersCard = (props) => {
    const context = useContext(ShoppingCartContext);
    const { id, totalPrice, totalProducts, date } = props

  return (
    <div className='flex justify-between items-center flex-wrap mb-4 p-4 border border-black rounded-lg w-96'>
        <div className='flex justify-between items-center text-lg mx-1 w-full'>
              <span className='flex items-center'><HashtagIcon className='w-5 h-4 text-black' />{id + 1}</span>
            <p className='flex flex-col ml-2'>
              <span className='font-normal'>{date}</span>
              <span className='font-medium flex justify-center ml-1'>{totalProducts} articles</span>
            </p>
            <p className='flex justify-center items-center gap-1 mb-1'>
              <span className='font-semibold text-2xl'>${totalPrice}</span>
              <ChevronRightIcon className='w-6 h-6 mt-1 text-black'/>
            </p>
        </div>
    </div>

  )
}

export default OrdersCard