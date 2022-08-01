import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const { store, actions } = useContext(Context);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (store.token != null) navigate("/");
  }, [store.token]);

  return (
    <form className="formulario">
      <h1>Sing Up</h1>
      <div className="content">
        <div className="input-contenedor">
          <i
            style={{ color: "#999", marginLeft: "17px" }}
            className="fas fa-address-card"
          ></i>
          <input
            style={{ marginLeft: "12px" }}
            type={"text"}
            name={"userName"}
            value={userName}
            placeholder={"User Name"}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-envelope icon"></i>
          <input
            type={"text"}
            name={"email"}
            value={email}
            placeholder={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-contenedor">
          <i className="fas fa-key icon"></i>
          <input
            type={"password"}
            name={"password"}
            value={password}
            placeholder={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type={"button"}
          className="buttonSU"
          onClick={(e) => {
            const success = actions.signUp({
              user_name: userName,
              email: email,
              password: password,
            });
            if (success && userName != "" && email != "" && password != "") {
              navigate("/login");
              return;
            }
            alert("Favor introducir sus datos");
          }}
        >
          {"Sign Up"}
        </button>
        <p>
          Al registrarte, aceptas nuestras Condiciones de uso y Política de
          privacidad.
        </p>
        <p>
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login">
            <a className="link" href="">
              Inicia Sesión{" "}
            </a>
          </Link>
        </p>
      </div>
    </form>
  );
};
