import React from 'react';
import Hero from './Hero';
import Category from '../Courses/Category/Category';
import WeOffer from './WeOffer';
import BasicInfo from './BasicInfo';
import OnePlatform from './OnePlatform';
import Instructor from '../Instructor/Instructor';
import Feedback from './Feedback';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const category = useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <h1 className='text-white text-5xl my-16 font-bold text-center'>Explore Our Categories</h1>
            <div className='w-10/12 mx-auto my-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    category.map(c => <Category key={c.categoryId} category={c}></Category>)
                }
            </div>
            <WeOffer></WeOffer>
            <hr />
            <BasicInfo></BasicInfo>
            <hr />
            <OnePlatform></OnePlatform>
            <div className='text-white text-5xl my-16 font-bold text-center'>
                <h1>Our Team</h1>
            </div>
            <Instructor></Instructor>
            <Feedback></Feedback>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;