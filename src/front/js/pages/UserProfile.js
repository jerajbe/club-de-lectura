import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { MapComponent } from "./MapComponent";
import { useParams } from "react-router-dom";
import { Marker } from "./Marker";

export const UserProfile = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  if (store.token && store.token != "" && store.token != undefined)
    useEffect(() => {
      console.log(params.userId);
      actions.getSingleUser(params.userId);
    }, []);
  return (
    <>
      <h1 style={{ color: "white" }}>{store.singleUser.user_name}</h1>
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{store.singleUser.user_name}</h4>
                      <p className="text-secondary mb-1">Profesion</p>
                      <p className="text-muted font-size-sm">
                        {store.singleUser.address}
                      </p>
                      <button className="btn btn-primary">Follow</button>
                      {/* <button className="btn btn-outline-primary">
                        Message
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-globe mr-2 icon-inline"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      {" Amigos"}
                    </h6>
                  </li>
                  <li>{"Amigo 1"}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {store.singleUser.user_name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {store.singleUser.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {store.singleUser.phone_number}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {store.singleUser.address}
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          assignment
                        </i>
                        {"Favorite Books"}
                      </h6>
                      <small>{"Libro 1"}</small>
                      <div
                        className="progress mb-3"
                        style={{ wheight: "5px" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          assignment
                        </i>
                        Location
                      </h6>
                      <MapComponent
                        center={{
                          lat: 10.491,
                          lng: -66.902,
                        }}
                        zoom={10}
                        clickHandler={() => {}}
                        style={{
                          margin: "0 0 1.5rem 0",
                        }}
                      >
                        <Marker
                          draggable={false}
                          position={{
                            lat: 10.491,
                            lng: -66.902,
                          }}
                          dragHandler={() => {}}
                        />
                      </MapComponent>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
