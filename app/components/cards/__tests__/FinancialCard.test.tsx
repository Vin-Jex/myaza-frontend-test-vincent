import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FinancialCard from "../FinancialCard";
import * as mockNextNavigation from "../../../../__mocks__/next/navigation";
jest.mock("next/navigation", () => mockNextNavigation);

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
