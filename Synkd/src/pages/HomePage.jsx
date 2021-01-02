import {
  IonContent,
  IonPage,
  IonRow,
  IonIcon,
  IonGrid,
  IonCol,
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
import React from "react";
import "./LoginPage.css";
import { addCircle } from "ionicons/icons";
import SideMenuPage from "./SideMenuPage";
import SF from "./SF";

const contentStyle = {
  height: "300px",
  justifyContent: "center",
  width: "300px",
};

class Homepage extends React.Component {
  async componentDidMount() {
    localStorage.setItem("UPage", JSON.stringify("/EHomePage"));
  }

  IconFn() {
    this.props.history.push({ pathname: "/SelectDevice" });
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
        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <IonButton
            style={contentStyle}
            fill="clear"
            onClick={() => {
              this.IconFn();
            }}
          >
            <IonIcon
              color="dark"
              style={{ fontSize: "150px" }}
              icon={addCircle}
            ></IonIcon>
          </IonButton>
        </div>
        <SF />
      </IonPage>
    );
  }
}

export default Homepage;
