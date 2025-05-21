import React from "react";

export interface ButtonProps {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: () => void; // Add this line
}

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  icon,
  variant,
  full,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`btn ${variant} ${full ? "w-full" : ""}`}
      onClick={onClick} // Add this line
    >
      {icon && <img src={icon} alt={title} />}
      {title}
    </button>
  );
};

export default Button;
