import React from "react";

const InputField = ({id, label, value, onChange, placeholder}) => (
    <div className="w-full">
        <label htmlFor={id} className="block text-sm font-semibold text-black dark:text-white">
            {label}
        </label>
        <input
            type="text"
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full mt-1 p-3 border border-MainStyleLight dark:border-MainStyleDark rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-MainStyleLight dark:focus:ring-MainStyleDark"
        />
    </div>
);
export  default  InputField