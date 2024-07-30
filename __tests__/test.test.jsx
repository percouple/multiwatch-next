import { render, screen } from "@testing-library/react"

const mockRouter = {
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    asPath: '',
};

it("Shows true", () => {
    expect(true).toBe(true);
})