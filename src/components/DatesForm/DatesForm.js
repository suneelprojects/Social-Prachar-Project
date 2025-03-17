// import React, { useEffect, useState } from "react";
// import Button from '../Career_workshop/ButtonDemoBooking/Button';

// const DatesForm = ({ dates={}, setDates }) => {
//     // Initialize formValues with the dates prop
//     const [formValues, setFormValues] = useState({
//         careerWorkshop: { eventDate: dates.careerWorkshop?.eventDate || "" },
//         upcomingBatches: { eventDate: dates.upcomingBatches?.eventDate || "" },
//         masterClassEvents: { eventDate: dates.masterClassEvents?.eventDate || "" },
//     });

//     useEffect(() => {
//         setFormValues({
//             careerWorkshop: { eventDate: dates.careerWorkshop?.eventDate || "" },
//             upcomingBatches: { eventDate: dates.upcomingBatches?.eventDate || "" },
//             masterClassEvents: { eventDate: dates.masterClassEvents?.eventDate || "" },
//         });
//     }, [dates]);

//     const handleChange = (e, section) => {
//         const { name, value } = e.target;
//         setFormValues((prevValues) => ({
//             ...prevValues,
//             [section]: { ...prevValues[section], [name]: value },
//         }));
//     };

//     const handleSubmit = (e, section) => {
//         e.preventDefault();
//         const updatedDates = { ...dates, [section]: { ...formValues[section] } };
//         setDates(updatedDates);
//         localStorage.setItem("eventDates", JSON.stringify(updatedDates));
//     };

//     return (
//         <div className="container mt-5">
//             <h2 className="text-center">Update Event Dates</h2>

//             <div className="row">
//                 {/* Career Workshop Form */}
//                 <div className="col-md-4">
//                     <div className="p-4 border rounded shadow">
//                         <h4>Career Workshop</h4>
//                         <form onSubmit={(e) => handleSubmit(e, "careerWorkshop")}>
//                             <div className="mb-3">
//                                 <label className="form-label">Event Date:</label>
//                                 <input
//                                     type="date"
//                                     className="form-control"
//                                     name="eventDate"
//                                     value={formValues.careerWorkshop.eventDate}
//                                     onChange={(e) => handleChange(e, "careerWorkshop")}
//                                 />
//                             </div>
//                             <button type="submit" className="btn btn-primary w-100">Update</button>
//                         </form>
//                         <div className="mt-3 p-2 bg-light rounded shadow">
//                             <p><strong>Updated Date:</strong> {dates.careerWorkshop?.eventDate || "N/A"}</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Upcoming Batches Form */}
//                 <div className="col-md-4">
//                     <div className="p-4 border rounded shadow">
//                         <h4>Upcoming Batches</h4>
//                         <form onSubmit={(e) => handleSubmit(e, "upcomingBatches")}>
//                             <div className="mb-3">
//                                 <label className="form-label">Batch Start Date:</label>
//                                 <input
//                                     type="date"
//                                     className="form-control"
//                                     name="eventDate"
//                                     value={formValues.upcomingBatches.eventDate}
//                                     onChange={(e) => handleChange(e, "upcomingBatches")}
//                                 />
//                             </div>
//                             <button type="submit" className="btn btn-success w-100">Update</button>
//                         </form>
//                         <div className="mt-3 p-2 bg-light rounded shadow">
//                             <p><strong>Updated Date:</strong> {dates.upcomingBatches?.eventDate || "N/A"}</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Masterclass Events Form */}
//                 <div className="col-md-4">
//                     <div className="p-4 border rounded shadow">
//                         <h4>Masterclass Events</h4>
//                         <form onSubmit={(e) => handleSubmit(e, "masterClassEvents")}>
//                             <div className="mb-3">
//                                 <label className="form-label">Event Date:</label>
//                                 <input
//                                     type="date"
//                                     className="form-control"
//                                     name="eventDate"
//                                     value={formValues.masterClassEvents.eventDate}
//                                     onChange={(e) => handleChange(e, "masterClassEvents")}
//                                 />
//                             </div>
//                             <button type="submit" className="btn btn-warning w-100">Update</button>
//                         </form>
//                         <div className="mt-3 p-2 bg-light rounded shadow">
//                             <p><strong>Updated Date:</strong> {dates.masterClassEvents?.eventDate || "N/A"}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DatesForm;