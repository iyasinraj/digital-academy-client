import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    const { description, duration, price, ratings, thumbnail, title, totalEnrolled } = course
    console.log(course)
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={thumbnail} alt='course thumbnail' className="max-w-2xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">Course Details: {description}</p>
                        <p className=' text-xl'>Duration: <span className='text-white font-bold'>{duration} Months</span>
                        Ratings: <span className='text-white font-bold'>{ratings} Out of 5</span></p>
                        <p className='text-white font-bold'>Total Enrolled: {totalEnrolled}</p>
                        <p className='text-2xl text-white font-bold'>{price} BDT</p>
                        <button className="btn btn-info">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;