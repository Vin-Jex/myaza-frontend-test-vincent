"use client";
import React from "react";
import Button from "../ui/Button";
import ATMCard from "../cards/ATMCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const MyCard: React.FC = () => {
  return (
    <div className='w-full mx-auto'>
      {/* Header */}
      <h2 className='text-xl font-semibold text-light mb-4'>My Card</h2>

      {/* Card Balance */}
      <div className='mb-4'>
        <p className='text-sm text-primary-text'>Card Balance</p>
        <p className='text-xl font-bold text-light'>$15,595.015</p>
      </div>

      {/* Card Details */}
      <div className='mb-5'>
        <Swiper
          slidesPerView={1} // Show 1 card at a time
          spaceBetween={16} // Space between cards
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Use a custom container for pagination
            bulletClass: "custom-bullet", // Custom class for pagination bullets
            bulletActiveClass: "custom-bullet-active", // Custom class for active bullet
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <ATMCard
              cardType='master'
              cardNumber='5282 3456 7890 1289'
              balance='$5,750.20'
              date='09/25'
              label='Current Balance'
            />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <ATMCard
              cardType='visa'
              cardNumber='1234 5678 9012 3456'
              balance='$10,000.00'
              date='12/27'
              label='Card Balance'
            />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <ATMCard
              cardType='master'
              cardNumber='9876 5432 1098 7654'
              balance='$2,500.00'
              date='06/24'
              label='Available Balance'
            />
          </SwiperSlide>
        </Swiper>

        {/* Custom Pagination Container */}
        <div className='custom-pagination mt-4 flex justify-center'></div>
      </div>

      {/* Actions */}
      <div className='flex justify-between space-x-7'>
        <Button size='xs' variant='blue' width='full'>
          Manage Cards
        </Button>
        <Button size='xs' variant='outline' width='full'>
          Transfer
        </Button>
      </div>
    </div>
  );
};

export default MyCard;
