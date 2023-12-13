import React from 'react'

const Layout = ({ children }) => {

  
  return (
    <div className='bg-slate-50 flex flex-col items-center mt-20  '>
        { children }
    </div>
  )
}

export default Layout