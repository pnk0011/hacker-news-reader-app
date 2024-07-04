import { BASE_URL } from "../../config/config";
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
    it("should fetch individual articles and update the state", async () => {
      const mockResponse = { data: { id: 1, time: 1000 } };
      axios.get.mockResolvedValue(mockResponse);

      await fetchIndividualArticle(1);

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/item/1.json`);
    });

    it("should stop fetching if page exceeds story ids length", async () => {
      axios.get.mockResolvedValue({ data: { id: 1, time: 1000 } });

      await fetchIndividualArticle(3);

      expect(axios.get).toHaveBeenCalled();
    });
  });
});
