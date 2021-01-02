import React from "react";
import "./LoginPage.css";
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonToast,
} from "@ionic/react";
import "./LoginPage.css";
import { withRouter } from "react-router-dom";

var fieldTitle = "";
var auth_token;

class NameHomePage extends React.Component {
  constructor(props) {
    super(props);
    auth_token = JSON.parse(localStorage.getItem("token"));
    this.state = {
      homename: "",
    };
  }

  handleToast() {
    this.setState({
      show: !this.state.show,
    });
  }

  onSubmit() {
    let data = this.state;
    console.log(data);
    if (!this.state.homename) {
      fieldTitle = "Home Name cannot be empty";
      this.handleToast();
    } else {
      fetch("https://clickademy.in/home/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth_token,
        },
        body: JSON.stringify(data),
      }).then((result) => {
        result
          .json()
          .then((resp) => {
            if (resp.createdHome._id) {
              /*On success, setting the homeid in the local storage*/
              let obj = resp.createdHome._id;
              localStorage.setItem("homeid", JSON.stringify(obj));
              // if (resp.homeid != null) {
              //   this.props.history.push({ pathname: "/EHomePage" });
              // } else {
              //   this.props.history.push({ pathname: "/AddHomePage" });
              // }
              console.log(resp.createdHome._id);
              this.props.history.push({ pathname: "/EHomePage" });
            } else {
              fieldTitle = "Home not created";
              this.handleToast();
            }
          })
          .catch((error) => {
            console.log("Home not created", error);
          });
      });
    }
  }

  render() {
    return (
      <IonPage>
        <IonContent className="ion-content">
          <IonItem lines="none" className="home_name">
            <IonLabel className="ion-text-wrap ion_label1">
              Let's give your new home a name !
            </IonLabel>
          </IonItem>
          <IonItem className="email_field">
            <IonInput
              className="ion_input1"
              placeholder="Home Name"
              type="stacked"
              inputMode="text"
              maxlength="70"
              required="true"
              mode="md"
              value={this.state.homename}
              onIonChange={(data) => {
                this.setState({ homename: data.target.value });
              }}
            ></IonInput>
          </IonItem>
          <IonItem lines="none" className="loginbtn_item">
            <IonButton
              className="login_btn"
              buttonType="button"
              shape="round"
              size="default"
              color="medium"
              onClick={() => this.onSubmit()}
            >
              Next
            </IonButton>
          </IonItem>
          <IonToast
            isOpen={this.state.show}
            onDidDismiss={() => this.handleToast()}
            message={fieldTitle}
            duration={2000}
          />
        </IonContent>
      </IonPage>
    );
  }
}

export default withRouter(NameHomePage);
