import React from 'react';
import { Link } from 'react-router-dom';

const WeOffer = () => {
    return (
        <div className='w-10/12 mx-auto my-20 lg:flex'>
            <div className='p-6'>
                <h1 className='text-2xl font-bold text-center mb-4'>We Offering</h1>
                <h1 className='text-2xl font-bold mb-4'>Live Classes by our Skilled Instructor</h1>
                <p>We are providing the best quality training with live support. also provie best consulting for students who want to doing job in international organigation.</p>
                <div className='flex mt-6'>
                    <p>O</p>
                    <p className='ms-4'>Expert Instructor</p>
                </div>
                <div className='flex my-2'>
                    <p>O</p>
                    <p className='ms-4'>Certificate for particular course</p>
                </div>
                <button className='btn'><Link to='/about'>Read More</Link></button>
            </div>
            <div className='w-11/12 mx-auto p-8'>
            <img src="https://i.ibb.co/ZWVwPyX/Vector-Graphics.png" alt="Vector-Graphics"></img>
            </div>
        </div>
    );
};

export default WeOffer;