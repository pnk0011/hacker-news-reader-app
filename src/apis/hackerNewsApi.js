import axios from "axios";
import { BASE_URL } from "../config/config";
import { updateArticleList } from "../utils/utils";

// to fetch list of all top stories
export const fetchLatestNewsList = async () => {
  try {
    const { data: storyIds } = await axios.get(`${BASE_URL}/topstories.json`);
    return storyIds;
  } catch (eroor) {
    console.log("Something went wrong , while fetching data !!!");
  }
};

// to fetch individual stories vy article id
export const fetchIndividualArticle = async (
  storiesIds,
  setStories,
  setIsLoading,
  page
) => {
  for (let i = page * 10; i < page * 10 + 10; i++) {
    if (i >= storiesIds.length) {
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${BASE_URL}/item/${storiesIds[i]}.json`
      );
      setStories((prevStories) => updateArticleList(prevStories, response));
      setIsLoading(false);
    } catch (error) {
      console.log("Something went wrong , while fetching data !!!");
    }
  }
};
