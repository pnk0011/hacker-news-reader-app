import "./style.css";

export default function Article(props) {
  return (
    <div className="articleWrapper">
      <div className="textNumber">
        <p>{props.index + 1}</p>
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
