import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/ZWVwPyX/Vector-Graphics.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="lg:max-w-full">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Your Future Depends On Today's Decision</h1>
                    <p className="mb-5 text-white font-bold">So, Don't Be Late! Choose your fevorite topic and make your Future Bright</p>
                    <button className="btn btn-info">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Hero;