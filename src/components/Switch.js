import React from 'react';

const Switch = ({ isDarkMode, toggleTheme }) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={isDarkMode}
                onChange={toggleTheme}
            />
            <div className="w-11 h-6 rounded-3xl bg-BackgroundLight peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:bg-BackgroundDark peer-checked:after:translate-x-full peer-checked:after:border-MainStyleDark after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-MainStyleLight after:border-MainStyleLight dark:after:bg-MainStyleDark dark:after:border-MainStyleDark after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-MainStyleDark peer-checked:bg-BackgroundDark"></div>
        </label>
    );
};

export default Switch;