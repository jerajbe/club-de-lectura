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
  const [comment, setComment] = useState("");
  const isExchange = (fav) => {
    const search = store.exchangeBook.find((x) => x == fav);
    if (search) {
      return true;
    }
    return false;
  };
  const isWantRead = (fav) => {
    const search = store.wantRead.find((x) => x == fav);
    if (search) {
      return true;
    }
    return false;
  };
  const handleClick = () => {
    actions.addComment({
      google_books_id: props.google_books_id,
      // book_id: commentBody.book_id,
      content: comment,
    });
    // actions.getComments(props.google_books_id);
  };
  useEffect(() => {
    if (show) {
      console.log("se ejecuto useEffect SingleBook");
      actions.getComments(props.google_books_id);
    }
  }, [show]);

  // useEffect(() => {
  //   if (store.bookComments) {
  //     actions.getComments(props.google_books_id);
  //   }
  // }, []);

  return (
    <div className="cardBook d-flex justify-content-center col">
      <div className="card" style={{ width: "14rem" }}>
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
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-lg"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Book Information
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div
                  className="card mb-3 border border-0"
                  style={{ maxWwidth: "540px" }}
                >
                  <div className="row">
                    <div className="col-md-5">
                      <img
                        src={props.cover}
                        alt={props.name}
                        className="img-fluid w-100 h-100"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title">{`Authors: ${props.authors}`}</h5>
                        <p className="card-text">{`Year: ${props.year}`}</p>
                        <p className="card-text">{`Language: ${props.rating}`}</p>
                        <p
                          className="card-text"
                          style={{
                            overflowY: "auto",
                            width: "400px",
                            height: "500px",
                            padding: "1%",
                          }}
                        >
                          {props.description}
                        </p>
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
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="form-control"
                          rows="2"
                          placeholder="What are you thinking?"
                        ></textarea>
                        <div className="mar-top clearfix">
                          <button
                            onClick={handleClick}
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
                        {store.bookComments &&
                          store.bookComments.map((book, index) => {
                            if (book.google_books_id !== null) {
                              return (
                                <Comments
                                  key={index}
                                  userName={book.user_name}
                                  commentContent={book.content}
                                />
                              );
                            }
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <div className="card-footer">
          <div className="row d-flex justify-content-between align-items-center">
            {/* LIBRO QUE QUIERO LEER SIGNO DE GUARDAR */}
            <div className="col-4 p-0">
              <i
                style={{
                  fontSize: "30px",
                }}
                onClick={() => {
                  actions.addWantReadElement(
                    props.google_books_id,
                    props.cover,
                    props.name
                  );
                }}
                className={`${
                  isWantRead(props.google_books_id)
                    ? "fa-solid fa-bookmark icon"
                    : "fa-regular fa-bookmark icon"
                }`}
              ></i>
            </div>
            {/* LIBRO QUE YA LEI Y QUIERO ENVIAR SIGNO AVION */}
            <div className="col-4 p-0">
              <i
                style={{
                  fontSize: "30px",
                }}
                onClick={() => {
                  actions.addExchageBook(
                    props.google_books_id,
                    props.cover,
                    props.name
                  );
                }}
                className={`${
                  isExchange(props.google_books_id)
                    ? "fa-solid fa-paper-plane icon"
                    : "fa-regular fa-paper-plane icon"
                }`}
              ></i>
            </div>
            <div className="col-4 p-0 btnDetails">
              <Button
                className="detailsB"
                variant="secondary"
                onClick={() => setShow(true)}
              >
                Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleBook.propTypes = {
  user_name: PropTypes.string,
  google_books_id: PropTypes.string,
  description: PropTypes.string,
  book_id: PropTypes.number,
  name: PropTypes.string,
  cover: PropTypes.string,
  url: PropTypes.string,
  authors: PropTypes.array,
  language: PropTypes.string,
  created_editions: PropTypes.string,
  year: PropTypes.string,
};
