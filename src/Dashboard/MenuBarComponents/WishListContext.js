import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../../firebase';

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [localWishlist, setLocalWishlist] = useState([]);
    const user = auth.currentUser;

    useEffect(() => {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
            setLocalWishlist(JSON.parse(storedWishlist));
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    useEffect(() => {
        if (wishlist.length > 0) {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
    }, [wishlist]);

    const addToWishlist = (card) => {
        if (user) {
            setWishlist([...wishlist, card]);
        } else {
            // Handle the case where the user is not logged in
        }
    };

    const removeFromWishlist = (courseID) => {
        setWishlist(wishlist.filter((card) => card.courseID !== courseID));
    };

    return (
        <WishListContext.Provider value={{ wishlist, setWishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishListContext.Provider>
    );
};

export { WishListProvider, WishListContext };
// Custom hook to use the wishlist context easily
export const useWishlist = () => useContext(WishListContext);