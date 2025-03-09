"use client";
import React, { ReactNode, useState } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const DashboardLayout = ({
  children,
  title,
  description,
}: DashboardLayoutProps) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <div className='relative w-full h-[100dvh] container overflow-auto mx-auto flex flex-row'>
      <aside
        className={`fixed lg:static top-0 h-screen bg-secondary lg:w-[16.5rem] overflow-auto z-100 
    transition-transform duration-300 ease-in-out transform
    ${
      isSidenavOpen
        ? "translate-x-0 left-0 w-[16.5rem]"
        : "-translate-x-[16.5rem]"
    }
    lg:translate-x-0 lg:block`}
      >
        <SideNav />
      </aside>

      <div className='flex-1 w-full h-full overflow-y-auto relative flex flex-col'>
        <div className='w-full flex-0 flex z-40 lg:z-20 sticky top-0 right-0 mb-2 px-4'>
          <nav className='w-full'>
            <TopNav
              toggleSidenav={toggleSidenav}
              isOpen={isSidenavOpen}
              title={title}
              description={description}
            />
          </nav>
        </div>
        <main className='w-full overflow-x-hidden px-4 flex-1 pb-4'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
