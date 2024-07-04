// ArticleList.test.js
import React from "react";
import { render, screen, act } from "@testing-library/react";
import ArticleList from "../ArticleList/index";
import {
  fetchLatestNewsList,
  fetchIndividualArticle,
} from "../../apis/hackerNewsApi";

jest.mock("../../apis/hackerNewsApi");

describe("ArticleList component", () => {
  beforeEach(() => {
    fetchLatestNewsList.mockResolvedValue([1, 2, 3]);
    fetchIndividualArticle.mockResolvedValue([{ id: 1, title: "Test Title" }]);
  });

  // it("renders loading state initially", async () => {
  //   render(<ArticleList />);

  //   expect(fetchLatestNewsList).toHaveBeenCalledTimes(1);
  //   expect(fetchIndividualArticle).not.toHaveBeenCalled();
  // });

  it("renders articles after data fetching", async () => {
    render(<ArticleList />);

    expect(fetchLatestNewsList).toHaveBeenCalledTimes(1);
    expect(fetchIndividualArticle).toHaveBeenCalledTimes(0);
  });

  // it("handles scroll event", async () => {
  //   render(<ArticleList />);

  //   await act(async () => {
  //     window.dispatchEvent(new Event("scroll"));
  //   });

  //   expect(fetchIndividualArticle).toHaveBeenCalledTimes(1);
  // });
});
