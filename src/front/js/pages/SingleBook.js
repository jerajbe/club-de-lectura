import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Comments } from "./Comments";
import { DetailedBook } from "./DetailedBook";

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
    <div className="CardBook d-flex">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.cover} alt="Card image cap" />
        <div className="card-body">
          {props.name && <h5 className="card-title">{props.name}</h5>}
          {props.authors && <p className="card-text">{props.authors}</p>}
          {/* <Link to={`/people/${props.uid}`} className="btn btn-primary">{"DATA BANK"}</Link>{" "} */}
          <i
            style={{
              color: "red",
              position: "relative",
              marginLeft: "70px",
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
        </div>
        <Button variant="primary" onClick={() => setShow(true)}>
          More Info
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
            <DetailedBook />
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
  );
};

SingleBook.propTypes = {
  book_id: PropTypes.number,
  name: PropTypes.string,
  cover: PropTypes.string,
  url: PropTypes.string,
  authors: PropTypes.array,
  rating: PropTypes.string,
  created_editions: PropTypes.string,
  year: PropTypes.string,
};
