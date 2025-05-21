// components/Button.tsx
import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  title: string;
  icon: string;
  variant: string;
  full?: boolean;
  onClick?: () => void; // Add this line to include onClick
}

const Button = ({ type, title, icon, variant, full, onClick }: ButtonProps) => {
  return (
    <button type={type} className={variant} onClick={onClick}>
      <img src={icon} alt="" />
      {title}
    </button>
  );
};

export default Button;
