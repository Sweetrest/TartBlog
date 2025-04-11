import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header className="flex-none" />
            <main className="flex-grow p-4">
                {children}
            </main>
            <Footer className="flex-none" />
        </div>
    );
};

export default Layout;