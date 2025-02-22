import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
import FourthPart from './FourthPart';
import FifthPart from './FifthPart';
import SixthPart from './SixthPart';
import SeventhPart from './SeventhPart';
import Footer from './../footer/footer';
import Accordian from './Accordian';

const SubscriptionHeader = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6 p-5">
                        <h2 className='fw-bold' style={{ color:'2c2c2c'}}>Students save 65% on Creative Cloud All Apps.</h2>
                        <p>Students get the full creative toolkit for less than the price of a single app with Creative Cloud All Apps, including Photoshop, Acrobat Pro, Illustrator and Premiere Pro, plus generative AI features.</p>
                        <p><strong>₹1,915.14/mo</strong> <span className="text-danger">₹638.38/mo</span> incl. GST for the annual paid monthly plan for the first year. <a href="#">See terms.</a></p>
                        <div className="d-flex gap-3 justify-content-start my-3">
                            <button className="btn btn-outline-dark px-4 rounded-pill">Free Trial</button>
                            <button className="btn btn-primary px-4 rounded-pill">Buy Now</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* <video src="" className="" controls></video> */}
                        <p src="" alt="" style={{ background: 'black',color:'white' }}>hii</p>
                    </div>
                </div>
            </div>

            <SecondPart/>
            <ThirdPart/>
            <FourthPart/>
            <FifthPart/>
            <SixthPart/>
            <SeventhPart/>
            <Accordian/>
            <Footer/>
        </>
    );
};

export default SubscriptionHeader;
