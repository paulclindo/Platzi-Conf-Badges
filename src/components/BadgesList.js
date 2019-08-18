import React, { Component } from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgeListItems extends Component {
  render() {
    return (
      <div className="BadgesList__container">
        <Gravatar
          className="Badge__avatar"
          email={this.props.badge.email}
          alt="Gravatar"
        />
        <div className="BadgesList__description">
          <p>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </p>
          <p> @{this.props.badge.twitter}</p>
          <p>{this.props.badge.jobTitle}</p>
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);
  React.useMemo(() => {
    const results = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(results);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const { badges } = props;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  // const filteredBadges = badges.filter(badge => {
  //   return `${badge.firstName} ${badge.lastName}`
  //     .toLowerCase()
  //     .includes(query.toLowerCase());
  // });

  if (filteredBadges.length === 0) {
    return (
      <div className="BadgesList">
        <div className="form-group">
          <label htmlFor="">Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h1>There aren't any Badges here</h1>
        <Link to="/badges/new" className="btn btn-success btn-sm">
          Create New Badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label htmlFor="">Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        <div className="">
          {filteredBadges.map(badge => {
            return (
              <li key={badge.id} className="BadgeList__wrapper">
                <Link
                  to={`/badges/${badge.id}`}
                  className="text-reset text-decoration-none"
                >
                  <BadgeListItems badge={badge} />
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default BadgesList;
