import React from 'react';
import { useWishlist } from '../../Dashboard/MenuBarComponents/WishListContext'; // Import the Wishlist context
import emptystate from '../../assets/emptystate.svg';

const Wishlist = () => {
    const { wishlist } = useWishlist(); // Get wishlist from context

    return (
        <div className='container-fluid p-3 mb-4'>
            <h3>Wishlist</h3>
            {wishlist.length === 0 ? (
                <>
                    <img
                        src={emptystate}
                        alt='emptystate Image'
                        style={{
                            alignSelf: 'center',
                            justifySelf: 'center',
                            height: 'auto',
                            width: '100%',
                        }}
                    />
                    <p style={{ textAlign: 'center' }}>No Data Available in this Section</p>
                </>
            ) : (
                wishlist.map((card) => (
                    <div key={card.courseID}>
                        {/* Render card details here */}
                        <h4>{card.title}</h4>
                        {/* Add other card details as needed */}
                    </div>
                ))
            )}
        </div>
    );
};

export default Wishlist;
