import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import './style.css'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);

    const addProductToCart = (event) => {
        event.stopPropagation();
        let productData = context.productShow
        // context.setCount(context.count + 1)
        context.setCount(number => number + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCartMenu();
        context.toggleCartMenu();
    } 

  return (
    <aside className={`${context.isProductDetailOpen? 'flex' : 'hidden'} product-detail overflow-y-auto flex-col fixed right-0 border border-black rounded-lg bg-slate-50`}>
        <div className='flex justify-between items-center px-6 py-3'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div onClick={() => context.toggleProductDetail()} >
                <XMarkIcon className='w-6 h-6 text-black cursor-pointer'/>
            </div>
        </div>
        <figure className=' px-6'>
            <img 
                className='w-full h-full rounded-lg' 
                src={(context.productShow?.images?.length > 0)? context.productShow.images[0] : context.productShow.images} 
                alt={context.productShow?.title} 
            />
        </figure>
        <p className=' flex flex-col p-6'>
            <span className=' font-medium text-2xl mb-1'>${context.productShow?.price}</span> 
            <span className=' font-medium text-xl'>{context.productShow?.title}</span>
            <span className=' font-light text-sm'>{context.productShow?.description}</span>
        </p>

        <button className=' bg-black/90 py-3 m-5 mx-auto text-slate-50/90 rounded-lg w-10/12' onClick={(e) => addProductToCart(e)}>Add to cart</button>
    </aside>
  )
}

export default ProductDetail