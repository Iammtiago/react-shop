import React, { createContext, useState, useEffect } from 'react'

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

    //Get Products
    const [items, setItems] = useState(null);
    //filtered items
    const [filteredItems, setFilteredItems] = useState(null);

    //get product by title
    const [searchByTitle, setSearchByTitle] = useState("");

    //get product by category
    const [searchByCategory, setSearchByCategory] = useState("");
    // console.log(searchByTitle);


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
            console.log('CATEGORY: ',searchByCategory);
            let itemsToRender = items?.filter( item => item?.category?.name?.toLowerCase().includes(searchByCategory.toLowerCase()))
            
            if(searchByTitle?.length >= 1) itemsToRender = filteredItemsByTitle(itemsToRender, searchByTitle);
            // let isTitle = searchByTitle?.length >= 1 ? filteredItemsByTitle(itemsToRender, searchByTitle) : itemsToRender;
            setFilteredItems(itemsToRender);

            // setFilteredItems()
            console.log('FILTEREDITEMS !== "": ',filteredItems);
        } else {
            setFilteredItems(searchByTitle?.length > 0 ? filteredItemsByTitle(items, searchByTitle) : items )
            if(searchByTitle?.length < 1 ) setFilteredItems(items) 
             
            console.log("LENGTH SEARCH: ", searchByTitle.length);
            console.log('FILTEREDITEMS ALL: ',filteredItems);
        }

        return () =>{
            setSearchByTitle(null)
            // setSearchByCategory(null)
        }
    }, [items, searchByTitle, searchByCategory])



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
        }}>
            {children}
        {/* </ShoppingCartContext.Provider > */}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider