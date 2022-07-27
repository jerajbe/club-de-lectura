import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

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
    <div className="CardPeople col-3">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.cover} alt="Card image cap" />
        <div className="card-body">
          {props.name && <h5 className="card-title">{props.name}</h5>}
          {props.gender && <p className="card-text">{props.authors}</p>}
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
      </div>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
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
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

SingleBook.propTypes = {
  book_id: PropTypes.number,
  name: PropTypes.string,
  cover: PropTypes.string,
  url: PropTypes.string,
  authors: PropTypes.array,
  rating: PropTypes.number,
  created_editions: PropTypes.number,
  year: PropTypes.number,
};
