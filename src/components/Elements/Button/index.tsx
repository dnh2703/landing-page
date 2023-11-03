import React from 'react';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

function Button({
  className,
  children,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
}

export default Button;
