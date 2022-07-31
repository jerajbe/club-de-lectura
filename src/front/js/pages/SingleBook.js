import React, { useContext, useState } from "react";
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
        <div className="card-body">
          <div>
            {props.name && <h5 className="card-title">{props.name}</h5>}
            {props.authors && <p className="card-text">{props.authors}</p>}
          </div>
          {/* <Link to={`/people/${props.uid}`} className="btn btn-primary">{"DATA BANK"}</Link>{" "} */}
          <div className="d-flex justify-content-around">
            <i
              style={{
                color: "red",
                position: "relative",
                marginLeft: "5px",
                fontSize: "40px",
              }}
              onClick={() => {
                actions.addFavoriteElement(
                  props.name
                ); /* setIsFavorite(!isFavorite)*/
              }}
              className={`fas ${
                isFavorite(props.name) ? "fa-heart" : "fa-heart-circle-plus"
              }`}
            ></i>
            <Button variant="primary" onClick={() => setShow(true)}>
              More Details
            </Button>
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
                <div className="modal-body" id="ModalBook">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">{props.name}</div>
                      <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
                      <div className="col-md-2 ml-auto">{props.cover}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 ml-auto">
                        {props.description}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-9">
                        Level 1: .col-sm-9
                        <div className="row">
                          <div className="col-8 col-sm-6">
                            Level 2: .col-8 .col-sm-6
                          </div>
                          <div className="col-4 col-sm-6">
                            Level 2: .col-4 .col-sm-6
                          </div>
                        </div>
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
                            type="submit"
                          >
                            <i className="fa fa-pencil fa-fw"></i> Share
                          </button>
                          <a
                            style={{ color: "black" }}
                            className="btn btn-trans btn-icon fa fa-video-camera add-tooltip"
                            href="#"
                          ></a>
                          <a
                            style={{ color: "black" }}
                            className="btn btn-trans btn-icon fa fa-camera add-tooltip"
                            href="#"
                          ></a>
                          <a
                            style={{ color: "black" }}
                            className="btn btn-trans btn-icon fa fa-file add-tooltip"
                            href="#"
                          ></a>
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
