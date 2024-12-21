import React from "react";
import aboutusStyle from "./aboutus.module.css";
import smallBuss from "../../assets/smallBuss.png";
import faculty from "../../assets/faculty.png";
import placement from "../../assets/placement.png";
import certify from "../../assets/certification.png";
import twentyfour from "../../assets/24Seven.png";
import aboutUsWomen from "../../assets/aboutUsWomen.png";
import BulbText from "../extraComponents/bulbText";

import aboutusPic1 from '../../assets/aboutusPic1.png'
import aboutusPic2 from '../../assets/aboutusPic2.png'
import aboutusPic3 from '../../assets/aboutusPic3.png'
import Footer from "../footer/footer";
import FooterBtn from "../footerButton/footerBtn";

const Aboutus = () => {
  const aboutusArray = [
    {
      image: faculty,
      heading: "Real Time Faculty",
      sentense:
        "Learn Digital Marketing From Microsoft & Google Certified Expert Trainers. We offer Training from Real-time in-house team",
    },
    {
      image: placement,
      heading: "Placement Support",
      sentense:
        "We provide the dedicated HR placement team to help you get started with latest Digital Marketing jobs",
    },
    {
      image: certify,
      heading: "Certifications",
      sentense:
        "SocialPrachar supports you to get all the certifications from Facebook, Google and 4 Other MNC Certifications for free of cost",
    },
    {
      image: twentyfour,
      heading: "24/7/365 Days",
      sentense:
        "Life time query support to advance your career. We provide 24*7 Trainer support online/offline from experts and professionals",
    },
  ];

  return (
    <div>

      <div className={`container ${aboutusStyle.containerXl}`}>
        <div className={aboutusStyle.smallBuss}>
          <img src={smallBuss} />
        </div>
        {/* <h1 className="my-5 text-center">About Us</h1> */}

        <div className={`row my-5 d-flex align-items-center ${aboutusStyle.aboutUsWomenCon}`}>
          <div className={`col-12 col-md-6 my-5 ${aboutusStyle.aboutUsWomenConImg}`}>
            <img src={aboutUsWomen} />
          </div>
          <div className="col-12 col-md-6">
            <BulbText
              BulbText="About Us"
              bulbTitle="Join Us"
              GreyText="You'll find something to spark your curiosity and enhance" />
            <p className={aboutusStyle.para}>
              SOCIALPRACHAR is India’s Most favourite EdTech in India with 16,000+
              Students Alumni which provides Budget Friendly Tech Courses like
              Full Stack, Data Science, AI, Cloud etc
            </p>
            <p className={aboutusStyle.para}>
              Social Prachar has won the “Academy of the Year 2019” award at the
              7th Asian education summit 2019, Mumbai. This did not stop them from
              facing their own set of challenges. With years of experience they
              have created a forte in training and educating the concepts of
              programming to a Non-ITian.
            </p>
          </div>
        </div>

        <h1 className="my-5 text-center">What We Provide</h1>
        <div className="row row-gap-4 my-5">
          {aboutusArray.map((aboutusItem, i) => (
            <div
              className={`col-12 col-sm-6 col-md-6 col-lg-3 ${aboutusStyle.weProvide}`}
              key={i}
            >
              <div>
                <img src={aboutusItem.image} />
                <h5>{aboutusItem.heading}</h5>
                <p>{aboutusItem.sentense}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Industry Recognitions */}
        <div className="text-center my-5">

          <BulbText
            BulbText="Certified By"
            bulbTitle="Industry Recognitions"
          />

          <div className={`row row-gap-4 ${aboutusStyle.AboutusPics}`}>
            <div className="col col-lg-4">
              <img src={aboutusPic1} />
            </div>

            <div className="col col-lg-4">
              <img src={aboutusPic2} />
            </div>

            <div className="col col-lg-4">
              <img src={aboutusPic3} />
            </div>
          </div>
        </div>

      </div>
      <FooterBtn />
      <Footer />
    </div>
  );
};

export default Aboutus;
