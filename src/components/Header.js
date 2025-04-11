import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from "@/components/button";
import Switch from './Switch'; // Импортируйте компонент ThemeSwitch

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, [isDarkMode]);

    const handleLogout = () => {
        router.push('/login');
    };

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <header className="flex items-center justify-between w-full bg-MainStyleLight dark:bg-MainStyleDark shadow-md h-16 px-8">
            <div className="flex items-center">
                <h1 className="text-4xl font-bold company-name text-MainStyleDark dark:text-MainStyleLight">TartBlog</h1>
            </div>
            <div className="flex items-center justify-center flex-grow">
                <Switch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
            <Button text="Выйти" variant="green" size="sm" callback={handleLogout}/>
        </header>
    );
};

export default Header;
