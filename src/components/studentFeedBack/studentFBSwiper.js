import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import carouselImg from "../../assets/teacherImg.jpg";

import carouselDotStyle from './carouselDot.module.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, History } from 'swiper/modules';

export default function StudentFBSwiper() {

var carouselData=[{
  carouselImgOne:carouselImg,
  carouselPara:'PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run Import-ModulePSReadLine.',
  carouselStars:[<i className="bi bi-star-fill"></i>,<i className="bi bi-star-fill"></i>,<i className="bi bi-star-fill"></i>,<i className="bi bi-star"></i>,<i className="bi bi-star"></i>],
  carouselFirstText:'PowerShell Warning',
  carouelSecondText:'PowerShell'
},{
  carouselImgOne:carouselImg,
  carouselPara:'PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run Import-ModulePSReadLine.',
  carouselStars:[<i className="bi bi-star-fill"></i>,<i className="bi bi-star-fill"></i>,<i className="bi bi-star-fill"></i>,<i className="bi bi-star"></i>,<i className="bi bi-star"></i>],
  
  carouselFirstText:'PowerShell Warning',
  carouelSecondText:'PowerShell'
},{
  carouselImgOne:carouselImg,
  carouselPara:'PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run Import-ModulePSReadLine.',
  carouselStars:[<i className="bi bi-star-fill"></i>,<i className="bi bi-star-fill"></i>,<i className="bi bi-star-fill"></i>,<i className="bi bi-star"></i>,<i className="bi bi-star"></i>],
  carouselFirstText:'PowerShell Warning',
  carouelSecondText:'PowerShell'
}]


  return (
    
    <div className='carouselDotStudentsFeedBackContainer'>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        history={{
          key: 'slide',
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Navigation, Pagination, History]}
        className="swiper_container"
      >
        {
          carouselData.map((carouselItem,i)=>(
        <SwiperSlide data-history="1" key={i}>

        <div className={`${carouselDotStyle.carouselDotStudentsFeedBack}`} >
            <div className="row column-gap-3 row-gap-5">
              <div className="col-lg-6 col-sm-9 col-md-6 col-xl-4">
                <img src={carouselItem.carouselImgOne} />
              </div>

              <div className="col-lg-12 col-sm-12 col-md-12 col-xl-6 d-flex align-content-center">
                <div className={`${carouselDotStyle.carouselDotStudentsFeedBackText}`} >
                  <div>
                    <span className={`${carouselDotStyle.quoteSvg}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        fill="currentColor"
                        className="bi bi-quote"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                      </svg>
                    </span>
                    <p>
                      {carouselItem.carouselPara}
                    </p>
                    <span className={`${carouselDotStyle.starSpanForGold}`}>
                      {carouselItem.carouselStars.map((iconItem)=>(iconItem))}
                    </span>

                    <p className= {`${carouselDotStyle.FeedBackFirstText}`}>
                      {carouselItem.carouselFirstText}
                    </p>

                    <p className={`${carouselDotStyle.FeedBackSecondText}`} >
                      {carouselItem.carouelSecondText}</p>


                  </div>
                </div>
              </div>
            </div>
            
          </div>

        </SwiperSlide>
        ))
        
      }
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
            <i className="bi bi-chevron-left"></i>

          </div>
          <div className="swiper-button-next slider-arrow">
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
            <i className="bi bi-chevron-right"></i>

          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>

  );
}
