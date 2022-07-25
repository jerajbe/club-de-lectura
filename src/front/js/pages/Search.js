import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Search = () => {
  const { store, actions } = useContext(Context);
  const [search, setSearch] = useState("");
  return (
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
  );
};
