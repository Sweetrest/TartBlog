import React from 'react';

const ImageSection = () => {
    return (
        <div className="w-2/3 p-4 grid grid-cols-2 gap-4 bg-SubStyleLight dark:bg-SubStyleDark rounded-lg m-2">
            <div>
                <img
                    src="/College.png"
                    alt="Изображение 1"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                />
            </div>
            <div>
                <img
                    src="/College2.jpg"
                    alt="Изображение 2"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                />
            </div>
            <div>
                <img
                    src="/College2.jpg"
                    alt="Изображение 3"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                />
            </div>
            <div>
                <img
                    src="/College.png"
                    alt="Изображение 4"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                />
            </div>
        </div>
    );
};

export default ImageSection;