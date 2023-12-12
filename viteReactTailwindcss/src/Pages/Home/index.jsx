import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import CartMenu from '../../Components/CheckoutSideMenu'

const Home = () => {
  const [Items, setItems] = useState(null);

  useEffect(() => {
    try {
      
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => {
        setItems(data)
      })
      
    } catch (error) {
      console.log("ERROR: ", error);
    }

    return () => {
      
    }
  }, [])
  
  return (
    <Layout>
        <h1 className='m-2 text-3xl'>Home</h1>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg flex-wrap'>
          {
            Items?.map(item => (
              <Card key={item.id} data={item} />
              ))
              
              // Items?.map(() => {
                //   return <Card />
                // })
          }
        </div>
        <ProductDetail />
        <CartMenu />
    </Layout>
  )
}

export default Home