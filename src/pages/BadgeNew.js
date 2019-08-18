import React, { Component } from "react";
import Badge from "../components/Badge";

import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import BadgeForm from "../components/BadgeForm";
import api from "./../api";
import PageLoading from "./../components/PageLoading";

class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    const { firstName, lastName, email, jobTitle, twitter } = this.state.form;

    return (
      <div>
        <div className="BadgeNew__hero">
          <img
            src={header}
            className="BadgeNew__hero-img img-fluid"
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={firstName || "FIRST_NAME "}
                lastName={lastName || "LAST_NAME"}
                jobTitle={jobTitle || "JOB_TITLE"}
                email={email || "email"}
                twitter={twitter || "twitter"}
                avatar=""
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>

              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
