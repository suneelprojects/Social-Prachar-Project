import React from 'react'
import searchStyle from '../searchComp/search.module.css'
import img from '../../assets/01-5.jpg';

const SearchBar = () => {
  return (
    <div>
      <div className={searchStyle.cover_img}>
                <img src={img} className={searchStyle.thumbnail} alt="" />
                <h1>Courses</h1>
            </div>

            <div className='row containerFluidForPadding bg-danger'>
                <div className='col col-9 p-5 bg-info-subtle'>
                    <h1>Business Coach</h1>
                    <p>Business Coach Unlock The Potential For Business Excellence 
                        With Studyhub Our seasoned chefs, with years of experience in
                         the culinary industry, serve as your mentors. Benefit from their wealth...</p>
                </div>
                <div className='col col-3 p-5 bg-danger-subtle'>
                    <h6>Search</h6>
                    <div className='d-flex'>
                        <input type='search' />
                        <button><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SearchBar
