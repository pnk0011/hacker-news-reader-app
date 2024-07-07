import "./style.css";

export default function Article(props) {
  return (
    <div className="articleWrapper">
      <div className="textNumber">
        <span>{props.index + 1}</span>
      </div>
      <div className="textAndTimeWrapper">
        <p className="article">{props.story?.title}</p>
        <p className="articleAuthor">
          {props.story?.timeAgo} <span>by {props.story?.by}</span>
        </p>
      </div>
    </div>
  );
}
