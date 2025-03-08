"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center space-y-4'>
      <Image
        src='/logo_full.svg'
        alt='logo'
        width={300}
        height={300}
        className='w-28 cursor-pointer'
      />
      <h4 className='text-2xl text-white font-semibold'>Uifry Homepage</h4>
      <p className='text-sm text-light'>Welcome to the Uifry homepage.🚀</p>

      <p>Feel free to explore and enjoy our platform.</p>
      <Button
        width='fit'
        onClick={() => {
          router.push("/dashboard/overview");
        }}
      >
        Go to dashboard
      </Button>
    </div>
  );
}
