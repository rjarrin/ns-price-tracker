import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = useCallback((game) => {
        setCart((prevCart) => [...prevCart, game]);
    }, []);

    const value = {
        cart,
        addToCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};