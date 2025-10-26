import React, { Suspense } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = () => {
    
    const lawyersDataPromise  = fetch('lawyersData.json').then(res => res.json());

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>All Lawyers</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {
                    <Lawyer lawyersDataPromise={lawyersDataPromise} />
                }
            </Suspense>
        </div>
    );
};

export default Lawyers;