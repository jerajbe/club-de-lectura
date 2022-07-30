import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CarouselHome } from "./CarouselHome";
import { SingleBook } from "./SingleBook";

export const Home = () => {
  const [search, setSearch] = useState("");
  const { store, actions } = useContext(Context);
  const searchBook = (e) => {
    if (e.key == "Enter") {
      actions.googleBooks(search);
    }
  };
  return (
    <>
      <div className="header fondo">
        <div className="row1">
          <h1 style={{ color: "white" }}>Welcome to Lectur's Club</h1>
        </div>
        <div className="row2">
          <h2 style={{ color: "white" }}>Find your Book</h2>
          <div className="inputSearch">
            <input
              type="text"
              placeholder="Enter your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button onClick={() => actions.googleBooks(search)}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="https://img.freepik.com/vector-premium/libreria-biblioteca-libreria-bestseller-estilo-dibujos-animados-ilustracion-vectorial_499431-682.jpg" />
        </div>
      </div>
      <div className="container">
        <div className="carouselHome">
          <div
            id="carouselExampleCaptions"
            className="carousel carousel-dark slide d-flex justify-content-center w-75"
            data-bs-ride="false"
          >
            {/* <div className="carousel-inner d-flex justify-content-center h-25 w-50">
              {search === ""
                ? actions.carouselBook() &&
                  store.BestBooksYear &&
                  store.BestBooksYear.map((book, index) => {
                    return (
                      <div
                        className={`carousel-item w-100 me-0 ${
                          index < 1 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <CarouselHome
                          cover={book.volumeInfo.imageLinks.thumbnail}
                          key={index}
                          name={book.volumeInfo.title}
                        />
                      </div>
                    );
                  })}
            </div> */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div>
          {store.BestBooksYear &&
            store.BestBooksYear.map((book, index) => {
              return (
                <SingleBook
                  // cover={book.volumeInfo.imageLinks.thumbnail}
                  key={index}
                  name={book.volumeInfo.title}
                  year={book.volumeInfo.publishedDate}
                  authors={book.volumeInfo.authors}
                  rating={book.volumeInfo.lenguage}
                  url={book.previewLink}
                  created_edit={book.publisher}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
