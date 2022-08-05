import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
export const Comments = (props) => {
  return (
    <div className="media-block d-flex">
      <button className="media-left" href="#">
        <Avatar alt="Remy Sharp" />
      </button>
      <div className="media-body ms-3">
        <div className="mar-btm d-flex">
          <a
            href="#"
            className="btn-link text-semibold media-heading box-inline"
          >
            {props.userName}
          </a>
          <p style={{ marginLeft: "20px" }} className="text-muted text-sm">
            {" 11 min ago"}
          </p>
        </div>
        <p style={{ color: "white" }}>{props.commentContent}</p>
        <div className="pad-ver">
          <div className="btn-group">
            <a className="btn btn-sm btn-default btn-hover-success" href="#">
              <i style={{ color: "black" }} className="fa fa-thumbs-up"></i>
            </a>
            <a
              style={{ color: "black" }}
              className="btn btn-sm btn-default btn-hover-danger"
              href="#"
            >
              <i style={{ color: "black" }} className="fa fa-thumbs-down"></i>
            </a>
          </div>
          <a
            type={"button"}
            style={{ color: "black" }}
            className="btn btn-sm btn-default btn-hover-primary"
            href="#"
          >
            Reply
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
};

Comments.propTypes = {
  book_id: PropTypes.number,
  userName: PropTypes.string,
  commentContent: PropTypes.string,
  url: PropTypes.string,
};
