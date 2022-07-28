import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">
            <i className="fa fa-gamepad" aria-hidden="true">
              &nbsp;
            </i>
            <img
              alt="Brand"
              src="https://cdn6.aptoide.com/imgs/f/e/c/fec372f7c957ad5393911379e3a7c2a8_icon.png?w=40"
            />
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#" className="efectito">
                <i className="fa fa-flag" aria-hidden="true">
                  &nbsp;
                </i>
                ENLACE
              </a>
            </li>
            <li>
              <a href="#" className="efectito">
                <i className="fa fa-shield" aria-hidden="true">
                  &nbsp;
                </i>
                ENLACE
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <i className="fa fa-bell" aria-hidden="true">
                  &nbsp;
                </i>
                <span className="badge">4</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-envelope" aria-hidden="true">
                  &nbsp;
                </i>
                <span className="badge">2</span>
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle negrita"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Crixodia
              </a>
              <span className="caret"></span>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">
                    <i className="fa fa-user" aria-hidden="true">
                      &nbsp;
                    </i>
                    Perfil
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cog" aria-hidden="true">
                      &nbsp;
                    </i>
                    Cuenta
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-question-circle" aria-hidden="true">
                      &nbsp;
                    </i>
                    Soporte
                  </a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">
                    <i className="fa fa-sign-out" aria-hidden="true">
                      &nbsp;
                    </i>
                    Cerrar Sesión
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav classNameName="navbar navbar-light bg-light">
    //   <div classNameName="container">
    //     <span classNameName="navbar-brand mb-0 h1">Club de Lectura</span>
    //     <div classNameName="ml-auto">
    //       {/* renderizado condicional cuando esta iniciada la sesion */}
    //       {!store.token ? (
    //         <Link to="/sign-up">
    //           <button classNameName="btn btn-primary me-3">Sign Up</button>
    //         </Link>
    //       ) : (
    //         <></>
    //       )}
    //       {!store.token ? (
    //         <Link to="/login">
    //           <button classNameName="btn btn-primary">Log In</button>
    //         </Link>
    //       ) : (
    //         <button
    //           onClick={() => actions.logout()}
    //           classNameName="btn btn-primary"
    //         >
    //           Log Out
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </nav>
  );
};
