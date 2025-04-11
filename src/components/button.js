import React from "react";

const sizeStyles = {
  sm: "px-10 py-3 text-base",
  md: "px-20 py-3 text-base",
  bg: "px-40 py-3 text-base",
};

const variantStyles = {
  mainColor: "bg-MainStyleLight dark:bg-MainStyleDark text-white hover:bg-blue-600",
  green: "bg-SubGreenLight dark:bg-SubGreenDark text-white hover:bg-blue-600",
  yellow: "bg-SubYellowLight dark:bg-SubYellowDark text-white hover:bg-blue-600",
};

const Button = ({ text, variant = "mainColor", size = "md", callback, imageSrc, altText }) => (
  <button
    className={`font-thin m-5 rounded-3xl transition duration-300 flex items-center justify-center ${sizeStyles[size]} ${variantStyles[variant]}`}
    onClick={callback}
  >
    {text}
    {imageSrc && (
      <img
        src={imageSrc}
        alt={altText}
        className="ml-2"
      />
    )}
  </button>
);

export default Button;
