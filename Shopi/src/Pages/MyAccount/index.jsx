import { useContext, useState, useRef } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";


export default function MyAccount() {
    const context = useContext(ShoppingCartContext);
    const [view, setView] = useState('user-info');
    const account = JSON.parse(localStorage.getItem('account'));
    const form = useRef(null)

    const editAccount = () => {
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }

        // Update account
        localStorage.setItem('account', JSON.stringify(data));
        context.Setaccount(data);
    } 

    const renderUserInfo = () => {
        return (
          <div className='flex flex-col w-80 mb-5 gap-1'>
            <p>
              <span className='font-normal text-sm'>Name: </span>
              <span className='font-medium text-sm'>{account?.name}</span>
            </p>
            <p>
              <span className='font-normal text-sm'>Email: </span>
              <span className='font-medium text-sm'>{account?.email}</span>
            </p>
            <p>
              <span className='font-normal text-sm'>Password: </span>
              <span className='font-medium text-sm'>{account?.password}</span>
            </p>
            <button
              className='py-3 mt-6 cursor-pointer rounded-lg border-2 border-black hover:shadow-lg  hover:font-semibold hover:border-none hover:text-slate-100 hover:bg-black'
            //   className='border border-black rounded-lg mt-6 py-3'
              onClick={() => setView('edit-user-info')}>
              Edit
            </button>
          </div>
        )
      }
    
      const renderEditUserInfo = () => {
        return (
          <form ref={form} className='flex flex-col gap-4 w-80'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name" className='font-normal text-base'>Your name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={account.name}
                placeholder="Peter"
                className='rounded-lg border border-black placeholder:font-normal placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email" className='font-normal text-base'>Your email:</label>
              <input
                type="text"
                id="email"
                name="email"
                defaultValue={account.email}
                placeholder="hi@helloworld.com"
                className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="password" className='font-normal text-base'>Your password:</label>
              <input
                type="text"
                id="password"
                name="password"
                defaultValue={account.password}
                placeholder="******"
                className='rounded-lg border border-black  placeholder:font-normal placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
              />
            </div>
            <button
              className='bg-black text-white w-full rounded-lg py-3'
              onClick={() => {setView('user-info'), editAccount()}}>
              Edit
            </button>
          </form>
        )
      }
    
      const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()
    

    return(
        <Layout>
            <div className='py-2 font-medium mb-5'>  
                <h1 className="font-medium text-3xl text-center mb-6 w-80">My Account</h1>
                {renderView()}
            </div>
        </Layout>
    );
};