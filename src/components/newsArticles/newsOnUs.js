import React from 'react';
import BulbText from '../extraComponents/bulbText';
import MarqueeComp from '../extraComponents/marqueeComp.js';
import { ourAchievements } from '../successStories/ourAchievements.js';
import newsArticleOne from '../../assets/timesOfIndia.png';
import newsArticleTwo from '../../assets/bussinessStd.png';
import newsArticleThree from '../../assets/analytics.png';
import newsArticleFour from '../../assets/theknowledgereview_logo.jpg';
import newsArticleFive from '../../assets/ANI-logo.png';
import newsArticleSix from '../../assets/yahooNews.png';
import newsArticleSeven from '../../assets/BusinessW.png';
import newsArticleEight from '../../assets/Zee5_Official_logo.png';
import newsArticleNine from '../../assets/neurons-Logo.png';
import newsStyle from './news.module.css';
import Marquee  from 'react-fast-marquee';

const NewsOnUs = () => {
  const newsArticles = [
    newsArticleOne,
    newsArticleTwo,
    newsArticleThree,
    newsArticleFour,
    newsArticleFive,
    newsArticleSix,
    newsArticleSeven,
    newsArticleEight,
    newsArticleNine
  ];

  const handleRedirect = () => {
    window.location.href = 'success-stories';
  };
  
  return (
    <div className='containerFluidForPadding my-5'>
      <div className={newsStyle.BulbTextStyle}>
        <BulbText
          BulbText="Top News Channels"
          bulbTitle="We Got Featured In"
          GreyText="You'll find something to spark your curiosity and enhance"
        />
      </div>

      <div className={newsStyle.ImagesSize}>
        <MarqueeComp MarqueeArray={newsArticles} />
      </div>

      <div className={newsStyle.marqueeAchievements}>
        <div className={newsStyle.BulbTextStyle}>
          <BulbText
            BulbText="Our Placed Students"
            bulbTitle="16k+ Success Stories Since 2014"
            GreyText="Are You Ready to Be the Next?"
          />
        </div>
        <div className={`${newsStyle.marquee} marquee`}>
          <div className={`${newsStyle.marquee_content} marquee-content d-flex pt-4`}>
            <Marquee direction="left" speed={120}>
              {ourAchievements?.map((achievement, index) => (
                <div
                  key={index}
                  className="card text-center p-3 shadow-sm mx-3"
                  style={{
                    minWidth: '320px',
                    height: '250px',
                    borderRadius: '12px',
                  }}
                >
                  <div className="d-flex text-start">
                    <img
                      src={achievement.profileImage}
                      alt={achievement.name}
                      className="rounded-circle mb-2"
                      style={{
                        width: '80px',
                        height: '80px',
                        border: '4px solid #553cdf',
                        marginRight: '16px',
                      }}
                    />
                    <div>
                      <h5 className="card-title">{achievement.name}</h5>
                      <p className="text-muted mb-2" style={{ fontSize: '14px' }}>{achievement.role}</p>
                      <span
                        className="badge py-1 px-3"
                        style={{
                          color: '#553cdf',
                          borderRadius: '12px',
                          fontSize: '12px',
                          background: '#543cdf31',
                        }}
                      >
                        {achievement.hike}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-around align-items-center mt-3">
                    <div>
                      <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Pre Social Prachar</p>
                      <img
                        src={achievement.preCompany}
                        alt="Previous Company Logo"
                        style={{ width: 'auto', height: '30px' }}
                      />
                    </div>
                    <div><i className="bi bi-arrow-right"></i></div>
                    <div>
                      <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Post Social Prachar</p>
                      <img
                        src={achievement.postCompany}
                        alt="Post Company Logo"
                        style={{ width: 'auto', height: '30px' }}
                      />
                    </div>
                  </div>
                  <hr className="my-0" />
                  <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                    Placed At<br />
                    <strong className="text-dark">{achievement.startCompanyType}</strong>
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center pt-5">
          <button
            className="btn fw-bold"
            style={{ background: '#553cdf', color: 'white' }}
            onClick={handleRedirect}>
            Know More
          </button>
        </div>
      </div>

    </div>
  );
};

export default NewsOnUs;
