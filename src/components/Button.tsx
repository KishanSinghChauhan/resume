import clsx from 'clsx';
import React, { FC, MouseEventHandler, ReactNode } from 'react';

interface IButtonProps {
  text:string;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  textClassName?: string;
  animate?: boolean;
}

const Button: FC<IButtonProps> = ({
  text = "Let’s talk",
  onClick,
  startIcon = "",
  endIcon = "",
  className = "",
  textClassName = "",
  animate = false
}) => {
  return (
    <button
      className={clsx(
        "h-14 gap-2 border border-[#030326] text-lg  flex items-center px-6 bg-transparent transition-all duration-300 ease-in-out",
        className,
        {
          "hover:scale-x-105": animate,
        }
      )}
      onClick={onClick}
    >
      {startIcon && startIcon}
      <span className={clsx("inline-block text-inherit", textClassName)}>
        {text}
      </span>
      {endIcon && endIcon}
    </button>
  );
};

export default Button


    
      