/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BalanceCard from "../BalanceCard";
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
