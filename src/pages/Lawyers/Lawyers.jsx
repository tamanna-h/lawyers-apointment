import React, { Suspense, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({data}) => {
    const [maxdata, setMaxData] = useState(true);
    
    return (
        <div className='bg-white text-black py-15'>
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-4xl text-center p-6 font-bold'>Our Best Lawyers</h1>
                <p className='text-center text-[#3F3F3F] max-w-4xl mx-auto text-sm pb-8'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {maxdata
                            ? data.slice(0, 6).map((data) => (
                                <Lawyer key={data.id} lawyer={data} />
                            ))
                            : data.map((lawyer) => (
                                <Lawyer key={lawyer.id} lawyer={lawyer} />
                            ))}
                    </div>
                </Suspense>

                <button
                    onClick={() => setMaxData(!maxdata)}
                    className="btn btn-success text-white rounded-full px-8 mt-8 mx-auto block"
                >
                    {maxdata ? 'Show All Lawyers' : 'Show Less'}
                </button>
            </div>
        </div>
    );
};

export default Lawyers;