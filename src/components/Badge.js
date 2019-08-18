import React, { Component } from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.scss";
import Gravatar from "./Gravatar";
class Badge extends Component {
  render() {
    const {
      avatar,
      firstName,
      lastName,
      twitter,
      jobTitle,
      email
    } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Avatar" />
        </div>
        <div className="Badge__content">
          <Gravatar className="Badge__avatar" email={email} alt="Gravatar" />
        </div>
        <h1>
          {firstName} <br /> {lastName}
        </h1>
        <div className="Badge__subcontent">
          <p className="Badge__job m-2">{jobTitle}</p>
          <p className="Badge__nickname">@{twitter}</p>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
