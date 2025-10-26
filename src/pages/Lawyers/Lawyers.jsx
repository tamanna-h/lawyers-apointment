import React, { useEffect, useState } from 'react';

const Lawyers = () => {

    const [allLawyers, setAllLawyers] = useState([]);

    useEffect(() => {
        fetch('lawyersData.json')
            .then(res => res.json())
            .then(data => setAllLawyers(data))
    }, []);

    console.log(allLawyers);
    

    return (
        <div>
            <h3>Lawyers: {allLawyers.length}</h3>
        </div>
    );
};

export default Lawyers;