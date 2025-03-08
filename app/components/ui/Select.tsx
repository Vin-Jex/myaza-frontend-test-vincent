"use client";

import { InfoOutlined } from "@mui/icons-material";
import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  validationError?: string;
  isValid?: boolean;
  inputWidth?: number | string;
  status?: "success" | "warning" | "error";
}

const Select: React.FC<SelectProps> = ({
  label,
  placeholder = "Select an option",
  options,
  validationError,
  isValid,
  inputWidth,
  status,
  className,
  ...props
}) => {
  const statusColor =
    status === "success"
      ? "#06C270"
      : status === "warning"
      ? "#FFCC00"
      : status === "error"
      ? "#FF3B3B"
      : "#1E1E1E60";

  return (
    <div
      className='space-y-1 w-full'
      style={{
        width:
          typeof inputWidth === "string"
            ? ""
            : inputWidth && typeof inputWidth === "number"
            ? `${inputWidth}px`
            : "",
      }}
    >
      {label && <label className='block text-sm font-medium'>{label}</label>}
      <select
        {...props}
        className={`${className} px-3 py-2 rounded-lg w-full`}
        style={{
          border: `1.5px solid ${statusColor}`,
          outline: "none",
        }}
      >
        <option value=''>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {validationError && isValid && (
        <div className='flex items-center space-x-1'>
          <InfoOutlined sx={{ fontSize: "1.2rem", color: statusColor }} />
          <p style={{ color: statusColor }}>{validationError}</p>
        </div>
      )}
    </div>
  );
};

export default Select;
