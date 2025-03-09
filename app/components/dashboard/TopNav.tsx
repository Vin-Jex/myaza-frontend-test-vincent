"use client";
import React from "react";
import { Close, Menu } from "@mui/icons-material";
import { FaSearch } from "react-icons/fa";

interface TopNavType {
  toggleSidenav: () => void;
  isOpen: boolean;
  title?: string;
  description?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TopNav: React.FC<TopNavType> = ({
  title,
  description,
  toggleSidenav,
  isOpen,
  value,
  onChange,
}) => {
  return (
    <div className='flex relative items-center justify-between w-full custom-height md:pt-2 my-2 md:my-3 pt-5'>
      <div
        className={`flex lg:!hidden cursor-pointer mr-2 md:mr-4 -mt-5 bg-secondary p-2 rounded-lg 
    transition-all duration-300 ease-in-out ${
      isOpen
        ? "!fixed right-[calc(100vw-19.8rem)] z-12 top-[3.7rem]"
        : "right-4 top-[3.7rem]"
    }`}
      >
        {isOpen ? (
          <Close className='!text-2xl' onClick={toggleSidenav} />
        ) : (
          <Menu className='!text-2xl' onClick={toggleSidenav} />
        )}
      </div>

      <div className='flex flex-row items-start sm:items-center justify-between w-full space-y-2 sm:space-y-0'>
        {/* Title and Description */}
        <div className='flex flex-col space-y-1 sm:space-y-2 w-full max-w-xs sm:max-w-md'>
          <span className='leading-tight font-karla font-medium text-lg sm:text-xl md:text-2xl text-dark'>
            {title}
          </span>
          {description && (
            <span className='font-karla text-xs sm:text-sm md:text-base text-gray-400 break-words w-[70%]'>
              {description.length > 50
                ? `${description.slice(0, 50)}...`
                : description}
            </span>
          )}
        </div>

        {/* Search Bar */}
        <div className='relative w-full max-w-[250px] sm:max-w-[350px] lg:max-w-[480px] bg-secondary rounded-lg'>
          <input
            className='w-full pr-10 pl-4 py-2 sm:py-3 placeholder:text-xs sm:placeholder:text-sm outline-none bg-transparent text-white'
            value={value}
            placeholder='Search for anything...'
            onChange={onChange}
            type='text'
          />
          <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-sm sm:text-base' />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
