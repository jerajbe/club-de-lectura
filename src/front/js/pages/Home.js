import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { CarouselHome } from "./CarouselHome";
import { SingleBook } from "./SingleBook";

export const Home = () => {
  const [search, setSearch] = useState("");
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.carouselBook();
    if (store.token && store.token != "" && store.token != undefined)
      actions.getMessage();
  }, [store.token]);

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
      <div className="m-auto container">
        {store.searchGoogle.length <= 0 ? (
          <div className="carouselHome">
            <div
              id="carouselExampleCaptions"
              className="carousel carousel-dark slide d-flex justify-content-center w-75"
              data-bs-ride="false"
            >
              {/* {} */}
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  {store.bestBooksYear &&
                    store.bestBooksYear.map((book, index) => {
                      let thumbnail =
                        book.volumeInfo.imageLinks &&
                        book.volumeInfo.imageLinks.thumbnail;
                      return (
                        <div
                          key={index}
                          className={`carousel-item ${
                            index < 1 ? "active" : ""
                          }`}
                        >
                          <CarouselHome cover={thumbnail} />
                        </div>
                      );
                    })}
                </div>
              </div>
              {/* {} */}
              {/* {} */}
              {/* <div className="carousel-inner d-flex justify-content-center h-25 w-50">
              {store.BestBooksYear &&
                store.BestBooksYear.map((book, index) => {
                  let thumbnail =
                    book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.smallThumbnail;
                  return (
                    <div
                      className={`carousel-item ${
                        index < 1 ? "active" : ""
                      } w-100 `}
                      key={index}
                    >
                      <CarouselHome
                        cover={thumbnail}
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
        ) : (
          ""
        )}
        <div className="d-flex row row-cols-1 row-cols-md-4 g-4">
          {store.searchGoogle &&
            store.searchGoogle.map((book, index) => {
              let thumbnail =
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail;
              if (thumbnail != undefined) {
                return (
                  <SingleBook
                    google_books_id={book.id}
                    description={book.volumeInfo.description}
                    cover={thumbnail}
                    key={index}
                    name={book.volumeInfo.title}
                    year={book.volumeInfo.publishedDate}
                    authors={book.volumeInfo.authors}
                    language={book.volumeInfo.language}
                    url={book.previewLink}
                    created_edit={book.publisher}
                  />
                );
              }
            })}
        </div>
      </div>
    </>
  );
};
