import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const CarouselHome = (props) => {
  return <img className="d-block imageC" src={props.cover} alt="" />;
};

CarouselHome.propTypes = {
  book_id: PropTypes.string,
  name: PropTypes.string,
  cover: PropTypes.string,
  url: PropTypes.string,
  authors: PropTypes.array,
  rating: PropTypes.string,
  created_editions: PropTypes.number,
  year: PropTypes.number,
};
