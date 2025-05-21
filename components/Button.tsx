// components/Button.tsx
import React from 'react';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  title: string;
  icon: string;
  variant: string;
  full?: boolean;
  onClick?: () => void; // Add this line
}

const Button: React.FC<ButtonProps> = ({ type, title, icon, variant, full, onClick }) => {
  return (
    <button type={type} className={variant} onClick={onClick}>
      <img src={icon} alt="" />
      {title}
    </button>
  );
};

export default Button;
