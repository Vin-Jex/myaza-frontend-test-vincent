import React from "react";

interface FinancialCardProps {
  title: string;
  amount: number;
  percentage: number;
  isIncome: boolean;
}

const FinancialCard: React.FC<FinancialCardProps> = ({
  title,
  amount,
  percentage,
  isIncome,
}) => {
  return (
    <div className='bg-secondary text-white p-3 sm:p-4 rounded-xl flex items-center justify-between w-full shadow-md'>
      <div className='flex items-center gap-2 sm:gap-3'>
        <div
          data-testid={isIncome ? "income-icon" : "expense-icon"}
          className={`p-1.5 sm:p-2 rounded-lg ${
            isIncome ? "bg-tertiary" : "bg-accent"
          }`}
        >
          {isIncome ? (
            <svg
              width='24'
              height='24'
              sm-width='30'
              sm-height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.5862 19.9579L20.0809 20.4556L20.5786 12.9608'
                stroke='#FAFAFA'
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10.2822 9.26315L19.9824 20.3433'
                stroke='#FAFAFA'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ) : (
            <svg
              width='26'
              height='26'
              sm-width='31'
              sm-height='31'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M25.2492 20.635L25.7505 13.1405L18.256 12.6392'
                stroke='#FAFAFA'
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M14.5539 22.9331L25.6387 13.2383'
                stroke='#FAFAFA'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          )}
        </div>
        <div className='flex flex-col space-y-0.5 sm:space-y-1'>
          <p className='text-xs sm:text-sm text-primary-text'>{title}</p>
          <p className='text-lg sm:text-2xl font-semibold'>
            ${amount.toLocaleString()}
          </p>
        </div>
      </div>
      <div
        className={`text-xs sm:text-sm px-1.5 py-0.5 rounded-lg mt-auto ${
          isIncome ? "bg-success/10 text-success" : "bg-error/10 text-error"
        }`}
      >
        {isIncome ? "+" : "-"}
        {percentage}%
      </div>
    </div>
  );
};

export default FinancialCard;
