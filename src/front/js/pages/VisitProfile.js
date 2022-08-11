import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { MapComponent } from "./MapComponent";
import { useParams } from "react-router-dom";
import { Marker } from "./Marker";
import { ListElement } from "../component/ListElement";

export const VisitProfile = (props) => {
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
      // actions.profileSingleUser();
      actions.getProfile(params.userId);
      actions.getWantReadVisit(params.userId);
      actions.getExchangeBooksVisit(params.userId);
    }, [params.userId]);
  return (
    <>
      {/* <h1 style={{ color: "white" }}>{store.profile.user_name}</h1> */}
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm profilebox">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    {/* <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    /> */}
                    <i
                      className="fa-solid fa-circle-user rounded-circle"
                      alt="Admin"
                    ></i>
                    <div className="mt-3">
                      <h4>{store.profile.user_name}</h4>
                      {/* <p className="text-secondary mb-1">Profesion</p> */}
                      <p className="text-muted font-size-sm">
                        {store.profile.address}
                      </p>
                      {/* <button className="btn btn-primary">Follow</button> */}
                      {/* <button className="btn btn-outline-primary">
                        Message
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Username</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {store.profile.user_name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {store.profile.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {store.profile.phone_number}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {store.profile.address}
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-center align-items-center flex-wrap">
                    <i
                      style={{
                        fontSize: "30px",
                      }}
                      className="fa-solid fa-bookmark me-3"
                    ></i>
                    <h6 className="mb-0">{"Books I want to read"}</h6>
                  </li>
                  <div className=" d-flex flex-column flex-nowrap scroll">
                    {/* AQUI VA EL MAP DE WANT TO READ */}
                    {store.getWantReadVisit &&
                      store.getWantReadVisit.map((book, index) => {
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
                  </div>
                </ul>
              </div>
              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="d-flex justify-content-center my-2 align-items-center">
                      <i
                        style={{
                          fontSize: "30px",
                        }}
                        className="fa-solid fa-paper-plane me-3"
                      ></i>
                      <h6 className="d-flex align-items-center">
                        {"Books available to exchange"}
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className=" d-flex flex-column flex-nowrap scroll">
                        {/* AQUI VA EL MAP DE WANT TO READ */}
                        {store.getExchangeVisit &&
                          store.getExchangeVisit.map((book, index) => {
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
                      </div>
                      <div
                        className="progress mb-3"
                        style={{ wheight: "5px" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="d-flex justify-content-center my-2 align-items-center">
                      <i
                        style={{
                          fontSize: "30px",
                        }}
                        className="fa-solid fa-location-dot me-2"
                      ></i>
                      <h6 className="d-flex align-items-center">
                        {" Location"}
                      </h6>
                    </div>
                    <div className="card-body py-0">
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
