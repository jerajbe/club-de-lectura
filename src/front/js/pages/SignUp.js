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
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (store.token != null) navigate("/");
  }, [store.token]);

  return (
    <form className="formulario" style={{ marginTop: "50px" }}>
      <h1>Sing Up</h1>
      <div className="content">
        <div className="input-contenedor">
          <i style={{ color: "#999" }} className="fas fa-address-card ms-3"></i>
          <input
            style={{ marginLeft: "12px" }}
            type={"text"}
            name={"userName"}
            value={userName}
            placeholder={"Username"}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-contenedor">
          <i
            className="fa-solid fa-envelope ms-3"
            style={{ color: "#999" }}
          ></i>
          <input
            style={{ marginLeft: "10px" }}
            type={"text"}
            name={"email"}
            value={email}
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-contenedor">
          <i className="fa-solid fa-phone ms-3" style={{ color: "#999" }}></i>
          <input
            type={"text"}
            name={"phone"}
            value={phone}
            placeholder={"Phone"}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input-contenedor">
          <i
            className="fa-solid fa-location-dot ms-3"
            style={{ color: "#999" }}
          ></i>
          <input
            type={"text"}
            name={"address"}
            value={address}
            placeholder={"Address"}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-contenedor">
          <i className="fa-solid fa-key ms-3" style={{ color: "#999" }}></i>
          <input
            type={"password"}
            name={"password"}
            value={password}
            placeholder={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type={"button"}
          className="buttonSU"
          onClick={(e) => {
            const success = actions.signUp({
              user_name: userName,
              phone_number: phone,
              address: address,
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
        <p>By signing up, you agree to our Terms of Use and Privacy Policy.</p>
        <p>
          Do you have an account? <Link to="/login">Log in </Link>
        </p>
      </div>
    </form>
  );
};
