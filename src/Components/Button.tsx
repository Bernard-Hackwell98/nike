import React from "react";

// Define the props interface
interface ButtonProps {
  label: string;
  iconURL?: string; // Made optional since it may not always be passed
  backgroundColor?: string; // Made optional with default styles
  textColor?: string; // Made optional with default styles
  borderColor?: string; // Made optional with default styles
  fullWidth?: boolean; // Made optional with a default value
}

const Button: React.FC<ButtonProps> = ({
label,
iconURL,
  backgroundColor = "bg-coral-red", // Default value for backgroundColor
  textColor = "text-white", // Default value for textColor
  borderColor = "border-coral-red", // Default value for borderColor
  fullWidth = false, // Default value for fullWidth
}) => {
return (
    <button
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${backgroundColor} ${textColor} ${borderColor} rounded-full 
    ${fullWidth ? "w-full" : ""}`}
    >
    {label}

    {iconURL && (
        <img
        src={iconURL}
        alt="icon"
        className="ml-2 rounded-full bg-white w-5 h-5"
        />
    )}
    </button>
);
};

export default Button;
