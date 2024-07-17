import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context
const UserProgressContext = createContext();

// Custom hook to use the UserProgressContext
export const useUserProgress = () => {
    return useContext(UserProgressContext);
};

// Provider component
export const UserProgressProvider = ({ children }) => {
    // Initialize state from localStorage or default to 0
    const [progress, setProgress] = useState(() => {
        const savedProgress = localStorage.getItem('userProgress');
        return savedProgress ? JSON.parse(savedProgress) : 0;
    });

    // Sync progress with localStorage
    useEffect(() => {
        localStorage.setItem('userProgress', JSON.stringify(progress));
    }, [progress]);

    // Function to update progress
    const updateProgress = (value) => {
        setProgress(value);
    };

    return (
        <UserProgressContext.Provider value={{ progress, updateProgress }}>
            {children}
        </UserProgressContext.Provider>
    );
};
