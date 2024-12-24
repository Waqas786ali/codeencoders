import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconClassName?: string;
  className?: string;
  animationClass?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({iconClassName = '', className = '',animationClass= '', children, ...props }) => {
  return (
    <button className={`flex items-center xl:gap-1.5 font-euro-semibold ${className}`} {...props}>
      <img className={`size-11 ${iconClassName}`} src="/assets/svgs/button.svg" alt="button" />
      <span className={`${animationClass}`}>
        {children}
      </span>
    </button>
  );
};
