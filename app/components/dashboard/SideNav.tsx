"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { BiSolidDashboard } from "react-icons/bi";
import { VscSettingsGear } from "react-icons/vsc";

type NavItemProps = {
  href: string;
  activeClass: string;
  setActiveClass: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
};

const SideNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeClass, setActiveClass] = useState<string>("");

  useEffect(() => {
    const baseRoute = pathname.split("/")[2];
    setActiveClass(baseRoute);
  }, [pathname]);

  const options = ["logout"];
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`lg:block transition-transform transform flex-col h-full w-full py-8`}
    >
      <div className={`px-4 flex flex-col h-full`} ref={navRef}>
        <div className='flex justify-between items-center'>
          <Image
            onClick={() => {
              window.scrollTo(0, 0);
              router.push("/");
            }}
            src='/logo_full.svg'
            width={56}
            height={56}
            alt='Logo'
            className='w-28 h-14 cursor-pointer transition-all ease-in-out duration-500 flex'
          />
        </div>

        <ul className='space-y-3 md:space-y-4 flex-1 mt-10'>
          <NavItem
            href='/dashboard/overview'
            activeClass={activeClass}
            setActiveClass={setActiveClass}
            activeIcon={
              <BiSolidDashboard className='text-secondary !text-[1.3rem]' />
            }
            label='dashboard'
            icon={<BiSolidDashboard />}
          />

          <NavItem
            href='/dashboard/overview#'
            activeClass={activeClass}
            setActiveClass={setActiveClass}
            activeIcon={
              <svg
                width='18'
                height='17'
                viewBox='0 0 18 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15.6663 15.6667V9.83333M8.99967 15.6667V7.33333M2.33301 15.6667L2.33301 12.3333M10.1719 3.18959L14.4789 4.80472M7.99865 3.50077L3.3332 6.99986M16.5502 4.36612C17.0384 4.85427 17.0384 5.64573 16.5502 6.13388C16.0621 6.62204 15.2706 6.62204 14.7825 6.13388C14.2943 5.64573 14.2943 4.85427 14.7825 4.36612C15.2706 3.87796 16.0621 3.87796 16.5502 4.36612ZM3.21689 6.86612C3.70505 7.35427 3.70505 8.14573 3.21689 8.63388C2.72874 9.12204 1.93728 9.12204 1.44912 8.63388C0.960969 8.14573 0.960969 7.35427 1.44912 6.86612C1.93728 6.37796 2.72874 6.37796 3.21689 6.86612ZM9.88356 1.86612C10.3717 2.35427 10.3717 3.14573 9.88356 3.63388C9.3954 4.12204 8.60395 4.12204 8.11579 3.63388C7.62764 3.14573 7.62764 2.35427 8.11579 1.86612C8.60395 1.37796 9.3954 1.37796 9.88356 1.86612Z'
                  stroke='#1d1d41'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }
            label='Analytics'
            icon={
              <svg
                width='18'
                height='17'
                viewBox='0 0 18 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15.6663 15.6667V9.83333M8.99967 15.6667V7.33333M2.33301 15.6667L2.33301 12.3333M10.1719 3.18959L14.4789 4.80472M7.99865 3.50077L3.3332 6.99986M16.5502 4.36612C17.0384 4.85427 17.0384 5.64573 16.5502 6.13388C16.0621 6.62204 15.2706 6.62204 14.7825 6.13388C14.2943 5.64573 14.2943 4.85427 14.7825 4.36612C15.2706 3.87796 16.0621 3.87796 16.5502 4.36612ZM3.21689 6.86612C3.70505 7.35427 3.70505 8.14573 3.21689 8.63388C2.72874 9.12204 1.93728 9.12204 1.44912 8.63388C0.960969 8.14573 0.960969 7.35427 1.44912 6.86612C1.93728 6.37796 2.72874 6.37796 3.21689 6.86612ZM9.88356 1.86612C10.3717 2.35427 10.3717 3.14573 9.88356 3.63388C9.3954 4.12204 8.60395 4.12204 8.11579 3.63388C7.62764 3.14573 7.62764 2.35427 8.11579 1.86612C8.60395 1.37796 9.3954 1.37796 9.88356 1.86612Z'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }
          />

          <NavItem
            href='/dashboard/wallet'
            activeClass={activeClass}
            setActiveClass={setActiveClass}
            activeIcon={
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.3333 5.66677V2.75065C12.3333 2.05753 12.3333 1.71097 12.1873 1.498C12.0598 1.31192 11.8622 1.18551 11.6398 1.14767C11.3852 1.10435 11.0706 1.24958 10.4413 1.54003L3.04918 4.95176C2.48792 5.2108 2.20729 5.34032 2.00175 5.5412C1.82005 5.71878 1.68135 5.93556 1.59625 6.17496C1.5 6.44576 1.5 6.75483 1.5 7.37299V11.5001M12.75 11.0834H12.7583M1.5 8.33343L1.5 13.8334C1.5 14.7669 1.5 15.2336 1.68166 15.5901C1.84144 15.9037 2.09641 16.1587 2.41002 16.3184C2.76654 16.5001 3.23325 16.5001 4.16667 16.5001H13.8333C14.7668 16.5001 15.2335 16.5001 15.59 16.3184C15.9036 16.1587 16.1586 15.9037 16.3183 15.5901C16.5 15.2336 16.5 14.7669 16.5 13.8334V8.33343C16.5 7.40001 16.5 6.9333 16.3183 6.57678C16.1586 6.26318 15.9036 6.00821 15.59 5.84842C15.2335 5.66677 14.7668 5.66677 13.8333 5.66677L4.16667 5.66677C3.23325 5.66677 2.76654 5.66677 2.41002 5.84842C2.09641 6.00821 1.84144 6.26318 1.68166 6.57678C1.5 6.9333 1.5 7.40001 1.5 8.33343ZM13.1667 11.0834C13.1667 11.3136 12.9801 11.5001 12.75 11.5001C12.5199 11.5001 12.3333 11.3136 12.3333 11.0834C12.3333 10.8533 12.5199 10.6668 12.75 10.6668C12.9801 10.6668 13.1667 10.8533 13.1667 11.0834Z'
                  stroke='#1D1D41'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }
            label='My Wallet'
            icon={
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.3333 5.66677V2.75065C12.3333 2.05753 12.3333 1.71097 12.1873 1.498C12.0598 1.31192 11.8622 1.18551 11.6398 1.14767C11.3852 1.10435 11.0706 1.24958 10.4413 1.54003L3.04918 4.95176C2.48792 5.2108 2.20729 5.34032 2.00175 5.5412C1.82005 5.71878 1.68135 5.93556 1.59625 6.17496C1.5 6.44576 1.5 6.75483 1.5 7.37299V11.5001M12.75 11.0834H12.7583M1.5 8.33343L1.5 13.8334C1.5 14.7669 1.5 15.2336 1.68166 15.5901C1.84144 15.9037 2.09641 16.1587 2.41002 16.3184C2.76654 16.5001 3.23325 16.5001 4.16667 16.5001H13.8333C14.7668 16.5001 15.2335 16.5001 15.59 16.3184C15.9036 16.1587 16.1586 15.9037 16.3183 15.5901C16.5 15.2336 16.5 14.7669 16.5 13.8334V8.33343C16.5 7.40001 16.5 6.9333 16.3183 6.57678C16.1586 6.26318 15.9036 6.00821 15.59 5.84842C15.2335 5.66677 14.7668 5.66677 13.8333 5.66677L4.16667 5.66677C3.23325 5.66677 2.76654 5.66677 2.41002 5.84842C2.09641 6.00821 1.84144 6.26318 1.68166 6.57678C1.5 6.9333 1.5 7.40001 1.5 8.33343ZM13.1667 11.0834C13.1667 11.3136 12.9801 11.5001 12.75 11.5001C12.5199 11.5001 12.3333 11.3136 12.3333 11.0834C12.3333 10.8533 12.5199 10.6668 12.75 10.6668C12.9801 10.6668 13.1667 10.8533 13.1667 11.0834Z'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }
          />

          <NavItem
            href='/dashboard/wallet#'
            activeClass={activeClass}
            setActiveClass={setActiveClass}
            activeIcon={
              <svg
                width='18'
                height='17'
                viewBox='0 0 18 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.5 15.6667C3.44649 13.6021 6.08918 12.3333 9 12.3333C11.9108 12.3333 14.5535 13.6021 16.5 15.6667M12.75 5.25C12.75 7.32107 11.0711 9 9 9C6.92893 9 5.25 7.32107 5.25 5.25C5.25 3.17893 6.92893 1.5 9 1.5C11.0711 1.5 12.75 3.17893 12.75 5.25Z'
                  stroke='#1d1d41'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }
            label='Account'
            icon={
              <svg
                width='18'
                height='17'
                viewBox='0 0 18 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.5 15.6667C3.44649 13.6021 6.08918 12.3333 9 12.3333C11.9108 12.3333 14.5535 13.6021 16.5 15.6667M12.75 5.25C12.75 7.32107 11.0711 9 9 9C6.92893 9 5.25 7.32107 5.25 5.25C5.25 3.17893 6.92893 1.5 9 1.5C11.0711 1.5 12.75 3.17893 12.75 5.25Z'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }
          />

          <NavItem
            href='/dashboard/wallet#'
            activeClass={activeClass}
            setActiveClass={setActiveClass}
            activeIcon={
              <VscSettingsGear className='text-secondary !text-[1.3rem]' />
            }
            label='Settings'
            icon={<VscSettingsGear className='text-light !text-[1.25rem]' />}
          />
        </ul>

        <ul className='space-y-3 md:space-y-4 flex-1 mt-5 mb-10 py-5 border-t border-[#4B4B99]'>
          <li className='font-karla'>
            <Link href='#' className='px-3 py-2 space-x-3 flex items-center'>
              <div
                className={` flex items-center justify-center rounded-lg min-w-[30px] min-h-[30px]`}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.57533 7.49984C7.77125 6.94289 8.15795 6.47326 8.66695 6.17411C9.17596 5.87497 9.77441 5.76562 10.3563 5.86543C10.9382 5.96524 11.466 6.26777 11.8462 6.71944C12.2264 7.17111 12.4345 7.74277 12.4337 8.33317C12.4337 9.99984 9.93366 10.8332 9.93366 10.8332M10.0003 14.1665H10.0087M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <span className='capitalize text-sm md:text-base text-light'>
                Help centre
              </span>
            </Link>
          </li>

          <li className='font-karla'>
            <button className='px-3 py-2 space-x-3 flex items-center'>
              <div
                className={` flex items-center justify-center rounded-lg min-w-[30px] min-h-[30px]`}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18.3337 13.2036C17.2392 13.6986 16.0242 13.9741 14.7449 13.9741C9.92974 13.9741 6.02629 10.0707 6.02629 5.25553C6.02629 3.97621 6.30183 2.76125 6.7968 1.66675C3.77179 3.03477 1.66699 6.079 1.66699 9.61482C1.66699 14.43 5.57044 18.3334 10.3856 18.3334C13.9214 18.3334 16.9656 16.2286 18.3337 13.2036Z'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <span className='capitalize text-sm md:text-base text-light'>
                Dark Theme
              </span>
            </button>
          </li>
        </ul>

        <div className='mb-auto'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <Image
                src='/images/profile.svg'
                width={60}
                height={60}
                alt='Profile Pics'
                className='w-12 h-12 rounded-full'
              />

              <div className='text-sm'>
                <span className=''>Ali Riaz</span>
                <h5 className='text-xs'>Web Developer</h5>
              </div>
            </div>

            <MdOutlineArrowDropDown
              className='!text-[1.5rem]'
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            />
          </div>

          {/* Dropdown Options */}
          {isDropdownOpen && (
            <div className='w-full mt-2 bg-primary rounded-md shadow-lg z-10 overflow-hidden'>
              {options.map((option, index) => (
                <span
                  key={index}
                  className='block px-4 py-2 text-secondary hover:bg-primary cursor-pointer capitalize'
                  onClick={() => {
                    handleOptionChange(option);
                    if (selectedOption === "logout") {
                      Cookies.remove("token");
                      router.push("/auth/login");
                    }
                  }}
                  tabIndex={0}
                >
                  {option}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const NavItem: React.FC<NavItemProps> = ({
  href,
  activeClass,
  setActiveClass,
  label,
  icon,
  activeIcon,
}) => {
  const [tab, setTab] = useState("");

  useEffect(() => {
    const baseRoute = href.split("/")[2];
    setTab(baseRoute);
  }, [href]);

  return (
    <li className='font-karla'>
      <Link
        href={href}
        className={`px-3 py-2 space-x-3 flex items-center ${
          tab !== "" && activeClass === tab ? "bg-primary rounded-xl" : ""
        }`}
        onClick={() => setActiveClass(tab)}
      >
        <div className='flex items-center justify-center rounded-lg min-w-[30px] min-h-[30px]'>
          {tab !== "" && activeClass === tab ? activeIcon : icon}
        </div>
        <span
          className={`capitalize text-sm md:text-base ${
            tab !== "" && activeClass === tab
              ? "text-secondary font-semibold"
              : "text-light"
          }`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
};

export default SideNav;
