import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./component/CommentDetail";
import ApprovalCard from "./component/ApprovalCard";

const App = () => {
  function getTime() {
    return new Date().toLocaleTimeString();
  }

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatarImg={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={getTime()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatarImg={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={getTime()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatarImg={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={getTime()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
