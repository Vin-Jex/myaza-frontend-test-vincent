import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";
import * as mockNextNavigation from "../../../../__mocks__/next/navigation";

jest.mock("next/navigation", () => mockNextNavigation);

describe("LoginForm", () => {
  it("allows the user to enter their email and password", async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText("Email Address");
    const passwordInput = screen.getByLabelText("Password");

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });
});
