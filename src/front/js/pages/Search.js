import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CarouselHome } from "./CarouselHome";
import { SingleBook } from "./SingleBook";

export const Search = () => {
  const { store, actions } = useContext(Context);
  const [search, setSearch] = useState("");
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <form>
        <div className="form-group d-flex justify-content-center mb-3">
          <input
            type="text"
            className="form-control w-100"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter your Book Name"
          ></input>
          <button type="button" onClick={(e) => actions.search(search)}>
            {"Search"}
          </button>
        </div>
      </form>
      <div>
        {store.searchBody &&
          store.searchBody.map((book, index) => {
            return (
              <SingleBook
                cover={book.cover}
                key={index}
                name={book.name}
                year={book.year}
                authors={book.authors}
                rating={book.rating}
                url={book.url}
                created_edit={book.created_edit}
              />
            );
          })}
      </div>
      <CarouselHome />
    </div>
  );
};
