import React from 'react';
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='bg-white'>
            <div className=' justify-around items-center relative max-w-6xl mx-auto '>
                <img className='' src={bannerImg} alt="" />

                <div className="absolute top-33 left-47 text-center">
                    <h1 style={{lineHeight: '1.2'}} className='text-5xl font-bold max-w-3xl'>It avoids subjective claims or exaggeration that might raise red flags legally</h1>
                    <p className='text-sm text-gray-300 pt-7 max-w-[800px]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;