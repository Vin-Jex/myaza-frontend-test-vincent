"use client";
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import AnalyticsChart from "./AnalyticsChart";
import Table from "../table/TableComponent";
import FinancialCard from "../cards/FinancialCard";
import CustomSelect from "../ui/CustomSelect";
import MyCard from "./MyCard";
import ActivityChart from "./ActivityChart";

const OverviewPage = () => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const years = ["2019", "2020", "2021", "2022", "2023"];

  return (
    <DashboardLayout
      title={"Welcome Back, Ali 👋"}
      description='Here’s what’s happening with your store today.'
    >
      <div className='flex justify-between space-x-6 w-full'>
        <div className='flex flex-col space-y-6 w-full max-w-[60%]'>
          <div className='flex items-center justify-center w-full space-x-4'>
            <FinancialCard
              title='Total Sales'
              amount={1000}
              percentage={10}
              isIncome={true}
            />
            <FinancialCard
              title='Total Expenses'
              amount={500}
              percentage={5}
              isIncome={false}
            />
          </div>

          <div className='px-4 pt-6 bg-secondary rounded-2xl'>
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-bold'>Analytics</h1>
              {/* Use the CustomSelect component */}
              <CustomSelect
                options={years}
                selectedValue={selectedYear}
                onChange={(value) => setSelectedYear(value)}
              />
            </div>

            <div className='mt-4'>
              <AnalyticsChart />
            </div>
          </div>

          <div className='px-4 pt-6 bg-secondary rounded-2xl'>
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-bold'>Recent transactions</h1>
              <span className='text-sm text-primary-text cursor-pointer'>
                See All
              </span>
            </div>

            <div className='mt-4'>
              <Table
                columns={[
                  { Header: "Name", accessor: "name" },
                  { Header: "Date", accessor: "date" },
                  { Header: "Amount", accessor: "amount" },
                  { Header: "Status", accessor: "status" },
                ]}
                data={[
                  {
                    name: "John Doe",
                    date: "2023-10-01",
                    amount: "$500",
                    status: "Completed",
                    profileImage: "/images/profile.svg",
                  },
                  {
                    name: "Jane Doe",
                    date: "2023-10-02",
                    amount: "$300",
                    status: "Pending",
                  },
                  {
                    name: "Alice Smith",
                    date: "2023-10-03",
                    amount: "$200",
                    status: "Failed",
                    profileImage: "/images/profile.svg",
                  },
                  {
                    name: "Bob Johnson",
                    date: "2023-10-04",
                    amount: "$400",
                    status: "Completed",
                  },
                  {
                    name: "Bob Johnson",
                    date: "2023-10-04",
                    amount: "$400",
                    status: "Completed",
                  },
                  {
                    name: "Bob Johnson",
                    date: "2023-10-04",
                    amount: "$400",
                    status: "Completed",
                  },
                ]}
                profileImageAccessor='profileImage'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col space-y-6 w-full max-w-[40%]'>
          <div className='px-4 py-6 bg-secondary rounded-2xl'>
            <MyCard />
          </div>

          <div className='px-4 pt-6 bg-secondary rounded-2xl'>
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-bold'>Activity</h1>
              {/* Use the CustomSelect component */}
              <CustomSelect
                options={years}
                selectedValue={selectedYear}
                onChange={(value) => setSelectedYear(value)}
              />
            </div>

            <div className='mt-4'>
              <ActivityChart />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OverviewPage;
