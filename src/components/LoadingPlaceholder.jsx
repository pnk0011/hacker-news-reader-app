export default function LoadingPlaceholder({ stories }) {
  return (
    <div className="articleWrapper" data-testid="article-wrapper">
      <div className="textNumber">
        <p>{stories?.length + 1}</p>
      </div>
      <div className="textAndTimeWrapper">
        <p className="articleLoading" data-testid="article-loading"></p>
        <p
          className="articleAuthorLoading"
          data-testid="article-author-loading"
        ></p>
      </div>
    </div>
  );
}
