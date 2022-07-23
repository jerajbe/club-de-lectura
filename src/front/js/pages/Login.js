import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log("this is your token", token);
  const navigate = useNavigate();

  const handleClick = () => {
    actions.login(email, password).then(() => {
      actions.login(email, password);
    });
  };

  if (store.token && store.token != "" && store.token != undefined)
    navigate("/private");

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      {store.token && store.token != "" && store.token != undefined ? (
        "you are logged in with" + store.token
      ) : (
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>Login</button>
        </div>
      )}
      {store.loginError && <p>{store.loginError}</p>}
    </div>
  );
};
