import React from 'react'
import Marquee from "react-fast-marquee";


const MarqueeComp = ({PartnersArray}) => {
  return (
    <div>
      <Marquee direction="left" speed={100} pauseOnHover={true} >
{
    PartnersArray.map((image,i)=>(
<div className="image_wrapper mx-5" key={i}>
  <img src={image} alt="imgOfCompany" />
</div>

    ))
}

</Marquee>
    </div>
  )
}

export default MarqueeComp
