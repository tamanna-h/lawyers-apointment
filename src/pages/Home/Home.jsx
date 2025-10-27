import React from 'react';
import Banner from '../../components/Banner/Banner';
import Lawyers from '../Lawyers/Lawyers';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner/>
            <Lawyers data={data}/>
        </div>
    );
};

export default Home;