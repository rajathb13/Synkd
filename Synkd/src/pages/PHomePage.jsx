import {
  IonContent,
  IonPage,
  IonTabs,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonButton,
  IonHeader,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import axios from "axios";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import React from "react";
import "./LoginPage.css";
import rjson from "./rooms.json";
import { home, peopleCircleOutline, logoAndroid } from "ionicons/icons";
import SideMenuPage from "./SideMenuPage";
import { setupConfig } from "@ionic/react";
import SF from "./SF";

var data_list = [];
var objData;
var auth_token;
var fieldTitle = "";

class PHomepage extends React.Component {
  constructor(props) {
    super(props);
    auth_token = JSON.parse(localStorage.getItem("token"));
    this.state = {
      homeid: "",
      rname: "",
      ricon: "",
      items: [],
    };
  }

  async componentDidMount() {
    localStorage.setItem("UPage", JSON.stringify("/PHomePage"));
    var homeid1 = JSON.parse(localStorage.getItem("homeid"));
    this.setState({ homeid: homeid1 });
  }

  getRoomInfo() {
    let data = this.state;
    console.log(data);
    fetch("https://clickademy.in/home/retrieve-rooms", {
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
          if (resp) {
            /*On success, setting the homeid in the local storage*/
            //let obj = resp.createdHome._id;
            //localStorage.setItem("homeid", JSON.stringify(obj));
            // if (resp.homeid != null) {
            //   this.props.history.push({ pathname: "/EHomePage" });
            // } else {
            //   this.props.history.push({ pathname: "/AddHomePage" });
            // }
            console.log(resp);
            // this.props.history.push({ pathname: "/PHomePage" });
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

  render() {
    return (
      <IonPage>
        <SideMenuPage />
        <IonContent>
          <IonItem lines="none" className="loginbtn_item">
            <IonButton
              className="login_btn"
              buttonType="button"
              shape="round"
              size="default"
              color="medium"
              onClick={() => {
                this.getRoomInfo();
              }}
            >
              Login
            </IonButton>
          </IonItem>
        </IonContent>
        <SF />
      </IonPage>
    );
  }
}

export default PHomepage;
