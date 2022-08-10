import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { MapComponent } from "./MapComponent";
import { useParams } from "react-router-dom";
import { Marker } from "./Marker";
import { ListElement } from "../component/ListElement";

export const UserProfile = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  // const mapWantRead = store.getWantRead.map((id) => {
  //   actions.getWantReadInfo(id.google_books_id);
  // });
  // const mapWantRead = store.getWantRead.map((id, index) => {
  //   actions.getWantReadElement();
  //   actions.getWantReadInfo(id.google_books_id);
  // });
  if (store.token && store.token != "" && store.token != undefined)
    useEffect(() => {
      console.log(params.userId);
      actions.getSingleUser(params.userId);
      actions.getWantReadElement();
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
                      <i
                        style={{
                          fontSize: "30px",
                        }}
                        className="fa-solid fa-bookmark me-3"
                      ></i>
                      {"Books I want to read"}
                    </h6>
                  </li>
                  {/* AQUI VA EL MAP DE WANT TO READ */}
                  {store.getWantRead &&
                    store.getWantRead.map((book, index) => {
                      // let thumbnail =
                      //   book.volumeInfo.imageLinks &&
                      //   book.volumeInfo.imageLinks.thumbnail;
                      return (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                        >
                          <ListElement
                            book_cover={book.book_cover}
                            book_name={book.book_name}
                          />
                        </li>
                      );
                    })}
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
                        <i
                          style={{
                            fontSize: "30px",
                          }}
                          className="fa-solid fa-paper-plane me-3"
                        ></i>
                        {"Books available to exchange"}
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
                        <i className="fa-solid fa-location-dot material-icons text-info me-2"></i>
                        {" Location"}
                      </h6>
                      <MapComponent
                        center={{
                          lat: store.userPosition.latitude,
                          lng: store.userPosition.longitude,
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
                            lat: store.userPosition.latitude,
                            lng: store.userPosition.longitude,
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
