import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./page"; // Adjust the import path as needed
import { RouterContext } from "next/dist/shared/lib/router-context"; // Adjust import for your Next.js version

const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  // prefetch: jest.fn(),
  asPath: "",
};

describe("Login Component", () => {
  const mockParams = { userId: "12345" };

  test("renders Login component correctly", () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Login params={mockParams} />
      </RouterContext.Provider>
    );

    // // Check if the component renders the login header
    // expect(screen.getByText('Log in')).toBeInTheDocument();

    // screen.debug;

    // // Check if the component renders the 'create an account' link
    // const createAccountLink = screen.getByText('create an account');
    // expect(createAccountLink).toBeInTheDocument();
    // expect(createAccountLink).toHaveAttribute('href', `/clocks/${mockParams.userId}/create-account`);

    // // Check if the InputForm component is rendered
    // expect(screen.getByTestId('input-form')).toBeInTheDocument();
  });
});
