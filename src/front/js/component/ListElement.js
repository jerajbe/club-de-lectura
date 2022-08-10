import React from "react";

export const ListElement = (props) => {
  return (
    <div className="container d-flex justify-content-between">
      <div className="d-flex justify-content-center align-items-center">
        <h5>{props.book_name}</h5>
      </div>
      <div>
        <img
          className="d-flex justify-content-center align-items-center"
          src={props.book_cover}
          style={{ width: "45px", height: "60px" }}
        />
      </div>
    </div>
  );
};
