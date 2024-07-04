import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingPlaceholder from ".";

describe("LoadingPlaceholder component", () => {
  it("renders correctly with stories prop", () => {
    const mockStories = [{}, {}, {}];
    render(<LoadingPlaceholder stories={mockStories} />);

    const textNumber = screen.getByText(mockStories.length + 1);
    expect(textNumber).toBeInTheDocument();

    const articleLoading = screen.getByTestId("article-loading");
    expect(articleLoading).toBeInTheDocument();

    const articleAuthorLoading = screen.getByTestId("article-author-loading");
    expect(articleAuthorLoading).toBeInTheDocument();
  });

  it("renders correctly with no stories prop", () => {
    render(<LoadingPlaceholder stories={[]} />);
    const textNumber = screen.getByText(1);
    expect(textNumber).toBeInTheDocument();
    const articleLoading = screen.getByTestId("article-loading");
    expect(articleLoading).toBeInTheDocument();

    const articleAuthorLoading = screen.getByTestId("article-author-loading");
    expect(articleAuthorLoading).toBeInTheDocument();
  });
});
