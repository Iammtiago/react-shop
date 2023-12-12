import React, { createContext } from 'react'
import { useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [isCartMenuOpen, setIsCartMenuOpen] = useState(false)

    // product detail ~ Show product
    const [productShow, setProductShow] = useState({});
    
    // Shopping cart ~ add products to cart 
    const [cartProducts, setCartProducts] = useState([]);
    
    // Shopping Cart ~ Order 
    const [order, setOrder] = useState([]);



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
            setOrder
        }}>
            {children}
        {/* </ShoppingCartContext.Provider > */}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider