import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, title, thumbnail, ratings, duration, price } = course
    console.log(course)


    return (
        <div className="card w-11/12 bg-base-300 shadow-md">
            <Link to={`/course/${id}`}>
                <figure className="px-5 pt-5">
                    <img src={thumbnail} alt="Shoes" className="rounded-xl" />
                </figure>
            </Link>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <div className='w-full flex justify-between'>
                    <p><span className='font-bold'>Rating: </span>{ratings} Starts</p>
                    <p><span className='font-bold'>Duration: </span>{duration} Months</p>
                </div>
                <p className='ms-6 self-start font-bold'><span className='font-bold text-white'>Price: </span>{price}/- BDT</p>
                <div className="card-actions">
                    <button className="btn btn-wide btn-success">Enrolle Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;