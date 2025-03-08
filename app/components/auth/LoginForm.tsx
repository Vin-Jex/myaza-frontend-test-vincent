"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InputField from "../ui/InputField";
import { useState } from "react";
import Button from "../ui/Button";
import Link from "next/link";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please enter your login details.");
    }

    if (formData.password.length < 5) {
      toast.error("Password must be at least 5 characters long.");
    }

    setLoading(true);
    setTimeout(() => {
      toast.success("Welcome back! We're excited to have you.");
      setLoading(false);
      Cookies.set("token", "thisisyoursimutedtokenenjoy:);");
      router.push("/dashboard/overview");
    }, 3000);
  };

  return (
    <div className='flex flex-col items-center justify-center w-full max-w-full space-y-8'>
      <div className='flex flex-col items-center justify-center space-y-2.5'>
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
        <h4 className='text-2xl text-white font-semibold'>
          Welcome back, Ali Riaz 🙇🏾‍♀️
        </h4>
        <p className='text-sm text-light'>Login to access your Uifry account</p>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col space-y-4 w-[50%]'>
        <InputField
          label='Email Address'
          name='email'
          type='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <InputField
          label='Password'
          name='password'
          type='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          required
        />

        <span className='text-subtext text-sm font-medium font-karla cursor-pointer w-fit ml-auto !-mt-2 whitespace-nowrap'>
          Forgot Password
        </span>

        <Button
          width='full'
          isLoading={loading}
          disabled={loading || formData.password.length < 5}
        >
          Login
        </Button>

        <div className='flex items-center justify-center text-sm font-karla gap-x-1 !-mt-1'>
          <span className='text-subtext'>Not on uifry?</span>
          <Link href='/auth/signup' className='text-primary'>
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
