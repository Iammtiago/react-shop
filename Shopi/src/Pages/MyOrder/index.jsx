import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import OrdersCard from '../../Components/OrdersCard'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'
import OrderCard from '../../Components/OrderCard';


export default function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let indexed = currentPath.split("/")[2];
  if(indexed === "last") indexed = context.order?.length - 1;

  // console.log(context.order.slice(-1)[0].products);

  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative mb-5'>
        <Link to='/my-orders' className='absolute left-4 '>
          <ChevronLeftIcon className='h-7 w-7 text-black/90 cursor-pointer'/>
        </Link>
        <h1 className='m-2 text-3xl'>My Order</h1>
      </div>
      <div className='w-96'>
        <div className='flex flex-col m-3 px-2'>
            {
                context.order?.[indexed]?.products.map( product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imageUrl={(product.images?.length > 0)? product.images[0]: product.images}
                        price={product.price}
                        
                    />
                ))
            }
        </div>
      </div>
    </Layout>
  )
}
