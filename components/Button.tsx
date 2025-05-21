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
      className={`btn ${variant} ${full ? "w-full" : ""} ${className ?? ""} flex items-center gap-2`}
    >
      {/* Icon on the left if provided */}
      {icon && <img src={icon} alt={`${title} icon`} className="w-5 h-5" />}
      <span>{title}</span>
    </button>
  );
};

export default Button;
