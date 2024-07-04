import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Article from ".";

describe("Article Component", () => {
  test("renders the article with provided props", () => {
    const props = {
      index: 0,
      story: {
        title: "Test Title",
        timeAgo: "2 hours ago",
        by: "John Doe",
      },
    };

    render(<Article {...props} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("2 hours ago")).toBeInTheDocument();
    expect(screen.getByText("by John Doe")).toBeInTheDocument();
  });

  test("handles missing story prop", () => {
    const props = {
      index: 1,
    };

    render(<Article {...props} />);

    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.queryByText("Sample Title")).not.toBeInTheDocument();
    expect(screen.queryByText("2 hours ago")).not.toBeInTheDocument();
    expect(screen.queryByText("by John Doe")).not.toBeInTheDocument();
  });

  test("handles partially missing story prop", () => {
    const props = {
      index: 2,
      story: {
        title: "Incomplete Story",
      },
    };

    render(<Article {...props} />);

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("Incomplete Story")).toBeInTheDocument();
    expect(screen.queryByText(/hours ago/)).not.toBeInTheDocument();
  });
});
