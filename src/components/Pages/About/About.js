import React from 'react';

const About = () => {
    return (
        <div className='w-full my-16'>
            <div className='text-white text-5xl my-16 font-bold text-center'>
                <h1 className='underline'>About Us</h1>
            </div>
            
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/ZWVwPyX/Vector-Graphics.png" alt='' className="lg:max-w-xl rounded-lg shadow-2xl" ></img>
                    <div>
                        <h1 className="text-5xl mb-10 font-bold">We Offering</h1>
                        <p className='py-3'>Live Classes by our Skilled Instructor</p>
                        <p className='py-3'>We are providing the best quality training with live support. also provie best consulting for students who want to doing job in international organigation.</p>
                        <div className='flex my-2'>
                            <p>O</p>
                            <p className='ms-4'>Expert Instructor</p>
                        </div>
                        <div className='flex my-2'>
                            <p>O</p>
                            <p className='ms-4'>Certificate for particular course</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;