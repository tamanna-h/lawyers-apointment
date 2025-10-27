import React, { Suspense } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({data}) => {
    
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>All Lawyers</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {
                    data.map(lawyer => <Lawyer key={lawyer.id} lawyer={lawyer}/>)
                }
            </Suspense>
        </div>
    );
};

export default Lawyers;