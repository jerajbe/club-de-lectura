import { fontSize } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { CarouselHome } from "./CarouselHome";
import { SingleBook } from "./SingleBook";

export const Home = () => {
  const [search, setSearch] = useState("");
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getLoveBooks();
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
      <div>
        <div className="header wtitle fondoheader container d-flex h-75 mt-2 mb-4 justify-content-center">
          <div className="row1 col-8 p-4">
            <h1 className="letra" style={{ color: "white" }}>
              "No matter how busy you think you are, you must find time to read,
              or give in to self-chosen ignorance." Confucius
            </h1>
          </div>
          {/* <div className="row2 ms-2 card slider-frame w-25"> */}
          {/* <ul>
              <li>
                {" "}
                <img
                  className="card-img-top img--card"
                  src="https://p1.pxfuel.com/preview/781/453/305/book-hands-reading-man.jpg"
                ></img>
              </li>
              <li>
                {" "}
                <img
                  className="card-img-top img--card"
                  src="https://mh-1-banco-de-imagen.panthermedia.net/media/media_detail/0025000000/25802000/~grupo-de-personas-leyendo-libros-sagrados_25802815_detail.jpg"
                ></img>
              </li>
              <li>
                {" "}
                <img
                  className="card-img-top img--card"
                  src="https://media.thegospelcoalition.org/wp-content/uploads/sites/4/2020/02/31160000/Personas-leyendo-la-Biblia.jpg"
                ></img>
              </li>
            </ul> */}
          {/* </div> */}
          <div className="inputSearch d-flex flex-column col-4">
            {/* <h2 style={{ color: "white" }}>Find your Book</h2> */}
            <div className="d-flex">
              <input
                className="form-control"
                type="text"
                placeholder="Find your Book"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={searchBook}
              />
              <button
                onClick={() => actions.googleBooks(search)}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
            <img src="https://images.vexels.com/media/users/3/157535/isolated/preview/f39cfd20c159bc118e737ba9d7c3023a-icono-de-vidrio-de-lectura.png" />
          </div>
        </div>
      </div>
      {/* CARRUSEL */}

      <div className="container wtitle fondoheader mb-3 mt-3 d-flex justify-content-around align-items-center">
        {store.searchGoogle.length <= 0 ? (
          <>
            <div className="fondo letra py-2 mb-3 mt-3 d-flex justify-content-center align-items-center">
              <h2 style={{ color: "white" }} className="me-4 ms-3">
                Best books of 2021
              </h2>
              <div className="carouselHome me-4">
                <div
                  id="carouselExampleCaptions"
                  className="carousel carousel-dark slide d-flex justify-content-center w-100"
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
                        search === "" &&
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
            </div>
            {/* LOVE */}
            <div className="fondo letra py-2 mb-3 mt-3 d-flex justify-content-center align-items-center">
              <h2 style={{ color: "white" }} className="me-4 ms-3">
                Best books of Love
              </h2>
              <div className="carouselHome me-4">
                <div
                  id="carouselExampleCaptionsLove"
                  className="carousel carousel-dark slide d-flex justify-content-center w-100"
                  data-bs-ride="false"
                >
                  {/* {} */}
                  <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {store.loveBooks &&
                        search === "" &&
                        store.loveBooks.map((book, index) => {
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
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptionsLove"
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
                    data-bs-target="#carouselExampleCaptionsLove"
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
            </div>
          </>
        ) : (
          ""
        )}
        <div className="d-flex row row-cols-1 row-cols-md-4 g-4">
          {store.searchGoogle &&
            search != "" &&
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
