import React, { Component } from "react";

import RickBadge from "../components/RickBadge";
import { Link } from "react-router-dom";

class RickMorty extends Component {
  state = {
    page: 1,
    loading: true,
    error: null,
    data: {
      results: []
    }
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
      );
      const data = await response.json();
      this.setState({
        loading: false,
        error: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        page: this.state.page + 1
      });
    } catch (error) {
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    if (this.state.error) {
      return `Error : ${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <div className="container">
          <Link to="/" className="btn btn-info mt-3">
            Go back
          </Link>
          <h1 className="m-3 font-weight-bold text-center">
            {" "}
            RICK N MORTY CHARACTERS
          </h1>
          <div className="row">
            {this.state.data.results.map(character => {
              return (
                <div key={character.id}>
                  <RickBadge character={character} />;
                </div>
              );
            })}
          </div>

          {this.state.loading && <p className="text-center">Loading...</p>}
          {!this.state.loading && (
            <button
              onClick={() => this.fetchCharacters()}
              className="btn btn-success w-100 m-4"
            >
              Load More
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default RickMorty;
