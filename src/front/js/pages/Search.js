import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { CarouselHome } from "./CarouselHome";
import { SingleBook } from "./SingleBook";
import { Link } from "react-router-dom";
import { SearchAddress } from "./SearchAddress";

export const Search = () => {
  const { store, actions } = useContext(Context);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      actions.getSearchUser(search);
      console.log(search);
    } else {
      setShow(true);
    }
  }, [search]);
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <form>
          <div className="form-group d-flex justify-content-center mb-3">
            <input
              type="text"
              className="form-control w-100"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter username"
            ></input>
            {/* <button type="button" onClick={(e) => actions.search(search)}> */}
            {/* {"Search"} */}
            {/* </button> */}
          </div>
          {store.bodySearch &&
            search != "" &&
            store.bodySearch.map((item) => {
              return (
                <Link
                  className={"d-flex flex-column"}
                  to={`/visit-profile/${item.id}`}
                  style={{ color: "white" }}
                  key={item.id}
                >
                  <div className="user-line">{item.user_name}</div>
                </Link>
              );
            })}
        </form>
      </div>
      <div className="d-flex justify-content-start">
        <SearchAddress />
      </div>
    </>
  );
};
