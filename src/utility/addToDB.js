const getBookedLawyer = () => {
    const bookedLawyer = localStorage.getItem('bookedLawyer');
    if (bookedLawyer) {
        return JSON.parse(bookedLawyer);
    }
    return [];
}

const addToDB = (id) => {
    const bookedLawyer = getBookedLawyer();

    if (!bookedLawyer.includes(id)) {
        bookedLawyer.push(id);
        localStorage.setItem('bookedLawyer', JSON.stringify(bookedLawyer));
        console.log(bookedLawyer);
    }
}

export const removeFromDB = (id) => {
  let bookedLawyers = getBookedLawyer();
  bookedLawyers = bookedLawyers.filter((bookedId) => bookedId !== String(id));
  localStorage.setItem('bookedLawyer', JSON.stringify(bookedLawyers));
};


export {addToDB, getBookedLawyer};