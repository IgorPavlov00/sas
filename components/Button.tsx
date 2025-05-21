import React from "react";

export interface ButtonProps {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: () => void;
  className?: string; // ✅ Add this line
}

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  icon,
  variant,
  full,
  onClick,
  className, // ✅ Add this line
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variant} ${full ? "w-full" : ""} ${className ?? ""}`} // ✅ Merge with variant
    >
      <span>{title}</span>      {title}    </button>
  );
};

export default Button;
