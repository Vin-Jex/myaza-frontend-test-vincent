import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div className='flex flex-col py-8'>
      <div className='mx-auto space-y-4 px-8'>
        <div className='flex items-center space-x-1 text-yellow-400 text-2xl'>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <span className='flex items-start text-2xl font-semibold'>
          <span className='w-full'>
            <RiDoubleQuotesL className='inline-flex !mr-0.5 -mt-4 text-base ' />
            I’ve been using Uifry for over a year, and it’s helped simplify all
            my payments.
            <RiDoubleQuotesR className='inline-flex !ml-0.5 -mt-4 text-base' />
          </span>
        </span>

        <div className='flex flex-col justify-center'>
          <p className='text-primary font-medium text-base'>Ali Riaz</p>
          <p className='text-primary font-medium text-xs'>Singapore</p>
        </div>
      </div>

      <div className='flex flex-col justify-center'>
        <div className='flex justify-center space-x-1.5 mt-4'>
          <div className='w-6 h-2.5 bg-primary rounded-full'></div>
          {[...Array(4)].map((_, i) => (
            <div className='w-2.5 h-2.5 bg-secondary rounded-full' key={i} />
          ))}
        </div>

        <div className='w-full h-full relative'>
          <Image
            src='/images/dashboard_snapshot.svg'
            alt='dashboard_snapshot'
            width={500}
            height={500}
            className='h-full w-[90%] object-cover ml-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
