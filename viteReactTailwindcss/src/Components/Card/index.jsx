import { PlusSmallIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import React, { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {

    const context = useContext(ShoppingCartContext);
    const [show, setShow] = useState(false)

    let urlImg = data.data.images[0];
    let category = data.data.category.name
    let product = data.data.title
    let price = data.data.price

    const showProduct = (productDetail, id) => {
        context.openProductDetail();
        context.setProductShow(productDetail)
    }
    
    const addProductToCart = (event, productData) => {
        event.stopPropagation();
        // context.setCount(context.count + 1)
        context.setCount(number => number + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCartMenu();
    } 

    const deleteProductToCart = (event, id) => {
        event.stopPropagation();
        context.setCount(number => number - 1)
        context.handleDelete(id)
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts);
    }


    const renderIcon = (id) => {
        const isInCart = context.cartProducts.some(pro => pro.id === id);
        return (
            <div 
                className='absolute top-0 right-0 flex justify-center items-center  m-2 p-1'
                // className='absolute top-0 right-0 flex justify-center items-center rounded-full bg-white/80 w-6 h-6 font-semibold m-2 p-1 '
            >
                {   
                 isInCart? (
                         <CheckCircleIcon
                          className=' w-6 h-6 hover:bg-gray-900/90 bg-white/90 hover:text-white/90 text-gray-900/90 ring-2 ring-transparent transition duration-200 ease-in-out rounded-full'
                          onClick={(event) => deleteProductToCart(event, data.data.id)}
                          /> 

                     ): (
                        <PlusSmallIcon 
                            className=' w-6 h-6 hover:bg-white/90 bg-white/70 text-gray-900  hover:text-gray-800 border-solid border-2 border-white/90 hover:border-gray-800 transition duration-200 ease-in-out ring-2 ring-transparent rounded-full'
                            onClick={(event) => addProductToCart(event, data.data)}
                        /> 

                    )
                }
            </div>
        )
    }
    
    return (
        <div 
            className={` ${(context.productShow.id == data.data.id && context.isProductDetailOpen) ? ' border-solid border-2 border-gray-700 p-0 ': "border-none"} bg-slate-50 cursor-pointer w-56 max-w-sm h-64 pb-1 rounded-xl m-1 p-1`}

        >
        <figure 
            className={` relative mb-2  w-full h-4/5  p-1  `}
            onClick={() => showProduct(data.data, data.data.id)}
        >
            <span className=' absolute bottom-0 left-0 bg-white/60 rounded- text-black font-medium text-xs m-2 px-3 py-0.5'>{ category }</span>
            {/* <img className=' w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="headphones" /> */}
            <img className=' w-full h-full object-cover rounded-lg' src={urlImg} alt="headphones" />
            {renderIcon(data.data.id)} 
            {/* <PlusSmallIcon className='w-6 h-6 text-black'/> */}
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-medium m-1 ml-2'>{ product }</span>
            <span className=' text-lg font-medium mr-2'>${price}</span>
        </p>
    </div>
  )
}

export default Card