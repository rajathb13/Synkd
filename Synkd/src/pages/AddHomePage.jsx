import React from "react";
import "./LoginPage.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonGrid,
  IonToast,
} from "@ionic/react";
import { Plugins } from "@capacitor/core";
import "@codetrix-studio/capacitor-google-auth";

var fieldTitle = "";
var name = "";
var userId = "";
var fbtoken = "";

const INITIAL_STATE = {
  loggedIn: true,
  user: {},
};

class AddHomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
    };
  }

  async componentDidMount() {
    fieldTitle = "Login Successful";
    this.getUserInfo();
    this.handleToast();
    name = JSON.parse(localStorage.getItem("Name"));
    userId = JSON.parse(localStorage.getItem("UserId"));
    fbtoken = JSON.parse(localStorage.getItem("fbtoken"));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      console.log(nextProps.location);
      console.log(this.props.location);
    }
  }

  async getUserInfo() {
    const response = await fetch(
      `https://graph.facebook.com/${userId}?fields=id,name,gender,link&type=large&access_token=${fbtoken}`
    );
    const myJson = await response.json();
    console.log(myJson);
    this.setState({
      user: myJson,
    });
  }

  handleToast() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    name = JSON.parse(localStorage.getItem("Name"));
    return (
      <IonPage className="ion_page">
        <IonHeader className="ion-no-border ion_header">
          <IonToolbar>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion_content">
          <IonList className="ion_list">
            <img
              alt="my-img"
              className="mx-auto rounded-circle Synkd_Logo"
              src={require("../images/limg3.png")}
            ></img>
          </IonList>
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap ion_label1">{name}</IonLabel>
          </IonItem>
          <IonItem lines="none" className="loginbtn_item">
            <IonButton
              className="login_btn"
              buttonType="button"
              shape="round"
              size="default"
              color="medium"
            >
              Create a New Home
            </IonButton>
          </IonItem>
          <IonGrid className="login_grid">
            <IonRow>
              <IonCol size="4" className="col_line">
                <hr
                  style={{
                    color: "grey",
                    backgroundColor: "grey",
                    height: 1,
                  }}
                ></hr>
              </IonCol>
              <IonCol className="col_or" size="1.7" style={{ color: "black" }}>
                OR
              </IonCol>
              <IonCol size="4" className="col_line2">
                <hr
                  style={{
                    color: "grey",
                    backgroundColor: "grey",
                    height: 1,
                  }}
                ></hr>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonItem lines="none" style={{ paddingTop: "2.5rem" }}>
            <IonButton
              className="login_btn"
              buttonType="button"
              shape="round"
              size="default"
              color="medium"
            >
              Join A Home
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

export default AddHomePage;
