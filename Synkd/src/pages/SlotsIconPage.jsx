/* This apge lets user choose icons for the slots */

import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import React from "react";
import { tvSharp, bulb } from "ionicons/icons";
//import { FaShower } from "react-icons/fa";
import "./LoginPage.css";
import { withRouter } from "react-router-dom";

class SlotsIconPage extends React.Component {
  refreshPage() {
    window.location.reload();
  }

  TVfn() {
    localStorage.setItem("Slotsicon", JSON.stringify("tvSharp"));
    this.props.history.push({ pathname: "/NameSlots" });
    this.refreshPage();
  }
  BulbFn() {
    localStorage.setItem("Slotsicon", JSON.stringify("bulb"));
    this.props.history.push({ pathname: "/NameSlots" });
    this.refreshPage();
  }

  render() {
    return (
      <IonPage>
        <IonLabel className="icon-label">Pick an icon</IonLabel>
        <IonGrid className="icon-grid">
          <IonRow className="icon-row">
            <IonCol className="icon-col">
              <IonButton
                fill="solid"
                className="icon-btn ion-no-padding"
                shape="round"
                size="large"
                expand="block"
                color="medium"
                onClick={() => this.TVfn()}
              >
                <IonIcon
                  icon={tvSharp}
                  size="large"
                  className="io-icon"
                ></IonIcon>
              </IonButton>
              <br></br>
              <IonLabel className="icon_label1">TV</IonLabel>
            </IonCol>
            <IonCol className="icon-col">
              <IonButton
                fill="solid"
                className="icon-btn ion-no-padding"
                shape="round"
                size="large"
                expand="block"
                color="medium"
                onClick={() => this.BulbFn()}
              >
                <IonIcon icon={bulb} size="large" className="io-icon"></IonIcon>
              </IonButton>
              <IonLabel>Light</IonLabel>
            </IonCol>
            <IonCol className="icon-col">
              <IonButton
                fill="solid"
                className="icon-btn ion-no-padding"
                shape="round"
                size="large"
                expand="block"
                color="medium"
                onClick={() => this.BulbFn()}
              >
                <IonIcon icon={bulb} size="large" className="io-icon"></IonIcon>
              </IonButton>
              <IonLabel>Light</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow></IonRow>
        </IonGrid>
      </IonPage>
    );
  }
}

export default withRouter(SlotsIconPage);
