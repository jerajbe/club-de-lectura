import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { SingleBook } from "./SingleBook";

export const Search = () => {
  const { store, actions } = useContext(Context);
  const [search, setSearch] = useState("");
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Libros</label>
          <input
            type="text"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
                key={index}
                book_id={book.book_id}
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
    </div>
  );
};
