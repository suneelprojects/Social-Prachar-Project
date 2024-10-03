import React, { useEffect, useState } from 'react';
import { useWishlist } from '../../Dashboard/MenuBarComponents/WishListContext';
import emptystate from '../../assets/emptystate.svg';
import OneCard from '../../components/Cards/OneCard';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
    const { wishlist, setWishlist } = useWishlist();
    const navigate = useNavigate();
    const [localWishlist, setLocalWishlist] = useState([]);

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

    const handleCardTitleClick = (courseID) => {
        navigate(`/details/${courseID}`);
    };

    return (
        <div className="container-fluid p-3 mb-4">
            <h3>Wishlist</h3>
            <div className="d-flex flex-wrap">
                {localWishlist.length === 0 ? (
                    <>
                        <img
                            src={emptystate}
                            alt="emptystate Image"
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
                    localWishlist.map((card) => (
                        <OneCard
                            key={card.courseID}
                            card={card}
                            selectedButton="list"
                            handleCardTitleClick={handleCardTitleClick}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Wishlist;