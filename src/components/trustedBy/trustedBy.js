import React from 'react'
import trustedByUniversity from '../../assets/trustedBy.png'
import trustedByStyle from '../trustedBy/trustedBy.module.css'

const TrustedBy = () => {
    var trustedByUniversityArray=[trustedByUniversity,trustedByUniversity,trustedByUniversity,
        trustedByUniversity,trustedByUniversity,trustedByUniversity]

  return (
    <><div className='containerFluidForPadding mt-5 mb-5'  id='trustredBy'>

    <div className='row py-5'>
        <div className='col col-sm-6 col-md-3 col-xl-2 d-flex justify-content-center align-items-center'>
            <text className={`${trustedByStyle.trustedBy}`}>
            Trusted by:
            </text>
        </div>
        <div className={`col col-sm-6 col-md-9 col-xl-10 ${trustedByStyle.trustedByImg}`}>

                    <img src={trustedByUniversity} className={`${trustedByStyle.tBUImgOne}`}/>
                    <img src={trustedByUniversity} className={`${trustedByStyle.tBUImgTwo}`}/>
                    <img src={trustedByUniversity} className={`${trustedByStyle.tBUImgThree}`} />
                    <img src={trustedByUniversity} className={`${trustedByStyle.tBUImgFour}`} />
                    <img src={trustedByUniversity} className={`${trustedByStyle.tBUImgFive}`} />
                    <img src={trustedByUniversity} className={`${trustedByStyle.tBUImgSix}`} />
           
        </div>

    </div>
    </div>
    </>
  )
}

export default TrustedBy
