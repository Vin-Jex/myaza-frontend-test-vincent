import { ReactNode } from "react";
import Testimonials from "./Testimonials";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='flex w-full h-full relative'>
      {/* Left Section - Changes based on the auth page */}
      <main className='bg-secondary fixed h-screen lg:w-[50vw] w-screen left-0 flex items-center justify-center overflow-hidden'>
        {children}
      </main>

      {/* Right Section - Shared across all auth pages */}
      <aside className='lg:w-[50vw] overflow-hidden h-full fixed right-0 hidden lg:block'>
        <Testimonials />
      </aside>
    </div>
  );
};

export default AuthLayout;
