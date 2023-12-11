import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

const Home = () => {
  const [Items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => {
      setItems(data)
    })

    return () => {
      
    }
  }, [])
  
  return (
    <Layout>
        <h1>Home</h1>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg '>
          {
            Items?.map(item => (
              <Card key={item.id} data={item} />
              ))
              
              // Items?.map(() => {
                //   return <Card />
                // })
          }
        </div>
    </Layout>
  )
}

export default Home