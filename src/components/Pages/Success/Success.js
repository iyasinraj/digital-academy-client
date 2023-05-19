import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Success = () => {
    const catagories = useLoaderData()
    return (
        <div>
            <h1>success students {catagories.length}</h1>
        </div>
    );
};

export default Success;