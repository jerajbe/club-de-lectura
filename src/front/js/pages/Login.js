import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // console.log("this is your token", token);
  const navigate = useNavigate();

  const handleClick = () => {
    actions.login(userName, email, password).then(() => {
      actions.login(userName, email, password);
    });
  };

  if (store.token && store.token != "" && store.token != undefined)
    navigate("/");

  return (
    <form className="formulario">
      <h1>Login </h1>
      <div className="content">
        {store.token && store.token != "" && store.token != undefined ? (
          "you are logged in with" + store.token
        ) : (
          <>
            <div className="input-contenedor">
              <i className="fas fa-key icon" />
              <input
                type="text"
                placeholder="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-contenedor">
              <i className="fas fa-key icon" />
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-contenedor">
              <i className="fas fa-key icon" />
              <input
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="buttonSU" onClick={handleClick}>
              Login
            </button>
          </>
        )}
        {store.loginError && <p>{store.loginError}</p>}
        <p>
          Al registrarte, aceptas nuestras Condiciones de uso y Política de
          privacidad.
        </p>
        <p>
          ¿No tienes una cuenta?{" "}
          <Link to="/sign-up">
            <a className="link"> Registrate </a>
          </Link>
        </p>
      </div>
    </form>
  );
};
