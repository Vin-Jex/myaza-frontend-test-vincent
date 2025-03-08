"use client";
import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

interface CustomSelectProps {
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  selectedValue,
  onChange,
  className = "",
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (value: string) => {
    onChange(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        type='button'
        onClick={toggleDropdown}
        className='flex items-center justify-center w-full rounded-md border border-primary-text shadow-sm px-2 py-0.5 text-sm font-medium text-primary-text focus:outline-none gap-2'
      >
        {selectedValue}
        <MdOutlineArrowDropDown className='!text-[1.5rem]' />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className='origin-top-right absolute right-0 mt-2 w-22 z-100 rounded-md shadow-lg bg-[#464687] focus:outline-none'>
          <div className='py-1'>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className='block w-full px-4 py-2 text-sm text-light cursor-pointer hover:bg-[#5a5a9e]'
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
