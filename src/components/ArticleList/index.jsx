// components/StoryList.js
import React, { useEffect, useState, useRef, useCallback } from "react";
import Article from "../Article";
import LoadingPlaceholder from "../LoadingPlaceholder";
import { updateArticleList } from "../../utils/utils";
import {
  fetchLatestNewsList,
  fetchIndividualArticle,
} from "../../apis/hackerNewsApi";
import "./style.css";

const ArticleList = () => {
  const [stories, setStories] = useState([]);
  const [storiesIds, setStoriesIds] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isInitialMount = useRef(true);
  const articleFetched = useRef(true);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    console.log("called");
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchArticleList = useCallback(async () => {
    for (let i = page * 10; i < page * 10 + 10; i++) {
      if (i >= storiesIds.length) {
        return;
      }
      try {
        setIsLoading(true);
        let article = await fetchIndividualArticle(storiesIds[i]);
        setStories((prevStories) => updateArticleList(prevStories, article));
        setIsLoading(false);
      } catch (error) {
        console.log("Something went wrong , while fetching data !!!");
      }
    }
  }, [storiesIds, page]);

  useEffect(() => {
    if (storiesIds.length && articleFetched.current) {
      fetchArticleList();
      //fetchIndividualArticle(storiesIds, setStories, setIsLoading, page);
      articleFetched.current = false;
    } else {
      articleFetched.current = true;
    }
  }, [storiesIds, page, fetchArticleList]);

  useEffect(() => {
    const loadArticleList = async () => {
      const articlesId = await fetchLatestNewsList();
      setStoriesIds(articlesId);
    };
    if (isInitialMount.current) {
      loadArticleList();
      isInitialMount.current = false;
    } else {
      isInitialMount.current = true;
    }
  }, [storiesIds.length]);

  return (
    <div className="storyWrapper">
      {stories.map((story, index) => (
        <Article story={story} index={index} key={story?.id} />
      ))}
      {isLoading ? <LoadingPlaceholder stories={stories} /> : null}
    </div>
  );
};

export default ArticleList;
