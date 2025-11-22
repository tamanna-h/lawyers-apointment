import React from 'react';
import { Link } from 'react-router';
import { FaRegRegistered } from "react-icons/fa6";
const Lawyer = ({lawyer}) => {

    const {photo, name, specialization, licenseNumber, experienceYears, available, id} = lawyer;

    return (
        <div className="card card-side border border-[#DBDBDB] rounded-2xl">
            <figure className=''>
                <img
                    className='p-6 m-5'
                    src={photo}
                    alt="Lawyer photo" />
            </figure>
            <div className="card-body">
                <div className='flex'>
                    <button className='p-2 px-4 mr-2 rounded-3xl text-xs text-[#09982F] bg-[#E7F5EB]'>{available}Available</button>
                    <button className='px-4 mr-2 rounded-3xl text-xs outline-1 outline-gray-50 text-blue-400 bg-[#E8F1FD]'>{experienceYears}+ years experience</button>
                </div>
            
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <div className='text-start text-[#6F6F6F]'>
                    <p className='text-lg'>{specialization}</p>
                    <p className='flex gap-1'><FaRegRegistered className='mt-1'/>  Licence No: {licenseNumber}</p>
                </div>
                <Link to={`/lawyerDetails/${id}`}>
                    <button className="w-full outline outline-[#D1E1FA] text-[#176AE5] font-bold py-2 rounded-2xl cursor-pointer ">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Lawyer;