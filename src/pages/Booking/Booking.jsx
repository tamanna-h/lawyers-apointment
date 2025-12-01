const Booking = ({booking, handleDelete}) => {
    const {name, specialization, fees, id} = booking;
    return (
            <div className="card card-side border border-[#DBDBDB] rounded-2xl mb-10 w-full">
                <div className="card-body w-full">
                    <div className='flex justify-between w-full items-center'>
                        <div>
                            <h2 className="card-title text-2xl font-bold">{name}</h2>
                            <p className='text-lg text-[#6F6F6F]'>{specialization}</p>
                        </div>
                        <p className='text-[#6F6F6F]'>Appointment Fee: {fees} Taka</p>
                    </div>
                    
                    <button onClick={() => handleDelete(id)} className="w-full outline outline-red-500 text-red-500 font-bold py-2 rounded-2xl cursor-pointer ">Cancle Appointment</button>
                    
                </div>
        </div>
    );
};

export default Booking;