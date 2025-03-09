import React from "react";
import Image from "next/image";

interface BalanceCardProps {
  title: string;
  image: string;
  amount: number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ title, amount, image }) => {
  return (
    <div className='bg-secondary text-white px-3 py-2 rounded-xl flex items-center justify-between max-w-64 w-full border border-[#8477FF]'>
      <div className='flex items-start gap-2 sm:gap-3'>
        <div className='px-1 py-0.5 rounded-full w-8 h-6 sm:w-10 sm:h-[1.875rem] overflow-hidden flex items-center justify-center bg-white mt-1'>
          <Image
            src={image || "/images/ngn.svg"}
            alt={title}
            width={32}
            height={32}
            className='w-full h-full rounded-full object-cover'
          />
        </div>
        <div className='flex flex-col space-y-0.5 sm:space-y-1 h-full'>
          <p className='text-sm sm:text-lg font-semibold text-white'>{title}</p>
          <p className='text-xs sm:text-sm text-primary-text'>
            Balance: {amount.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
