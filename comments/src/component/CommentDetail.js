import React from "react";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatarImg} />
      </a>
      <div className="content">
        <a href="/" className="Author">
          {props.author}
        </a>
      </div>
      <div className="metadata">
        <span className="date">Today at {props.timeAgo}</span>
      </div>
      <div className="text">{props.comment}</div>
    </div>
  );
};

export default CommentDetail;
