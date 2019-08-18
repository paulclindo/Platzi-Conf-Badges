import React from "react";
import ConfLogo from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";

import Badge from "./../components/Badge";

import "./styles/BadgeDetails.css";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}

function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(4);

  const { firstName, lastName, jobTitle, email, twitter, id } = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={ConfLogo} alt="" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {firstName}
                {lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={firstName}
              lastName={lastName}
              email={email}
              jobTitle={jobTitle}
              twitter={twitter}
            />
          </div>
          <div className="col">
            <h2 className="m-4">Actions</h2>
            <div className="d-flex justify-content-center">
              {/* <button
                onClick={() => {
                  setCount(count + 1);
                }}
                className="btn btn-primary"
              >
                Increase Count: {count}
              </button> */}
              <div className="mr-5">
                <Link
                  className="btn btn-success mb-4"
                  to={`/badges/${id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>

                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
