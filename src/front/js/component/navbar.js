import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        <div className="ml-auto">
          {/* renderizado condicional cuando esta iniciada la sesion */}
          {!store.token ? (
            <Link to="/sign-up">
              <button className="btn btn-primary me-3">Sign Up</button>
            </Link>
          ) : (
            <></>
          )}
          {!store.token ? (
            <Link to="/login">
              <button className="btn btn-primary">Log In</button>
            </Link>
          ) : (
            <button
              onClick={() => actions.logout()}
              className="btn btn-primary"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
