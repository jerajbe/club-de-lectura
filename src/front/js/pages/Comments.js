import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import PropTypes from "prop-types";

export const Comments = (props) => {
  return (
    <div className="media-block d-flex mt-4 bg-dark bordertext">
      <button className="media-left BtnUserComment" href="#">
        <Avatar alt="Remy Sharp" id="UserLink" />
      </button>
      <div className="media-body ms-3 bg-dark">
        <div className="mar-btm d-flex">
          <a
            href="#"
            className="btn-link text-semibold media-heading box-inline text-decoration-none"
          >
            {props.userName}
          </a>
          <p style={{ marginLeft: "20px" }} className="text-muted text-sm">
            {"12/08/22"}
          </p>
        </div>
        <p style={{ color: "white" }}>{props.commentContent}</p>
        <div className="pad-ver">
          <div className="btn-group">
            <a className="btn btn-sm btn-default btn-hover-success" href="#">
              <i style={{ color: "white" }} className="fa fa-thumbs-up"></i>
            </a>
            <a
              style={{ color: "white" }}
              className="btn btn-sm btn-default btn-hover-danger"
              href="#"
            >
              <i style={{ color: "white" }} className="fa fa-thumbs-down"></i>
            </a>
          </div>
          <a
            type={"button"}
            style={{ color: "white" }}
            className="btn btn-sm btn-default btn-hover-primary text-decoration-none"
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
