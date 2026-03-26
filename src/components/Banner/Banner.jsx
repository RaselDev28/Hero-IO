import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import { FaAppStoreIos } from "react-icons/fa";
import banner from './hero.png'

const Banner = () => {
    return (
        <div className='bg-gray-100'>
            <div className='text-center mx-auto'>
                <h1 className='text-5xl font-bold pt-15 pb-5'>We Build <br />
                    <span className='text-blue-400'>Productive</span> Apps</h1>

                <p className='text-gray-600'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <a className='btn btn-primary hover:bg-green-600' href="">
                    <FaGooglePlay className="text-2xl" />
                    Play Store
                </a>
                <a className='btn btn-primary mx-2 my-5 hover:bg-green-600' href="">
                    <FaAppStoreIos className='text-2xl' />
                    App Store
                </a>
            </div>
            <div>
                <img className='text-center mx-auto mt-10' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;