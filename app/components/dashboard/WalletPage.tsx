"use client";
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import Table from "../table/TableComponent";
import { Add } from "@mui/icons-material";
import Button from "../ui/Button";
import { CgMoreO } from "react-icons/cg";
import BalanceCard from "../cards/BalanceCard";
import { possible_wallets, transactions_wallet } from "@/app/data/data";

const WalletPage = () => {
  const [wallets, setWallets] = useState([
    { title: "NGN Wallet", amount: 34543553, image: "/images/ngn.svg" },
    { title: "USD Wallet", amount: 7427668864, image: "/images/usd.svg" },
  ]);

  const handleAddWallet = () => {
    // Randomly select a wallet type
    const randomWallet =
      possible_wallets[Math.floor(Math.random() * possible_wallets.length)];

    // Generate a random amount between 1000 and 1000000
    const randomAmount = Math.floor(Math.random() * 1000000) + 1000;

    const newWallet = {
      title: randomWallet.title,
      amount: randomAmount,
      image: randomWallet.image,
    };

    setWallets([...wallets, newWallet]);
  };

  return (
    <DashboardLayout
      title={"My wallets"}
      description='Manage all your wallets from here'
    >
      <div className='flex flex-col items-center justify-center space-y-6 w-full'>
        {/* Consolidated Balance and Add Wallet Section */}
        <div className='px-4 py-6 bg-secondary rounded-2xl w-full'>
          <div className='flex fflex-row items-center justify-between space-y-4 md:space-y-0'>
            <div className='w-full flex flex-col justify-center space-y-1 sm:space-y-2'>
              <span className='text-xs sm:text-sm text-primary-text cursor-pointer'>
                Your consolidated balance
              </span>
              <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white'>
                $34,780,267.08
              </h1>
            </div>

            <div className='flex items-center space-x-2 sm:space-x-3 md:space-x-4'>
              <Button
                width='fit'
                className='!flex items-center justify-center !whitespace-nowrap px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm'
                onClick={handleAddWallet}
              >
                <Add className='mr-1 sm:mr-1.5 !text-base sm:!text-lg' />
                <span>Add New Wallet</span>
              </Button>
              <CgMoreO className='!text-lg sm:!text-xl text-primary' />
            </div>
          </div>

          {/* Wallet Cards */}
          <div className='flex flex-wrap items-center w-full gap-4 mt-5'>
            {wallets.map((wallet, index) => (
              <BalanceCard
                key={index}
                title={wallet.title}
                amount={wallet.amount}
                image={wallet.image}
              />
            ))}
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className='px-4 pt-6 bg-secondary rounded-2xl w-full'>
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold'>Recent transactions</h1>
            <span className='text-sm text-primary-text cursor-pointer'>
              See All
            </span>
          </div>

          <div className='mt-4 w-full overflow-x-auto'>
            <Table
              columns={[
                { Header: "Name", accessor: "name" },
                { Header: "Date", accessor: "date" },
                { Header: "Description", accessor: "description" },
                { Header: "Amount", accessor: "amount" },
                { Header: "Status", accessor: "status" },
              ]}
              data={transactions_wallet}
              profileImageAccessor='profileImage'
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WalletPage;
