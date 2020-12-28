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

class PHomepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      rname: "",
      ricon: "",
      items: [],
    };
  }

  async componentDidMount() {
    localStorage.setItem("UPage", JSON.stringify("/PHomePage"));
    setupConfig({
      hardwareBackButton: false,
    });
    this.setState({ items: rjson });
    console.log(this.state);
    console.log(rjson);
  }

  render() {
    return (
      <IonPage>
        <SideMenuPage />
        <IonContent></IonContent>
        <SF />
      </IonPage>
    );
  }
}

export default PHomepage;
