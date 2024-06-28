import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = useCallback((game) => {
        setCart((prevCart) => [...prevCart, game]);
    }, []);

    const removeFromCart = useCallback((gameId) => {
        setCart((prevCart) => prevCart.filter((item) => item.nsuid !== gameId));
    }, []);

    const value = {
        cart,
        addToCart,
        removeFromCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};