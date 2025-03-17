import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const DateContext = createContext();

export const DateProvider = ({ children }) => {
    // Get date from localStorage or use today's date
    const [date, setDate] = useState(() => {
        return localStorage.getItem("selectedDate") || new Date().toISOString().split("T")[0];
    });

    const [datesById, setDatesById] = useState(() => {
        const storedDates = localStorage.getItem("datesById");
        return storedDates ? JSON.parse(storedDates) : {};
    });

    // Update localStorage whenever the date changes
    useEffect(() => {
        localStorage.setItem("selectedDate", date);
    }, [date]);

    // Update localStorage whenever datesById changes
    useEffect(() => {
        localStorage.setItem("datesById", JSON.stringify(datesById));
    }, [datesById]);


    return (
        <DateContext.Provider value={{ date, setDate, datesById, setDatesById }}>
            {children}
        </DateContext.Provider>
    );
};

// Custom Hook to use DateContext
export const useDateContext = () => useContext(DateContext);
