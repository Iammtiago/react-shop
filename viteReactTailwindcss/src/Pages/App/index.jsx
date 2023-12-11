import { useRoutes, BrowserRouter } from "react-router-dom";
import React from 'react'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn';
import NotFound from '../NotFound';
import './App.css'
import Navbar from "../../Components/Navbar";
import ShoppingCartProvider from "../../Context";

export const AppRoutes = () => {
  let routes = [
    { path: '/', element: <Home/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/*', element: <NotFound/> }
  ];
  
  return useRoutes(routes);
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App

// const Header = () => {
//   return(
//     <>
//       <header className=" bg-slate-100  flex mb-8 p-2">
//         <a href='#' className=' flex-auto rounded-xl bg-slate-800 text-slate-100 text-center pt-2'>Inicio</a>
//         <a href='#' className=' flex-auto rounded-xl bg-slate-800 text-slate-100 text-center pt-2 pb-2 ml-5'>All</a>
//         <a href='#' className=' flex-auto rounded-xl bg-slate-800 text-slate-100 text-center pt-2 ml-5'>Clothes</a>
//         <a href='#' className=' flex-auto rounded-xl bg-slate-800 text-slate-100 text-center pt-2 ml-5'>Electronics</a>
//         <a href='#' className=' flex-auto rounded-xl bg-slate-800 text-slate-100 text-center pt-2 ml-5'>Furniture</a>
//         <a href='#' className=' flex-auto rounded-xl bg-slate-800 text-slate-100 text-center pt-2 ml-5'>Toys</a>
//         <a href='#' className=' flex-auto rounded-xl bg-slate-800 text-slate-100 text-center pt-2 ml-5'>Other</a>
//       </header>
//     </>
//   );
// }