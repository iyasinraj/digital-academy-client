import React from 'react';

const WhyChooseUs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/gVFFfRw/webdev.jpg" alt='' className="lg:max-w-xl rounded-lg shadow-2xl" ></img>
                    <div>
                        <h1 className="text-5xl mb-10 font-bold">Why choose Us</h1>
                        <p className='py-3'> <span>1.</span> Expert instructor</p>
                        <p className='py-3'> <span>2.</span> Flexible learning</p>
                        <p className='py-3'> <span>3.</span> Educator support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;