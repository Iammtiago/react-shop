import React, { createContext, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';

export const ShoppingCartContext = createContext()

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account');
    const signOutInLocalStorage = localStorage.getItem('sign-out');
    let parsedAccount;
    let parsedSignOut;

    if(!accountInLocalStorage){
        localStorage.setItem('account', JSON.stringify({}));
        parsedAccount = {};

    } else {
        parsedAccount = JSON.parse(accountInLocalStorage);
    }

    if(!signOutInLocalStorage){
        localStorage.setItem('sign-out', JSON.stringify(false));
        parsedSignOut = true;
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage);
    }

};


export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [account, setAccount] = useState({});
    const [signOut, setSignOut] = useState(false);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [isCartMenuOpen, setIsCartMenuOpen] = useState(false)

    // product detail ~ Show product
    const [productShow, setProductShow] = useState({});
    
    // Shopping cart ~ add products to cart 
    const [cartProducts, setCartProducts] = useState([]);
    
    // Shopping Cart ~ Order 
    const [order, setOrder] = useState([]);

    //Get Products
    const [items, setItems] = useState(null);
    //filtered items
    const [filteredItems, setFilteredItems] = useState(null);

    //get product by title
    const [searchByTitle, setSearchByTitle] = useState("");

    //get product by category
    const [searchByCategory, setSearchByCategory] = useState("");


    useEffect(() => {
    try {
        
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => {setItems(data)})

    } catch (error) {
        console.log("ERROR: ", error);
    }

    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter( item => item?.title?.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter( item => item?.category?.name?.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    useEffect(() => {    

        if(searchByCategory?.length > 0 || searchByCategory !== ""){
            let itemsToRender = items?.filter( item => item?.category?.name?.toLowerCase().includes(searchByCategory.toLowerCase()))
            
            if(searchByTitle?.length >= 1) itemsToRender = filteredItemsByTitle(itemsToRender, searchByTitle);
            setFilteredItems(itemsToRender);

        } else {
            setFilteredItems(searchByTitle?.length > 0 ? filteredItemsByTitle(items, searchByTitle) : items )
            if(searchByTitle?.length < 1 ) setFilteredItems(items) 

        }

    }, [items, searchByTitle, searchByCategory])

    const handleSingIn = () => {
        localStorage.setItem('sign-out', JSON.stringify(false));
        setSignOut(false);
        //redirect
        return <Navigate replace to={'/'} />
      }


    const closeProductDetail = () => setIsProductDetailOpen(false)
    const openProductDetail = () => {
        setIsProductDetailOpen(true)
        closeCartMenu()
    }
    const toggleProductDetail = () => {
        setIsProductDetailOpen(!isProductDetailOpen);
        setIsCartMenuOpen(false)
    }
    
    const openCartMenu = () => {
        setIsCartMenuOpen(true)
        closeProductDetail()
    }
    const closeCartMenu = () => setIsCartMenuOpen(false)
    const toggleCartMenu = () => {
        setIsCartMenuOpen(!isCartMenuOpen);
        setIsProductDetailOpen(false);
    }

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id !== id)
        setCartProducts(filteredProducts);
    }

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            toggleProductDetail,
            productShow,
            setProductShow,
            cartProducts,
            setCartProducts,
            toggleCartMenu,
            isCartMenuOpen,
            setIsCartMenuOpen,
            openCartMenu,
            handleDelete,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            filteredItemsByTitle,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut,
            handleSingIn
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider