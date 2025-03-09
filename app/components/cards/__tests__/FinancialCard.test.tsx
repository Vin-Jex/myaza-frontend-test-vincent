/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FinancialCard from "../FinancialCard";
import Image from "next/image";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: jest.fn(() => "/"),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: any) => (
    <Image src={src} alt={alt || "mocked image"} />
  ),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children }: any) => <a href={href}>{children}</a>,
}));

describe("FinancialCard", () => {
  it("renders the title and amount correctly", () => {
    render(
      <FinancialCard
        title='Total Sales'
        amount={1000}
        percentage={10}
        isIncome={true}
      />
    );

    expect(screen.getByText("Total Sales")).toBeInTheDocument();
    expect(screen.getByText(/\$\s*1,000/)).toBeInTheDocument();
  });

  it("displays the correct percentage and icon for income", () => {
    render(
      <FinancialCard
        title='Total Sales'
        amount={1000}
        percentage={10}
        isIncome={true}
      />
    );

    expect(screen.getByText("+10%")).toBeInTheDocument();
    expect(screen.getByTestId("income-icon")).toBeInTheDocument();
  });
});
