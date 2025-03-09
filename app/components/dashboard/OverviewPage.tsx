"use client";
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import AnalyticsChart from "./AnalyticsChart";
import Table from "../table/TableComponent";
import FinancialCard from "../cards/FinancialCard";
import CustomSelect from "../ui/CustomSelect";
import MyCard from "./MyCard";
import ActivityChart from "./ActivityChart";
import Button from "../ui/Button";
import { table_columns_overview, transactions_overview } from "@/app/data/data";

const OverviewPage = () => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const years = ["2019", "2020", "2021", "2022", "2023"];

  const financialData = [
    { title: "Total Sales", amount: 1000, percentage: 10, isIncome: true },
    { title: "Total Expenses", amount: 500, percentage: 5, isIncome: false },
  ];

  return (
    <DashboardLayout
      title={"Welcome Back, Ali 👋"}
      description='Here’s what’s happening with your store today.'
    >
      <div className='flex flex-col lg:flex-row justify-between lg:space-x-6 space-y-6 lg:space-y-0 w-full'>
        {/* Left Column */}
        <div className='flex flex-col space-y-6 w-full lg:max-w-[60%]'>
          {/* Financial Cards */}
          <div className='flex flex-col md:flex-row items-center justify-center w-full space-y-4 md:space-y-0 md:space-x-4'>
            {financialData.map((data, index) => (
              <FinancialCard
                key={index}
                title={data.title}
                amount={data.amount}
                percentage={data.percentage}
                isIncome={data.isIncome}
              />
            ))}
          </div>

          {/* Analytics Section */}
          <div className='px-3 sm:px-4 pt-5 sm:pt-6 bg-secondary rounded-2xl'>
            <div className='flex flex-row items-center justify-between space-y-2 sm:space-y-0'>
              <h1 className='text-lg sm:text-xl font-bold'>Analytics</h1>
              <CustomSelect
                options={years}
                selectedValue={selectedYear}
                onChange={(value) => setSelectedYear(value)}
              />
            </div>
            <div className='mt-3 sm:mt-4'>
              <AnalyticsChart />
            </div>
          </div>

          {/* Recent Transactions Section */}
          <div className='px-3 sm:px-4 pt-5 sm:pt-6 bg-secondary rounded-2xl'>
            <div className='flex flex-row items-center justify-between space-y-2 sm:space-y-0'>
              <h1 className='text-lg sm:text-xl font-bold'>
                Recent transactions
              </h1>
              <span className='text-xs sm:text-sm text-primary-text cursor-pointer'>
                See All
              </span>
            </div>
            <div className='mt-3 sm:mt-4 overflow-x-auto'>
              <Table
                columns={table_columns_overview}
                data={transactions_overview}
                profileImageAccessor='profileImage'
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='flex flex-col space-y-6 w-full lg:max-w-[40%]'>
          {/* My Card Section */}
          <div className='px-3 sm:px-4 py-5 sm:py-6 bg-secondary rounded-2xl'>
            <MyCard />
          </div>

          {/* Activity Section */}
          <div className='px-3 sm:px-4 py-5 sm:py-6 bg-secondary rounded-2xl'>
            <div className='flex flex-row items-center justify-between space-y-2 sm:space-y-0'>
              <h1 className='text-lg sm:text-xl font-bold'>Activity</h1>
              <CustomSelect
                options={years}
                selectedValue={selectedYear}
                onChange={(value) => setSelectedYear(value)}
              />
            </div>
            <ActivityChart />
            <Button
              variant='outline'
              width='fit'
              className='!mx-auto mt-3 sm:mt-4'
            >
              See All Activities
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OverviewPage;
