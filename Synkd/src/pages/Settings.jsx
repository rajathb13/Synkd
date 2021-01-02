import React from "react";
import img1 from "../images/limg3.png";
import {
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonToast,
} from "@ionic/react";
import SideMenuPage from "./SideMenuPage";
import SF from "./SF";
import "./SignUpPage.css";

var fieldTitle = "";

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldpassword: "",
      newpassword: "",
      cpassword: "",
      username: "",
    };
  }

  handleToast() {
    this.setState({
      show: !this.state.show,
    });
  }

  NextFn() {
    if (
      !this.state.oldpassword &&
      !this.state.newpassword &&
      !this.state.cpassword
    ) {
      fieldTitle = "All fields are required";
      this.handleToast();
    } else {
      if (this.state.cpassword !== this.state.newpassword) {
        var presult = false;
        fieldTitle = "Passwords do not match";
        this.handleToast();
      } else {
        presult = true;
      }
    }
    var data = this.state;
    if (presult === true) {
      fetch("https://clickademy.in/user/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        result
          .json()
          .then((resp) => {
            if (resp.message === "Authentication Successful") {
              /*On success, setting the user name in the local storage*/
              //let obj = this.state.displayname;
              //localStorage.setItem("username", JSON.stringify(obj));
              localStorage.setItem("token", JSON.stringify(resp.token));
              // if (resp.homeid != null) {
              //   this.props.history.push({ pathname: "/EHomePage" });
              // } else {
              //   this.props.history.push({ pathname: "/AddHomePage" });
              // }
              this.props.history.push({ pathname: "/AddHomePage" });
              this.refreshPage();
            } else {
              fieldTitle = "Email ID or Pasword is wrong";
              this.handleToast();
            }
          })
          .catch((error) => {
            console.log("Invalid email or Wrong Password", error);
          });
      });
    }
  }

  render() {
    return (
      <IonPage>
        <IonContent className="ion-content">
          <SideMenuPage />
          <IonItem lines="none" className="email_field">
            <IonLabel style={{ marginTop: "3rem", fontSize: "20px" }}>
              Please enter the following details
            </IonLabel>
          </IonItem>
          <IonItem className="email_field">
            <IonInput
              style={{ marginTop: "3rem" }}
              className="ion_input1"
              placeholder="Old Password"
              type="password"
              inputMode="email"
              maxlength="70"
              required="true"
              value={this.state.oldpassword}
              onIonChange={(data) => {
                this.setState({ oldpassword: data.target.value });
              }}
            ></IonInput>
          </IonItem>
          <IonItem className="email_field">
            <IonInput
              className="ion_input1"
              placeholder="New Password"
              type="password"
              inputMode="email"
              maxlength="70"
              required="true"
              value={this.state.password}
              onIonChange={(data) => {
                this.setState({ password: data.target.value });
              }}
            ></IonInput>
          </IonItem>
          <IonItem className="email_field">
            <IonInput
              className="ion_input1"
              placeholder="Confirm Password"
              type="password"
              inputMode="email"
              maxlength="70"
              required="true"
              value={this.state.cpassword}
              onIonChange={(data) => {
                this.setState({ cpassword: data.target.value });
              }}
            ></IonInput>
          </IonItem>
          <IonItem lines="none" style={{ paddingTop: "2rem" }}>
            <IonButton
              className="button_con"
              buttonType="button"
              shape="round"
              size="default"
              color="dark"
              onClick={() => {
                this.NextFn();
              }}
            >
              Next
            </IonButton>
          </IonItem>
          <IonToast
            isOpen={this.state.show}
            onDidDismiss={() => this.handleToast()}
            message={fieldTitle}
            duration={3000}
          />
        </IonContent>
      </IonPage>
    );
  }
}

export default Settings;
