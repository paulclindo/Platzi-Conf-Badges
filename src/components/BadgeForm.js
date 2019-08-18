import React, { Component } from "react";

class BadgeForm extends Component {
  //   state = {};

  //   handleChange = e => {
  //   console.log({ value: e.target.value, name: e.target.name });
  //     this.setState({
  //       [e.target.name]: e.target.value
  //     });
  //   };
  // handleClick = e => {
  //   console.log("botoon was click");
  // };
  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log("form was submitted");
  //   // console.log(this.state);
  // };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              id=""
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              id=""
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              id=""
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              id=""
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              id=""
              onChange={this.props.onChange}
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <div class="alert alert-danger">
              <strong>Something was wrong!</strong>{" "}
              <p>{this.props.error.message}.</p>
            </div>
          )}
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
