import React from 'react';
const IconUser = ({isDarkMode}) => {
    return (
        <div className="relative flex justify-center mb-4 p-5">
            <img
                src="/UserIcon.png"
                alt="Изображение пользователя"
                className="w-32 h-32 object-cover rounded-l-lg"
            />
        </div>
    );
}

export default IconUser