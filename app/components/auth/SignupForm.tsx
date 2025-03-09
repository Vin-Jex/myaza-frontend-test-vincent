"use client";

import { useState } from "react";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

const SignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password.length < 5) {
      toast.error("Password must be at least 5 characters long.");
    }

    setLoading(true);
    setTimeout(() => {
      toast.success("Account created successfully, proceed to login...");
      setLoading(false);
      router.push("/auth/login");
    }, 3000);
  };

  return (
    <div className='flex flex-col items-center justify-center w-full max-w-full space-y-8 px-4'>
      <div className='flex flex-col items-center justify-center space-y-2.5 text-center'>
        <Image
          src='/logo_full.svg'
          alt='logo'
          width={300}
          height={300}
          className='w-28 cursor-pointer'
          onClick={() => {
            router.push("/");
          }}
        />
        <h4 className='text-xl md:text-2xl text-white font-semibold'>
          Welcome to Uifry 🚀
        </h4>
        <p className='text-sm text-light'>Signup to start enjoying Uifry</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col space-y-4 w-full sm:w-[70%] lg:w-[60%]'
      >
        <InputField
          label='Full Name'
          name='name'
          type='text'
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          label='Email'
          type='email'
          name='email'
          placeholder='E.g Aliriaz@Uifry.com'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          label='Password'
          type='password'
          name='password'
          placeholder='Enter your password'
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Button
          variant='blue'
          type='submit'
          width='full'
          isLoading={loading}
          disabled={loading || formData.password.length < 5}
        >
          Sign Up
        </Button>

        <div className='flex items-center justify-center text-sm font-karla gap-x-1 !-mt-1'>
          <span className='text-subtext'>Already a member on uifry?</span>
          <Link href='/auth/login' className='text-primary'>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
