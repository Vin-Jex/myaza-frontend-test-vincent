export const possible_wallets = [
  { title: "CAD Wallet", image: "/images/cad.svg" },
  { title: "GHC Wallet", image: "/images/ghc.svg" },
  { title: "GBP Wallet", image: "/images/gbp.svg" },
];

export const transactions_wallet = [
  {
    name: "John Doe",
    date: "2023-10-01",
    description: "Payment for order #123",
    amount: "$500",
    status: "Completed",
    profileImage: "/images/profile.svg",
  },
  {
    name: "Jane Doe",
    date: "2023-10-02",
    description: "Refund for order #456",
    amount: "$300",
    status: "Pending",
  },
  {
    name: "Alice Smith",
    date: "2023-10-03",
    description: "Virtual Card top-up",
    amount: "$200",
    status: "Failed",
    profileImage: "/images/profile.svg",
  },
  {
    name: "Bob Johnson",
    date: "2023-10-04",
    description: "Payment for order #789",
    amount: "$400",
    status: "Completed",
  },
  {
    name: "Bob Johnson",
    date: "2023-10-04",
    description: "Top up for order #789",
    amount: "$400",
    status: "Completed",
  },
  {
    name: "Bob Johnson",
    date: "2023-10-04",
    description: "Payment for order #789",
    amount: "$400",
    status: "Completed",
  },
];

export const transactions_overview = [
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
];

export const table_columns_overview = [
  { Header: "Name", accessor: "name" },
  { Header: "Date", accessor: "date" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Status", accessor: "status" },
];
