import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='mx-auto w-11/12 my-16'>
            <div className='text-white text-5xl my-16 font-bold text-center'>
                <h1 className='underline'>Our Courses</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;