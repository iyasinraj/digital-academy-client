import React from 'react';
import Hero from './Hero';
import Category from '../Courses/Category/Category';
import WeOffer from './WeOffer';
import Courses from '../Courses/Courses/Courses';
import BasicInfo from './BasicInfo';
import OnePlatform from './OnePlatform';
import Instructor from '../Instructor/Instructor';
import Feedback from './Feedback';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Category></Category>
            <WeOffer></WeOffer>
            <h1>Most popular Courses</h1>
            <Courses></Courses>
            <BasicInfo></BasicInfo>
            <OnePlatform></OnePlatform>
            <h1>Our Team</h1>
            <Instructor></Instructor>
            <Feedback></Feedback>
            <WhyChooseUs></WhyChooseUs>
            <h1>Upcoming Courses</h1>
            <Blog></Blog>
        </div>
    );
};

export default Home;