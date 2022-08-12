import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { CarouselHome } from "./CarouselHome";
import { SingleBook } from "./SingleBook";
import { Link } from "react-router-dom";

export const SearchAddress = () => {
  const { store, actions } = useContext(Context);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      actions.getSearchAddress(search);
      console.log(search);
    } else {
      setShow(true);
    }
  }, [search]);
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <form>
          <div className="form-group d-flex justify-content-center mb-3">
            <input
              type="text"
              className="form-control w-100"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter Address"
            ></input>
            {/* <button type="button" onClick={(e) => actions.search(search)}> */}
            {/* {"Search"} */}
            {/* </button> */}
          </div>
          {store.searchAddress &&
            search != "" &&
            store.searchAddress.map((item) => {
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
    </div>
  );
};
