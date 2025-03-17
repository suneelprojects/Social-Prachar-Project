// import React, { useState, useEffect } from 'react';
// import DatesForm from './DatesForm';
// import Button from '../Career_workshop/ButtonDemoBooking/Button';

// const ParentForm = () => {
//     const getSavedDates = () => {
//         const savedDates = localStorage.getItem("eventDates");
//         return savedDates ? JSON.parse(savedDates) : {
//             careerWorkshop: { eventDate: "2025-03-06" },
//             upcomingBatches: { eventDate: "2025-03-15" },
//             masterClassEvents: { eventDate: "2025-03-15" },
//         };
//     };

//     const [dates, setDates] = useState(getSavedDates());

//     useEffect(() => {
//         localStorage.setItem("eventDates", JSON.stringify(dates));
//     }, [dates]);

//     return (
//         <div className="container mt-5">
//             <h2 className="text-center">Update Event Dates</h2>
//             <DatesForm dates={dates} setDates={setDates} />
//             <Button date={dates.careerWorkshop.eventDate} />
//         </div>
//     );
// };

// export default ParentForm;