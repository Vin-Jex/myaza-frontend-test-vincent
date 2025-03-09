"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset email sent to:", email);
  };

  return (
    <div className='w-full max-w-md'>
      <h2 className='text-2xl font-bold mb-4'>Forgot Password?</h2>
      <p className='text-sm text-gray-600 mb-4'>
        Enter your email, and we’ll send you a password reset link.
      </p>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col space-y-4 w-full sm:w-[70%] lg:w-[60%]'
      >
        <Input
          type='email'
          placeholder='E.g Aliriaz@Uifry.com'
          value={email}
          onChange={handleChange}
          required
        />
        <Button>Send Reset Link</Button>
      </form>
      <p className='mt-4 text-sm text-center'>
        Remember your password?{" "}
        <a href='/auth/login' className='text-blue-500'>
          Login
        </a>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
