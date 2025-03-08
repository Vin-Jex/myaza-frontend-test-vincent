"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const VerifyAccountForm = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Verifying OTP:", ${otp}`);
  };

  return (
    <div className='w-full max-w-md'>
      <h2 className='text-2xl font-bold mb-4'>Verify Your Account</h2>
      <p className='text-sm text-gray-600 mb-4'>
        Enter the verification code sent to your email.
      </p>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <Input
          type='text'
          placeholder='Enter OTP Code'
          value={otp}
          onChange={handleChange}
          maxLength={6}
          required
        />
        <button className='w-full bg-blue-500 text-white p-2 rounded'>
          Verify
        </button>
      </form>
      <p className='mt-4 text-sm text-center'>
        Didn’t receive a code?{" "}
        <Button onClick={() => alert("Resend OTP")}>Resend OTP</Button>
      </p>
    </div>
  );
};

export default VerifyAccountForm;
