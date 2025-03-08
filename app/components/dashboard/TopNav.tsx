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
    <div className='flex relative mx-2 max-sm:px-6 items-center justify-between w-full custom-height max-sm:pt-2 my-2 md:my-3 pt-8'>
      <div className='flex lg:!hidden cursor-pointer mr-4 -mt-5 bg-secondary p-2 rounded-lg'>
        {isOpen ? (
          <Close className='!text-2xl' onClick={toggleSidenav} />
        ) : (
          <Menu className='!text-2xl' onClick={toggleSidenav} />
        )}
      </div>
      <div className='flex flex-col md:flex-row items-center md:justify-between w-fit md:w-full'>
        <div className='max-sm:hidden flex flex-col order-2 space-y-2 pb-2 md:order-1 w-full'>
          <span className='leading-3 font-karla font-medium text-xl md:text-2xl text-dark w-full'>
            {title ?? title}
          </span>
          {description && (
            <span className='font-karla text-sm md:text-base text-gray-400'>
              {description}
            </span>
          )}
        </div>
        {/* meloch */}
        {/* cardinal hotel */}

        <div className='relative w-full md:w-[480px] order-1 md:order-2 bg-secondary rounded-lg'>
          <input
            className='w-full pr-10 pl-4 py-3 placeholder:text-sm outline-none'
            value={value}
            placeholder='Search for anything...'
            onChange={onChange}
            type='textarea'
          />
          <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-white' />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
