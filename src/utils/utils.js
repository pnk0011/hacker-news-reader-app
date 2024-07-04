// helper method to convert time in miliseconds to seconds ,minutes , hours , days ago time
export function timeAgo(unixTimestamp) {
  const now = Math.floor(Date.now() / 1000); // Current time in seconds
  const secondsPast = now - unixTimestamp;

  if (secondsPast < 60) {
    return `${secondsPast} seconds ago`;
  } else if (secondsPast < 3600) {
    return `${Math.floor(secondsPast / 60)} minutes ago`;
  } else if (secondsPast < 86400) {
    return `${Math.floor(secondsPast / 3600)} hours ago`;
  } else {
    return `${Math.floor(secondsPast / 86400)} days ago`;
  }
}

export const updateArticleList = (prevStories, response) => {
  let fetchecArticles = [...prevStories, response.data];
  fetchecArticles = fetchecArticles.sort((a, b) => b?.time - a?.time); // sorting articles in descending order from newest to oldest.
  fetchecArticles = fetchecArticles.map((item) => {
    let articleCreatedTime = timeAgo(item?.time); // timeAgo function will calculate the time when article was created.
    item.timeAgo = articleCreatedTime;
    return item;
  });
  return fetchecArticles;
};
