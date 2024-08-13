import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  './swipperTop.css'

import topCatogeryStyle from '../topCatogery/topCatogery.module.css'


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import sliderImg from '../../assets/svg01.png';
import sliderImg1 from '../../assets/svg01.png';
import sliderImg2 from '../../assets/svg01.png';
import sliderImg3 from '../../assets/svg01.png';

const images = [
  { img: sliderImg, category: 'Development', courses: '03 Courses' },
  { img: sliderImg1, category: 'Marketing', courses: '01 Courses' },
  { img: sliderImg2, category: 'Accounting', courses: '02 Courses' },
  { img: sliderImg3, category: 'Business', courses: '02 Courses' }
];

const repeatedImages = [...images, ...images];

const SwipperTop = () => {
  return (
    <div className='swipperContainer'>
      <Swiper
        effect={'slide'}
        grabCursor={true}
        loop={true} 
        slidesPerView={6} 
        spaceBetween={60}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 30,
          }
        }}
        
        pagination={{
            
          clickable: true,

          renderBullet: (index, className) => {
            if (index<4) {
              return `<span class="${className}"></span>`;
            }
            return '';
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className='swiper_container'
      >
        {repeatedImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`${topCatogeryStyle.topCategoryBox}`}>
              <div>

                <div className='d-flex justify-content-center'>
                <img src={item.img} alt={`Slide ${index + 1}`} />

                </div>

              <div className={`${topCatogeryStyle.topCategoryBoxText}`} >
                <text className={`${topCatogeryStyle.teachersFirstText}`} >{item.category}</text>
                <text className={`${topCatogeryStyle.teachersSecondText}`} >{item.courses}</text>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
            <i class="bi bi-chevron-left"></i>
          </div>
          <div className='swiper-button-next slider-arrow'>
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
            <i class="bi bi-chevron-right"></i>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwipperTop;
