import React from 'react'
import BulbText from '../extraComponents/bulbText'
import MarqueeComp from '../extraComponents/marqueeComp'

import newsArticleOne  from '../../assets/timesOfIndia.png'
import newsArticleTwo  from '../../assets/bussinessStd.png'
import newsArticleThree  from '../../assets/analytics.png';
import newsArticleFour  from '../../assets/theknowledgereview_logo.jpg'
import newsArticleFive  from '../../assets/ANI-logo.png'
import newsArticleSix  from '../../assets/yahooNews.png'
import newsArticleSeven  from '../../assets/BusinessW.png'
import newsArticleEight  from '../../assets/Zee5_Official_logo.png'
import newsArticleNine  from '../../assets/neurons-Logo.png'
import newsStyle from './news.module.css'

const NewsOnUs = () => {

  const newsArticle =[newsArticleOne,newsArticleTwo,newsArticleThree,newsArticleFour,newsArticleFive,
    newsArticleSix,newsArticleSeven,newsArticleEight,newsArticleNine];

  return (
    <div className='containerFluidForPadding my-5'>
      <div className={newsStyle.BulbTextStyle}>
        <BulbText 
          BulbText="top News Channels"
          bulbTitle="We Got Featured In"
          GreyText="You'll find something to spark your curiosity and enhance"/>
      </div>
      <div className={newsStyle.ImagesSize}>
        <MarqueeComp MarqueeArray={newsArticle}/>
      </div>
    </div>
  )
}

export default NewsOnUs
