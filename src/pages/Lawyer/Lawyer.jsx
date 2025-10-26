import React, { use } from 'react';

const Lawyer = ({lawyersDataPromise}) => {
    const data = use(lawyersDataPromise)

    console.log(data);
    
    return (
        <div>
            <h2>Lawyer</h2>
        </div>
    );
};

export default Lawyer;