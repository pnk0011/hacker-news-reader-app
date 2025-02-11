import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header component", () => {
  it("renders header with correct title and class", () => {
    render(<Header />);

    const titleElement = screen.getByText("Hacker News");
    expect(titleElement).toBeInTheDocument();

    const titleTextElement = screen.getByText("Hacker News");
    expect(titleTextElement).toHaveClass("titleText");
  });
});
