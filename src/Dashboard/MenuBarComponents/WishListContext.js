import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
    return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (card) => {
        setWishlist((prevWishlist) => [...prevWishlist, card]);
    };

    const removeFromWishlist = (courseID) => {
        setWishlist((prevWishlist) =>
            prevWishlist.filter((card) => card.courseID !== courseID)
        );
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
