import React from 'react';
import { Link } from 'react-router';
const Lawyer = ({lawyer}) => {

    const {photo, name, specialization, licenseNumber, experienceYears, available, id} = lawyer;

    return (
        <Link to={`/lawyerDetails/${id}`}>
        <div className="card card-side border border-[#DBDBDB] rounded-2xl">
            <figure>
                <img
                    className='w-25 h-25 rounded-2xl m-5'
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <div className='flex'>
                    <button className='p-2 px-4 mr-2 rounded-3xl text-xs text-[#09982F] bg-[#E7F5EB]'>{available}Available</button>
                    <button className='px-4 mr-2 rounded-3xl text-xs outline-1 outline-gray-50 text-blue-400 bg-[#E8F1FD]'>{experienceYears}+ years experience</button>
                </div>
            
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <div className='text-start text-[#6F6F6F]'>
                    <p className='text-lg'>{specialization}</p>
                    <p>{'\u00AE'} Licence No: {licenseNumber}</p>
                </div>
                <button className="w-full outline outline-[#D1E1FA] text-[#176AE5] font-bold py-2 rounded-2xl ">View Details</button>
            </div>
        </div>
        </Link>
        
    );
};

export default Lawyer;