"use client"
import { useState, useEffect } from 'react';

const ToggelTheme = () => {
    // State to manage the current mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Function to toggle between dark and light mode
    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
        // Save the mode preference to localStorage
        localStorage.setItem('isDarkMode', !isDarkMode);
    };

    // Load mode preference from localStorage on initial render
    useEffect(() => {
        const savedMode = localStorage.getItem('isDarkMode');
        if (savedMode) {
            setIsDarkMode(JSON.parse(savedMode));
        }
    }, []);

    // Apply dark mode styles to the body
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('bg-red-600');
        } else {
            document.body.classList.remove('bg-red-600');
        }
    }, [isDarkMode]);

    return (
        <div className="max-w-[1200px] flex justify-between mx-auto px-4 xl:px-0 py-3 text-white">
            <div
                className="p-0.5 w-[52px] h-7 block relative bg-gray-800 cursor-pointer transition-all duration-500 dark:bg-gray-800 rounded-full text-gray-900 dark:text-gray-800"
                onClick={toggleMode}
            >
                <span className={`bg-white flex justify-center items-center w-6 h-6 rounded-full absolute duration-500 transition-all top-0.5 start-1/2 -translate-x-1/2 ${isDarkMode ? "-translate-x-0" : "-translate-x-full"}`}>
                    {isDarkMode ? "a":"b"}
                </span>
            </div>
        </div >
    );
};

export default ToggelTheme;
