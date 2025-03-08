"use client";

import React, { InputHTMLAttributes, useState } from "react";
import {
  InfoOutlined,
} from "@mui/icons-material";
import { InputType } from "../types/input-type";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    React.ComponentProps<"input"> {
  validationError?: string;
  isValid?: boolean | undefined;
  handleInputChange?: React.ChangeEvent<HTMLInputElement>;
  inputWidth?: number | string;
  status?: string;
  type?: InputType;
  inputSize?: "xs" | "sm";
}

const Input: React.FC<InputProps> = ({
  className,
  validationError,
  isValid,
  inputWidth,
  status,
  type: Type,
  ...inputProps
}) => {
  const [showInput, setShowInput] = useState<boolean | undefined>(false);

  const showInputField = () => {
    setShowInput(!showInput);
  };

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
      <div className='flex relative items-center w-full'>
        <input
          type={showInput ? "" : Type}
          {...inputProps}
          className={`${className} px-3 relative py-2 placeholder:text-sm !border-gray-200 rounded-lg`}
          style={{
            width: "100%",
            border: `1.5px solid ${statusColor}`,
            outline: "none",
          }}
        />
        {Type === "password" && showInput ? (
          <span
            className='absolute right-3 top-1/2 -translate-y-1/2 text-primary text-sm cursor-pointer'
            onClick={showInputField}
          >
            Show
          </span>
        ) : Type === "password" && !showInput ? (
          <span
            className='absolute right-3 top-1/2 -translate-y-1/2 text-primary text-sm cursor-pointer'
            onClick={showInputField}
          >
            Hide
          </span>
        ) : (
          ""
        )}
      </div>
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

export default Input;
