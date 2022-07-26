import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleBook = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <img src={props.cover} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{props.book_id}</p>
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.authors}</p>
            <p className="card-text">{props.year}</p>
            <p className="card-text">{props.url}</p>
            <p className="card-text">{props.rating}</p>
            <p className="card-text">{props.created_editions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleBook.PropTypes = {
  book_id: PropTypes.number,
  name: PropTypes.string,
  cover: PropTypes.string,
  url: PropTypes.string,
  authors: PropTypes.array,
  rating: PropTypes.number,
  created_editions: PropTypes.number,
  year: PropTypes.number,
};
