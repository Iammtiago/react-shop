import React from 'react'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = (data) => {

    const context = useContext(ShoppingCartContext);

    // console.log(data);
    let urlImg = data.data.images[0];
    let category = data.data.category.name
    let product = data.data.title
    let price = data.data.price

  return (
    <div className=' bg-slate-50 cursor-pointer w-56 h-60 rounded-lg m-1'>
        <figure className='relative mb-2 w-full h-4/5 '>
            <span className=' absolute bottom-0 left-0 bg-white/60 rounded-lg text-black font-medium text-xs m-2 px-3 py-0.5'>{ category }</span>
            {/* <img className=' w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="headphones" /> */}
            <img className=' w-full h-full object-cover rounded-lg' src={urlImg} alt="headphones" />
            <div 
                className='absolute top-0 right-0 flex justify-center items-center rounded-full bg-white/80 w-6 h-6 font-semibold m-2 p-1 pb-2'
                onClick={() => {
                        // let n = context.count;
                        // context.setCount(n + 1)
                        context.setCount(number => number + 1)
                    }
                }
            >
                +
            </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-medium m-1 ml-2'>{ product }</span>
            <span className=' text-lg font-medium'>${price}</span>
        </p>
    </div>
  )
}

export default Card