import React from "react";
import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
export const Comments = () => {
  return (
    <div className="media-block d-flex">
      <a className="media-left" href="#">
        <Avatar alt="Remy Sharp" />
      </a>
      <div className="media-body ms-3">
        <div className="mar-btm d-flex">
          <a
            href="#"
            className="btn-link text-semibold media-heading box-inline"
          >
            Lisa D.
          </a>
          <p style={{ marginLeft: "20px" }} className="text-muted text-sm">
            {" 11 min ago"}
          </p>
        </div>
        <p style={{ color: "white" }}>
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
          ut aliquip ex ea commodo consequat.
        </p>
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
  name: PropTypes.string,
  cover: PropTypes.string,
  url: PropTypes.string,
  authors: PropTypes.array,
  rating: PropTypes.string,
  created_editions: PropTypes.string,
  year: PropTypes.string,
};
