import React from "react";

import Modal from "./Modal";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Are you sure?</h1>
        <p>You're about to delete this Badge</p>
        <div className="d-flex flex-direction-columns">
          <button onClick={props.onDeleteBadge} className="btn btn-danger ">
            Delete
          </button>
          <button onClick={props.onClose} className="btn btn-default ">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
