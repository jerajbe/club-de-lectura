import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
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
          <h1>Welcome to Lectur's Club</h1>
        </div>
        <div className="row2">
          <h2>Find your Book</h2>
          <div className="inputSearch">
            <input
              type="text"
              placeholder="Enter your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="https://img.freepik.com/vector-premium/libreria-biblioteca-libreria-bestseller-estilo-dibujos-animados-ilustracion-vectorial_499431-682.jpg" />
        </div>
      </div>
      <div className="container">
        <div>
          {store.searchGoogle &&
            store.searchGoogle.map((book, index) => {
              return (
                <SingleBook
                  cover={book.volumeInfo.imageLinks.smallThumbnail}
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
