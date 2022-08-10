import React from "react";

export const ListElement = (props) => {
  return (
    <div className="container d-flex">
      <div>
        <h4>{props.book_name}</h4>
      </div>
      <div>
        <img src={props.book_cover} />
      </div>
    </div>
  );
};
