import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const CarouselHome = (props) => {
  return (
    <>
      <img
        src={props.cover}
        className="d-flex align-self-center w-50"
        alt="..."
      />
      <div className="carousel-caption d-flex">
        <h5>{props.name}</h5>
      </div>
    </>
  );
};

CarouselHome.propTypes = {
  book_id: PropTypes.number,
  name: PropTypes.string,
  cover: PropTypes.string,
  url: PropTypes.string,
  authors: PropTypes.array,
  rating: PropTypes.number,
  created_editions: PropTypes.number,
  year: PropTypes.number,
};
