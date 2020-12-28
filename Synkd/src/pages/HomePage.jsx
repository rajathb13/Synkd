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
  IonSegmentButton,
  IonLabel,
  IonSegment,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import React from "react";
import "./LoginPage.css";

import {
  home,
  peopleCircleOutline,
  logoAndroid,
  addCircle,
} from "ionicons/icons";
import SideMenuPage from "./SideMenuPage";
import Footer from "./Footer";
import SF from "./SF";
import { setupConfig } from "@ionic/react";

const contentStyle = {
  display: "flex",
  height: "90%",

  justifyContent: "center",
  fontSize: "60px",
};

class Homepage extends React.Component {
  async componentDidMount() {
    localStorage.setItem("UPage", JSON.stringify("/EHomePage"));
    setupConfig({
      hardwareBackButton: false,
    });
  }

  IconFn() {
    this.props.history.push({ pathname: "/RoomIcon" });
  }

  nextfn() {
    this.props.history.push({ pathname: "/RoomIcon" });
    /*
     display: "flex",
  height: "150px",
  width: "150px",
  marginLeft: "7rem",
  marginTop: "13rem",
    */
  }

  render() {
    return (
      <IonPage>
        <SideMenuPage />
        <IonContent>
          <IonItem
            className="ion-justify-content-center"
            style={{ alignItem: "center" }}
            lines="none"
          >
            <IonButton
              style={contentStyle}
              icon-only
              fill="clear"
              onClick={() => {
                this.IconFn();
              }}
            >
              <IonIcon
                color="dark"
                style={{ fontSize: "100px" }}
                icon={addCircle}
              ></IonIcon>
            </IonButton>
          </IonItem>
        </IonContent>
        <SF />
      </IonPage>
    );
  }
}

export default Homepage;
