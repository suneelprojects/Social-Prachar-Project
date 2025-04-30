import React from 'react';
import HostingImg from '../../assets/hostingImage.png';

const Hosting = () => {
    return (
        <>
            <div className="h-[80vh] bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col md:flex-row">
                {/* Left Column - Full-height Image */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full">
                    <div className="relative w-full h-full">
                        <div className="relative overflow-hidden h-full">
                            <img
                                src={HostingImg}
                                alt="Web Hosting Services"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column - Full-height Google Form */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center md:p-10">
                    <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
                        <div className="flex-grow">
                            <iframe
                                src="https://docs.google.com/forms/d/1-5E8YQMMopMhqbrTX-Kbv0w1GVkQ29bx6OIpsMCBlkM/viewform?embedded=true"
                                className="w-full h-full"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                            >
                                Loading form...
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>



        </>

    );
};

export default Hosting;