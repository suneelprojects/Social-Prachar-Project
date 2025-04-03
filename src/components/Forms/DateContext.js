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

    // Online Test Date
    const [onlineTestDate, setOnlineTestDate] = useState(() => {
        return localStorage.getItem("onlineTestDate") || new Date().toISOString().split("T")[0];
    });

    // Offline Test Date
    const [offlineTestDate, setOfflineTestDate] = useState(() => {
        return localStorage.getItem("offlineTestDate") || new Date().toISOString().split("T")[0];
    });

    // Update localStorage whenever the date changes
    useEffect(() => {
        localStorage.setItem("selectedDate", date);
    }, [date]);

    // Update localStorage whenever datesById changes
    useEffect(() => {
        localStorage.setItem("datesById", JSON.stringify(datesById));
    }, [datesById]);

    useEffect(() => {
        localStorage.setItem("onlineTestDate", onlineTestDate);
    }, [onlineTestDate]);

    useEffect(() => {
        localStorage.setItem("offlineTestDate", offlineTestDate);
    }, [offlineTestDate]);

    return (
        <DateContext.Provider value={{
            date, setDate, datesById, setDatesById, onlineTestDate, setOnlineTestDate,
            offlineTestDate, setOfflineTestDate
        }}>
            {children}
        </DateContext.Provider>
    );
};

// Custom Hook to use DateContext
export const useDateContext = () => useContext(DateContext);
