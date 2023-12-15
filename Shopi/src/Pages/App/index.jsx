import React, { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from "../../Context";
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn';
import SignUp from '../SignUp'
import NotFound from '../NotFound';
import Navbar from "../../Components/Navbar";
import CartMenu from "../../Components/CheckoutSideMenu";
import './App.css'

export const AppRoutes = () => {
  const context = useContext(ShoppingCartContext);

  // Sign Out
  let isActiveAccount = JSON.parse(localStorage.getItem('sign-out'));
  
  // Account 
  const account = JSON.parse(localStorage.getItem('account'));

  // Has an account
  const noAccountInLocalStorage = account ? Object.keys(account)?.length === 0 : true ;
  const noAccountInLocalState = context.account ? Object.keys(context.account)?.length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
  const isUserSignOut = context.signOut || isActiveAccount;

  let routes = [
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'sign-in'}/> },
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'sign-in'}/> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'sign-in'}/> },
    { path: '/shoes', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'sign-in'}/> },
    { path: '/Miscellaneous', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'sign-in'}/> },
    { path: '/other', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'sign-in'}/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-orders/last', element: <MyOrder/> },
    { path: '/my-orders/:id', element: <MyOrder/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/*', element: <NotFound/> }
  ];
  
  return useRoutes(routes);
}

function App() {
  initializeLocalStorage();

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CartMenu />
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