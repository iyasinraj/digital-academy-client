import React from 'react';

const Category = ({ category }) => {
    const {title, img} = category
    return (
        <div className="card w-11/12 bg-base-100 shadow-xl image-full">
            <figure><img className='w-full' src={img} alt="category" /></figure>
            <div className="card-body flex justify-center items-center">
                <h2 className="card-title font-bold text-white">{title}</h2>
            </div>
        </div>
    );
};

export default Category;