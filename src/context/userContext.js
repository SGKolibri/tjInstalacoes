import React, { createContext, useState, useEffect, useContext } from 'react';

const UserProgressContext = createContext();

export const useUserProgress = () => {
    return useContext(UserProgressContext);
};

export const UserProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState(() => {
        const savedProgress = localStorage.getItem('userProgress');
        return savedProgress ? JSON.parse(savedProgress) : 0;
    });

    useEffect(() => {
        localStorage.setItem('userProgress', JSON.stringify(progress));
    }, [progress]);

    const updateProgress = (value) => {
        setProgress(value);
    };

    return (
        <UserProgressContext.Provider value={{ progress, updateProgress }}>
            {children}
        </UserProgressContext.Provider>
    );
};
