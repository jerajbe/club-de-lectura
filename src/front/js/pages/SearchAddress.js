import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { CarouselHome } from "./CarouselHome";
import { SingleBook } from "./SingleBook";
import { Link } from "react-router-dom";

export const SearchAddress = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getSearchAddress(store.singleUser.address);
  }, []);
  return (
    <div className="d-flex flex-column">
      <div className="d-flex ms-5 flex-column align-items-center justify-content-center">
        <form>
          <h3 className="letra " style={{ color: "white" }}>
            Users around you:
          </h3>
          <div className="form-group d-flex justify-content-center mb-3"></div>
          {store.searchAddress &&
            store.searchAddress.map((item) => {
              return (
                <div>
                  <Link
                    className={"d-flex flex-column"}
                    to={`/visit-profile/${item.id}`}
                    style={{ color: "white" }}
                    key={item.id}
                  >
                    <div className="user-line">{item.user_name}</div>
                  </Link>
                </div>
              );
            })}
        </form>
      </div>
    </div>
  );
};
