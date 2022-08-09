import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  // console.log("this is your token", token);
  const navigate = useNavigate();

  const handleClick = () => {
    actions.login(user_name, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    navigate("/");

  return (
    <form className="formulario">
      <h1>Login </h1>
      <div className="content">
        <>
          <div className="input-contenedor">
            <i className="fas fa-envelope icon" />
            <input
              type="text"
              placeholder="Username"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          {/* <div className="input-contenedor">
              <i className="fas fa-key icon" />
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div> */}
          <div className="input-contenedor">
            <i className="fas fa-key icon" />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="buttonSU" type="button" onClick={handleClick}>
            Login
          </button>
        </>
        {store.loginError && <p>{store.loginError}</p>}
        <p>By signing up, you agree to our Terms of Use and Privacy Policy.</p>
        <p>
          You do not have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </form>
  );
};
