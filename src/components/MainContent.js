import React from 'react';
import ImageSection from './ImageSection';
import TextSection from './TextSection';

const MainContent = () => {
    return (
        <div className="min-h-screen flex flex-col p-4">
            <div className="flex flex-grow">
                <ImageSection />
                <TextSection />
            </div>
        </div>
    );
};

export default MainContent;