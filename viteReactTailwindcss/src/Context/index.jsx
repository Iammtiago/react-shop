import React, { createContext } from 'react'
import { useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        {/* </ShoppingCartContext.Provider > */}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider