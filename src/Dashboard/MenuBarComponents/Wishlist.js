import React from 'react';
import emptystate from '../../assets/emptystate.svg'

const Wishlist = () => {
    return (
        <div className='container-fluid p-3 mb-4'>
            <h3>Wishlist</h3>
            <img src={emptystate} alt='emptystate Image'
             style={{   alignSelf: 'center',
                       justifySelf: 'center',
                        height: 'auto',
                      width: '100%'}}>
                        
                      </img>
            <p style={{textAlign:'center'}}>No Data Available in this Section</p> 
        </div>
    );
};

export default Wishlist;