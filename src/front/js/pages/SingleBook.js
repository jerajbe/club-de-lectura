import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Comments } from "./Comments";
import { DetailedBook } from "./DetailedBook";
import { Avatar } from "@mui/material";

export const SingleBook = (props) => {
  const [show, setShow] = useState(false);
  const { store, actions } = useContext(Context);
  const isFavorite = (fav) => {
    const search = store.favorites.find((x) => x == fav);
    if (search) {
      return true;
    }
    return false;
  };
  return (
    <div className="CardBook d-flex col">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.cover} alt="Card image cap" />
        <div className="card-body bodyCard">
          <div className="row">
            <div className="col-md titulo">
              {props.name && (
                <h5 className="card-title text-center titleCard">
                  {props.name}
                </h5>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md texto">
              {props.authors && (
                <p className="card-text textCard">{props.authors}</p>
              )}
            </div>
          </div>
          {/* <Link to={`/people/${props.uid}`} className="btn btn-primary">{"DATA BANK"}</Link>{" "} */}
          <div className="d-flex justify-content-around">
            {/*<div className="row d-flex justify-content-between">
              <div className="col-3 align-self-end">
                <i
                  style={{
                    position: "relative",
                    marginLeft: "5px",
                    fontSize: "40px",
                  }}
                  onClick={() => {
                    actions.addFavoriteElement(
                      props.name
                    ); /* setIsFavorite(!isFavorite)
                  }}
                  className={`${
                    isFavorite(props.name)
                      ? "fas fa-thumbs-up"
                      : "far fa-thumbs-up"
                  }`}
                ></i>
              </div>
              <div className="col-9 align-self-end">
                <Button variant="primary" onClick={() => setShow(true)}>
                  More Details
                </Button>
              </div>
            </div>*/}

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Custom Modal Styling
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={props.cover}
                        alt={props.name}
                        className="img-fluid rounded-start"
                      />
                      <ul className="list-group">
                        <li className="list-group-item">{`Authors: ${props.authors}`}</li>
                        <li className="list-group-item">
                          {`Year: ${props.year}`}
                        </li>
                        <li className="list-group-item">{`Language: ${props.rating}`}</li>
                      </ul>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">{props.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {aqui termina la info del libro modal} */}
                <div className="container bootdey">
                  <div className="col-md-12 bootstrap snippets">
                    <div className="panel">
                      <div className="panel-body">
                        <textarea
                          className="form-control"
                          rows="2"
                          placeholder="What are you thinking?"
                        ></textarea>
                        <div className="mar-top clearfix">
                          <button
                            className="btn btn-sm btn-primary pull-right"
                            type="button"
                          >
                            <i className="fa fa-pencil fa-fw"></i> {"Share"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="panel"
                      style={{
                        backgroundColor: "grey",
                        borderRadius: "10px",
                        border: "1px solid white",
                      }}
                    >
                      <div className="panel-body">
                        {/* <!-- Newsfeed Content -->
      <!--===================================================--> */}
                        <Comments />
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <div class="card-footer">
          <div className="row justify-content-between">
            <div className="col-6 p-0">
              <i
                style={{
                  fontSize: "40px",
                }}
                onClick={() => {
                  actions.addFavoriteElement(props.name);
                }}
                className={`${
                  isFavorite(props.name)
                    ? "fas fa-thumbs-up"
                    : "far fa-thumbs-up"
                }`}
              ></i>
            </div>
            <div className="col-6 p-0 btnDetails">
              <Button variant="primary" onClick={() => setShow(true)}>
                More Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleBook.propTypes = {
  description: PropTypes.string,
  book_id: PropTypes.number,
  name: PropTypes.string,
  cover: PropTypes.string,
  url: PropTypes.string,
  authors: PropTypes.array,
  rating: PropTypes.string,
  created_editions: PropTypes.string,
  year: PropTypes.string,
};
