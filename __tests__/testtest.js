import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Theme from "./app/theme/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Theme />);

    const heading = screen.getByText("Select a theme");

    expect(heading).toBeInTheDocument();
  });
});
