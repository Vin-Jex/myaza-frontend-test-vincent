"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import Spinner from "./Spinner";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "blue" | "outline" | "red" | "yellow" | "white";
  width?: "full" | "auto" | "fit";
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "sm",
  variant = "blue",
  width = "auto",
  isLoading = false,
  className,
  disabled,
  ...props
}) => {
  const sizeClassName = {
    xs: "px-2 md:px-2.5 lg:px-3 py-2 lg:py-2.5 text-xs md:text-sm font-medium",
    sm: "px-2 md:px-3 lg:px-4 py-2.5 lg:py-2.5 text-sm md:text-base font-medium",
    md: "px-2 sm:px-3.5 md:px-5 py-2.5 lg:py-3 text-lg font-medium",
    lg: "px-3 md:px-4 lg:px-6 py-2.5 lg:py-3 text-lg",
  }[size];

  const widthClassName = {
    full: "w-full",
    auto: "w-full max-w-[100px] md:max-w-[130px]",
    fit: "w-fit",
  }[width];

  const colorClassName = {
    blue: "bg-primary text-secondary hover:bg-primary/90 transition duration-200 ease-in-out",
    white:
      "bg-white text-gray-900 hover:bg-white/90 transition duration-200 ease-in-out",
    outline:
      "bg-transparent border border-primary hover:border-transparent text-primary hover:bg-primary hover:text-white transition duration-200 ease-in-out",
    red: "bg-red-500 text-white hover:bg-red-600 transition duration-200 ease-in-out",
    yellow:
      "bg-yellow-500 text-white hover:bg-yellow-600 transition duration-200 ease-in-out",
  }[variant];

  const disabledClass =
    "disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-300";

  return (
    <button
      className={`flex items-center justify-center space-x-1 rounded-md font-karla font-medium 
        ${widthClassName} text-center ${sizeClassName} ${colorClassName} ${disabledClass} 
        cursor-pointer ${className} outline-none`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
