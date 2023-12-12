import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { ShoppingCartContext } from '../../Context'

export default function MyOrders() {
  const context = useContext(ShoppingCartContext)
  
  // console.log(context.order);
  
  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative mb-5'>
        <h1 className='m-2 text-3xl'>My Orders</h1>
      </div>
      {
        context.order.map((or, index) => (
          <Link key={index} to={`/my-orders/${or.id}`}>
          {/* <Link key={index} to={`/my-orders/${index}`}> */}
            <OrdersCard 
              id={index} 
              date={or.date} 
              totalPrice={or.totalPrice} 
              totalProducts={or.totalProducts}
            />
          </Link>

        ))
      }
    </Layout>
  )
}
