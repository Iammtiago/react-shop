import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'
import OrderCard from '../OrderCard'
import './style.css'
import { useState } from 'react'

const CartMenu = () => {
    const context = useContext(ShoppingCartContext);
    const [conta, setConta] = useState(0)

    const handleCheckout = () => {

        const date = new Date()
        const orderToAdd = {
            id: conta,
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([]);
        context.toggleCartMenu();
        context.setCount(0)
        setConta(conta => conta + 1);
    }

  return (
    <aside className={`${context.isCartMenuOpen? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-slate-50`}>
        <div className='flex justify-between items-center px-6 py-3'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div onClick={() => context.toggleCartMenu()}>
                <XMarkIcon className='w-6 h-6 text-black cursor-pointer'/>
            </div>
        </div>
        
        <div className='px-6 overflow-y-auto flex-1'>
            {
                context.cartProducts.map( product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imageUrl={(product.images?.length > 0)? product.images[0]: product.images}
                        price={product.price}
                        handleDelete={true}
                    />
                ))
            }
        </div>

        <div className='px-6 py-1 mb-5 '>
            <p className='flex justify-between items-center text-lg mb-2 mx-1'>
                <span className='font-medium '>Total: </span>
                <span className='font-semibold text-2xl'> ${totalPrice(context.cartProducts)}</span>
            </p>
            <Link to='/my-orders/last'>
                <button className='relative bg-black/90 py-3 text-slate-50/90 rounded-lg w-full ' onClick={() => handleCheckout()}>Checkout</button>
            </Link>

        </div>

    </aside>
  )
}

export default CartMenu