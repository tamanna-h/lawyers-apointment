import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BsExclamationSquare } from "react-icons/bs";
import { FaRegRegistered } from "react-icons/fa6";

const LawyerDetails = () => {
    const { id } = useParams();
    const lawyerId = parseInt(id);
    const data = useLoaderData();
    const lawyer = data.find(lawyer => lawyer.id === lawyerId);
    console.log(lawyer);

    const {name, photo, specialization, licenseNumber, experienceYears, availableDays, fees} = lawyer || {};
    
    return (
        <div className=' bg-white text-black py-15'>
        <section className='max-w-6xl mx-auto border border-[#DBDBDB] rounded-2xl p-12 text-center mb-10 bg-[#F3F3F3]'>
            <h1 className='text-2xl font-bold py-4'>Lawyer’s Profile Details</h1>
            <p className='text=[#575757]'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
        </section>
        <section className='flex max-w-6xl mx-auto border border-[#DBDBDB] rounded-2xl p-5'>
            <img className='rounded-2xl w-[250px]' src={photo} alt="" />
            <div className='p-5'>
                <button className='px-4 py-2 mr-2 rounded-3xl text-xs outline-1 outline-gray-50 text-blue-400 bg-[#E8F1FD] mb-3'>{experienceYears}+ Years Experience</button>
                <h1 className='text-3xl font-bold'>{name}</h1>
                <div className='flex gap-8 text-gray-500 py-3 text-sm'>
                    <h4 className=''>{specialization}</h4>
                    <h4 className='flex gap-1'> <FaRegRegistered className='mt-0.5'/> Licence No: {licenseNumber}</h4>
                </div>
                <div className='flex gap-5 text-sm'>
                    <h5 className='py-1'>Availability</h5>
                    <div className='flex gap-3'>
                       {
                            availableDays.map((day, index) => <p className='border border-[#FFE5B8] bg-[#FFF6E6] py-1 px-2 rounded-2xl text-[#FFA000] text-[12px]' key={index}>{day}</p>)
                        } 
                    </div>
                </div>
                <div className='flex gap-5 text-sm py-3'>
                    <h3>Consultation Fee:</h3>
                    <h3 className='text-[#0EA106] font-bold'>Taka: {fees}</h3>
                </div>
                
            </div>
        </section>
        
        <section className='max-w-6xl mx-auto border border-[#DBDBDB] rounded-2xl p-5 my-10'>
            <h1 className='font-bold text-2xl text-center text-[#141414 ] border-b border-dashed pb-4 border-[#D0D0D0]'>Book an Appointment</h1>
            <div className='flex justify-between  border-b border-[#D0D0D0] py-5'>
                <h4 className='font-bold text-xl'>Availability</h4>
                <button className='p-2 px-4 rounded-3xl text-xs text-[#09982F] bg-[#E7F5EB]'>Lawyer Available Today</button>
            </div>
            <button className='border border-[#FFE5B8] bg-[#FFF6E6] py-1 px-4 my-4 rounded-2xl text-[#FFA000] flex'><BsExclamationSquare className='mr-2 mt-1 rounded' />Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</button>
            <button className='btn bg-[#0EA106] my-5 w-full rounded-3xl border-0 text-white'>Book Appointment Now</button>
        </section>
        


        </div>
    );
};

export default LawyerDetails;