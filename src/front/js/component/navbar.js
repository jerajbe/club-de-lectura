import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Avatar } from "@mui/material";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-success barra--nav">
      <div className="container">
        <Link to="/" className="navbar-brand mb-0 h1 text-light span--titulo">
          Lecture´s Club
        </Link>
        <div className="ml-auto d-flex justify-content-center align-items-center">
          {/* renderizado condicional cuando esta iniciada la sesion */}
          {!store.token ? (
            <Link to="/sign-up">
              <button className="me-3 button type1">Sign Up</button>
            </Link>
          ) : (
            <></>
          )}
          {!store.token ? (
            <Link to="/login">
              <button className="button type1">Log In</button>
            </Link>
          ) : (
            <div className="d-flex">
              <Link
                className="mx-2 profilepic d-flex align-items-center justify-content-center"
                to={`/user-profile/${store.singleUser.id}`}
              >
                <Avatar />
              </Link>
              {/* <Link className="btn button type1" to={"/search-address"}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link> */}
              <Link className="btn button type1" to={"/search"}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
              <Link to="/">
                <button
                  onClick={() => actions.logout()}
                  className="btn button type1"
                >
                  Log Out
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
