import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BalanceCard from "../BalanceCard";
import * as mockNextNavigation from "../../../../__mocks__/next/navigation";

jest.mock("next/navigation", () => mockNextNavigation);

describe("BalanceCard", () => {
  it("renders the title, amount, and image correctly", () => {
    render(
      <BalanceCard
        title='NGN Wallet'
        amount={34543553}
        image='/images/ngn.svg'
      />
    );

    expect(screen.getByText("NGN Wallet")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("34,543,553"))
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "/images/ngn.svg");
  });
});
