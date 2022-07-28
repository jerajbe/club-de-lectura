import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailedBook = (props) => {
  return (
    <div className="modal-body" id="ModalBook">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">.col-md-4</div>
          <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
        </div>
        <div className="row">
          <div className="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
          <div className="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
        </div>
        <div className="row">
          <div className="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
        </div>
        <div className="row">
          <div className="col-sm-9">
            Level 1: .col-sm-9
            <div className="row">
              <div className="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
              <div className="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailedBook.propTypes = {
  book_id: PropTypes.number,
  name: PropTypes.string,
  cover: PropTypes.string,
  url: PropTypes.string,
  authors: PropTypes.array,
  rating: PropTypes.number,
  created_editions: PropTypes.number,
  year: PropTypes.number,
};
