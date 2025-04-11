import React from 'react';
const IconLogo = ({className}) => {
    return (
        <div className="relative flex justify-center mb-4">
            <img
                src="/Icon.png"
                alt="Изображение сайта"
                className="w-full h-full object-cover rounded-l-lg"
            />
        </div>
    );
}

export default IconLogo