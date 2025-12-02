import React from 'react';
import { SlCalender } from 'react-icons/sl';

const Blog = ({blog}) => {

    const {question, answer, date} = blog
    return (
        <div className='max-w-6xl mx-auto bg-gray-200 p-5 mb-15 rounded-2xl'>
            <p className='font-bold text-xl py-3'>{question}</p>
            <div className='border-y border-dashed border-gray-400 py-3'>
                <p className='text-blue-600'>Answer:</p>
                <p className=' '>{answer}</p>
            </div>
            <div className='flex items-center'>
                <SlCalender/> 
                <p className='py-3 ml-2 text-gray-500 text-sm'>Added at {date}</p>
            </div>
        </div>
    );
};

export default Blog;