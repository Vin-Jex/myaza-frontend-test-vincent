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
        className={`left-0 top-0 h-screen bg-secondary lg:w-[16.5rem] overflow-auto z-30 transition-transform transform
    ${isSidenavOpen ? "translate-x-0" : "-translate-x-full"} 
    lg:translate-x-0 lg:block ${!isSidenavOpen ? "hidden lg:block" : ""}`}
      >
        <SideNav />
      </aside>
      <div className='flex-1 w-full h-full overflow-y-auto relative flex flex-col px-2'>
        <div className='w-full flex-0 flex z-40 lg:z-20 sticky top-0 right-0 mb-2'>
          <nav className={`w-full mr-[2rem] ml-2`}>
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
