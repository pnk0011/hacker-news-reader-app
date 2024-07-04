import { BASE_URL } from "../../contants/contants";
import { fetchLatestNewsList, fetchIndividualArticle } from "../hackerNewsApi";
import axios from "axios";

jest.mock("axios");

jest.mock("../../utils/utils");

describe("News Service Functions", () => {
  describe("fetchLatestNewsList", () => {
    it("should fetch the list of top stories", async () => {
      const mockStoryIds = [1, 2, 3];
      axios.get.mockResolvedValue({ data: mockStoryIds });

      const storyIds = await fetchLatestNewsList();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/topstories.json`);
      expect(storyIds).toEqual(mockStoryIds);
    });
  });

  describe("fetchIndividualArticle", () => {
    let setStories;
    let setIsLoading;

    beforeEach(() => {
      setStories = jest.fn();
      setIsLoading = jest.fn();
    });

    it("should fetch individual articles and update the state", async () => {
      const mockStoriesIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      const mockResponse = { data: { id: 1, time: 1000 } };
      axios.get.mockResolvedValue(mockResponse);

      await fetchIndividualArticle(mockStoriesIds, setStories, setIsLoading, 0);

      expect(setIsLoading).toHaveBeenCalledWith(true);
      expect(setIsLoading).toHaveBeenCalledWith(false);
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/item/1.json`);
      expect(setStories).toHaveBeenCalledWith(expect.any(Function));
    });

    it("should stop fetching if page exceeds story ids length", async () => {
      const mockStoriesIds = [1, 2];
      axios.get.mockResolvedValue({ data: { id: 1, time: 1000 } });

      await fetchIndividualArticle(mockStoriesIds, setStories, setIsLoading, 1);

      expect(setIsLoading).not.toHaveBeenCalled();
      expect(axios.get).not.toHaveBeenCalled();
      expect(setStories).not.toHaveBeenCalled();
    });
  });
});
