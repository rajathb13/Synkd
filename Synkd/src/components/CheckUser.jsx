import React from "react";
import withSplashScreen from "./withSplashScreen";

var token;
var page;
var username;

class CheckUser extends React.Component {
  constructor(props) {
    super(props);
    page = JSON.parse(localStorage.getItem("UPage"));
    username = JSON.parse(localStorage.getItem("username"));
    token = JSON.parse(localStorage.getItem("token"));
    this.state = {
      loading: true,
    };
  }

  pageMoveHome() {
    window.location.href = "/UserHome";
  }

  pageMoveSignIn() {
    window.location.href = "/Home";
  }

  pageMoveMap1() {
    window.location.href = "/UserExpertSearch";
  }

  pageMoveMap2() {
    window.location.href = "/UserExpertSearch";
  }

  render() {
    if (username != null && token != null) {
      if (page === "UserExpertSearch") {
        this.pageMoveMap1();
      } else if (page === "UserExpert") {
        this.pageMoveMap2();
      } else {
        this.pageMoveHome();
      }
    } else {
      this.pageMoveSignIn();
    }
    return (
      <div className="splash-screen">
        <div className="loading-dot">JR</div>
        <h5
          className="names"
          style={{
            color: "#e0455f",
          }}
        >
          Saving Lives, Assuring Care
        </h5>
      </div>
    );
  }
}

export default withSplashScreen(CheckUser);
