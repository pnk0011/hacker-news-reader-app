// components/StoryList.js
import React, { useEffect, useState, useRef } from "react";
import Article from "../Article";
import LoadingPlaceholder from "../LoadingPlaceholder";
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

  useEffect(() => {
    if (storiesIds.length && articleFetched.current) {
      fetchIndividualArticle(storiesIds, setStories, setIsLoading, page);
      articleFetched.current = false;
    } else {
      articleFetched.current = true;
    }
  }, [storiesIds, page]);

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
