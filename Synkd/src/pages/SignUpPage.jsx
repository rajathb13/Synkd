import {
  IonContent,
  IonPage,
  IonTitle,
  IonList,
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/react";
import img1 from "../images/limg3.png";
import "./SignUpPage.css";
import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  }

  SignInFn() {
    this.props.history.push({ pathname: "/LoginPage" });
  }

  render() {
    return (
      <IonPage>
        <IonContent className="ion_content">
          <IonList className="ion_list">
            <img
              alt="imagelogo"
              className="mx-auto rounded-circle Synkd_Logo"
              src={img1}
            ></img>
          </IonList>
          <IonItem className="email_field">
            <IonInput
              className="ion_input1"
              placeholder="First name"
              type="stacked"
              inputMode="email"
              maxlength="70"
              required="true"
              mode="md"
            ></IonInput>
          </IonItem>
          <IonItem className="email_field">
            <IonInput
              className="ion_input1"
              placeholder="Last name"
              type="stacked"
              inputMode="email"
              maxlength="70"
              required="true"
              mode="md"
            ></IonInput>
          </IonItem>
          <IonItem className="email_field">
            <IonInput
              className="ion_input1"
              placeholder="Email ID"
              type="email"
              inputMode="email"
              maxlength="70"
              required="true"
              mode="md"
            ></IonInput>
          </IonItem>
          <IonItem className="email_field">
            <IonInput
              className="ion_input1"
              placeholder="Password"
              type="stacked"
              inputMode="email"
              maxlength="70"
              required="true"
              mode="md"
            ></IonInput>
          </IonItem>
          <IonItem className="email_field">
            <IonInput
              className="ion_input1"
              placeholder="Confirm Password"
              type="stacked"
              inputMode="email"
              maxlength="70"
              required="true"
              mode="md"
            ></IonInput>
          </IonItem>
          <IonItem lines="none" className="button_ion">
            <IonButton
              className="button_con"
              buttonType="button"
              shape="round"
              size="default"
              color="dark"
            >
              Sign Up
            </IonButton>
          </IonItem>
          <IonItem lines="none" className="ion_item">
            <IonTitle
              className="footer_title"
              onClick={() => {
                this.SignInFn();
              }}
            >
              Already have an account? Sign In
            </IonTitle>
          </IonItem>
        </IonContent>
      </IonPage>
    );
  }
}

export default Signup;
