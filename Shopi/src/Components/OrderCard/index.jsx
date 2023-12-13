import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import React, { useContext } from 'react'

const OrderCard = (props) => {
    const context = useContext(ShoppingCartContext);
    const { id, title, imageUrl, price, handleDelete } = props

  return (
    <div className='flex justify-between items-center mb-3'>
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' 
                    src={imageUrl} 
                    alt={title} 
                />
            </figure>
            <p className='text-sm font-normal'>{title}</p>
        </div>        
        <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>${price}</p>
            {handleDelete &&  <XMarkIcon 
                        onClick={()=> context.handleDelete(id)}
                        className='h-5 w-5 text-black cursor-pointer'
                        /> 
            }
        </div>
    </div>

  )
}

export default OrderCard