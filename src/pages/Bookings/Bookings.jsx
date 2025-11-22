import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getBookedLawyer } from '../../utility/addToDB';
import Lawyer from '../Lawyer/Lawyer';

const Bookings = () => {

    const [bookings, setBookings] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const bookedLawyers = getBookedLawyer().map(id => parseInt(id));
        const filteredData = data.filter(lawyer => bookedLawyers.includes(lawyer.id));
        setBookings(filteredData);
    }, [data])
    

    return (
        <div>
            <h3>Bookings: {data.length}</h3>
            <p>Selected Lawyers: {bookings.length}</p>
            {
                bookings.map(lawyer => <Lawyer key={lawyer.id} lawyer={lawyer}/>)
            }
        </div>
    );
};

export default Bookings;