import React from 'react';

const Footer = ({ className }) => {
    return (
        <footer className={`bg-MainStyleLight dark:bg-MainStyleDark text-MainStyleDark dark:text-MainStyleLight p-4 ${className}`} style={{ height: '60px' }}>
            <p>&copy; Github: Sweetrest | Email: rostislav******@mail.ru | Phone:+7923***-**-**</p>
        </footer>
    );
};

export default Footer;