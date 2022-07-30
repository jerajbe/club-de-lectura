import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-success barra--nav">
      <div className="container">
        <Link to="/" className="navbar-brand mb-0 h1 text-light span--titulo">
          Club de Lectura
        </Link>
        <div className="ml-auto">
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
