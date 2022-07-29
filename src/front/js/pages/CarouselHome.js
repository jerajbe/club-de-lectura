import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const CarouselHome = () => {
  const { store, actions } = useContext(Context);
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel carousel-dark slide d-flex justify-content-center w-75"
      data-bs-ride="false"
    >
      <div className="carousel-inner d-flex justify-content-center h-25 w-50">
        {store.bestsBooks &&
          store.bestsBooks.map((book, index) => {
            return (
              <div
                className={`carousel-item w-100 me-0 ${
                  index < 1 ? "active" : " "
                }`}
                key={index}
              >
                <img
                  src={book.cover}
                  className="d-flex align-self-center w-50"
                  alt="..."
                />
                {/* <div className="carousel-caption d-flex">
                  <h5>{book.name}</h5>
                </div> */}
              </div>
            );
          })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
