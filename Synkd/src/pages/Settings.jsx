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
      password: "",
      cpassword: "",
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
      !this.state.password &&
      !this.state.cpassword
    ) {
      fieldTitle = "All fields are required";
      this.handleToast();
    } else {
      if (this.state.cpassword !== this.state.password) {
        var presult = false;
        fieldTitle = "Passwords do not match";
        this.handleToast();
      } else {
        presult = true;
      }
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
          <IonItem lines="none" className="button_ion">
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
