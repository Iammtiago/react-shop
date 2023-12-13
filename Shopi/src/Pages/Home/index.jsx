import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import CartMenu from '../../Components/CheckoutSideMenu'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Home = () => {  
  const context = useContext(ShoppingCartContext)
  // const currentPath = window.location.pathname
  // let indexed = currentPath.split("/")[1];
  // context.setSearchByCategory(indexed);
  // console.log(context.searchByCategory);

  const renderView = () => {

    if (context.filteredItems?.length > 0) {
      return context.filteredItems.map((item,index) => {
        if(item.category.name !== "Change title"){
          return <Card key={index} data={item} />
        }
      })

    } else {
      setTimeout(() => {
      }, 1000);
        return ( 
          <div className='col-span-4 flex justify-center'>
            <h2>no Results Found!</h2> 
          </div>
        );
    }
    
  }

  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative mb-5'>
        <h1 className='m-2 text-3xl'>Home</h1>
      </div>
      {/* <div className='h-16 mb-2'>
        <input 
          type="text" 
          className='border border-black bg-slate-100/20 w-80 rounded-lg p-4 mb-5 hover:border-gray-700/70 hover:border-b-2 hover:shadow-lg' 
          placeholder='Search a product...' 
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
      </div> */}

        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg flex-wrap'>
          {
            renderView() 
          }        
          {
            // context.filteredItems?.map((item,index) => ( <Card key={index} data={item} /> ))
          // context?.items?.map((item,index) => (<Card key={index} data={item} />))
          }
      </div>
      <ProductDetail />
      <CartMenu />
    </Layout>
  )
}

export default Home