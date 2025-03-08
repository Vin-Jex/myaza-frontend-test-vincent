"use client";

import React from "react";
import { InfoOutlined } from "@mui/icons-material";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  validationError?: string;
  isValid?: boolean;
  inputWidth?: number | string;
  status?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  validationError,
  isValid,
  inputWidth,
  status,
  ...textareaProps
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
          inputWidth && typeof inputWidth === "string"
            ? ""
            : inputWidth && typeof inputWidth === "number"
            ? "" + "px"
            : "",
      }}
    >
      <textarea
        {...textareaProps}
        className={`px-3 py-2 w-full border rounded-lg placeholder:text-sm ${
          status === "error" ? "border-red-500" : "border-gray-300"
        }`}
        style={{
          border: `1.5px solid ${statusColor}`,
        }}
      />
      {validationError && isValid && (
        <div className='flex items-center space-x-1'>
          <span className='flex items-center'>
            <InfoOutlined
              sx={{ fontSize: "1.2rem", color: `${statusColor}` }}
            />
          </span>
          <p style={{ color: `${statusColor}` }}>{validationError}</p>
        </div>
      )}
    </div>
  );
};

export default Textarea;
