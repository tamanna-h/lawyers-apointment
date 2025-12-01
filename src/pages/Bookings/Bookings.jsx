import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getBookedLawyer, removeFromDB } from '../../utility/addToDB';
import Booking from '../Booking/Booking';

const Bookings = () => {

    const [bookings, setBookings] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const bookedLawyers = getBookedLawyer().map(id => parseInt(id));
        const filteredData = data.filter(lawyer => bookedLawyers.includes(lawyer.id));
        setBookings(filteredData);
    }, [data])

    const handleDelete = (id) => {
    if (window.confirm('Want to cancel this appointment?')) {
      removeFromDB(id);
    }
  };

    return (
        <div className="bg-white text-black">

            <h1 className="text-4xl text-center p-6 font-bold">My Today Appointments</h1>
            <p className="text-center text-[#3F3F3F] max-w-4xl mx-auto text-sm pb-8">Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            <div className="max-w-6xl mx-auto py-4 w-full">
                {bookings.length === 0 ? 
                    <p className="text-xl text-center pb-6 font-bold text-gray-500">No Appointments Found</p> :
                    bookings.map(booking => <Booking key={booking.id} booking={booking} handleDelete={handleDelete}/>)
                }  
            </div>
        </div>
    );
};

export default Bookings;