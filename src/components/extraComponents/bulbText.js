import React from 'react'
import bulb from '../../assets/bulb.png'


const BulbText = (props) => {
  return (
    <div>
      
       <span className="bulbSpan">
            <img src={bulb} />
          </span>
          <text className="blueText ">{props.BulbText}</text>
          <br />
          <text className="gateWaytitle">{props.bulbTitle}
          </text>
          <br />
          <text className="greyText">{props.GreyText}
          </text>
    </div>
  )
}

export default BulbText
