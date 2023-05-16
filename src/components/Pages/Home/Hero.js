import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <h1>Image</h1>
                <img className='w-6/12' src='/src/images/hero.png' alt=''></img>
                {/* <img src="../../../images/hero.png" className="max-w-sm rounded-lg shadow-2xl" alt=''></img> */}
                <div>
                    <h1 className="text-5xl font-bold">Your Future Depends On Today's Decision</h1>
                    <p className="py-6">So, Don't Be Late! <br/> Choose your fevorite topic and make your Future Bright</p>
                    <button className="btn  text-black font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400"><Link to='/courses'>Courses</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Hero;