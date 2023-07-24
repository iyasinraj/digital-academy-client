import React from 'react';

const BasicInfo = () => {
    return (
        <div className='w-11/12 my-10 mx-auto flex justify-evenly'>
            <div>
                <h1 className='text-md lg:text-3xl text-white font-bold'>Total Enroled</h1>            
                <h1 className='font-bold md:text-2xl'>5000+</h1>            
            </div>
            <div>
                <h1 className='text-md lg:text-3xl text-white font-bold'>Total Hired</h1>            
                <h1 className='font-bold md:text-2xl'>3500+</h1>            
            </div>
            <div>
                <h1 className='text-md lg:text-3xl text-white font-bold'>Online Instructor</h1>            
                <h1 className='font-bold md:text-2xl'>60+</h1>            
            </div>
        </div>
    );
};

export default BasicInfo;