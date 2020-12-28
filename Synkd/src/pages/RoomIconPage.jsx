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
import { bedSharp, fastFoodOutline, logoAndroid } from "ionicons/icons";
import { FaShower } from "react-icons/fa";
import "./LoginPage.css";
import { withRouter } from "react-router-dom";

class RoomIcon extends React.Component {
  nextfn() {
    this.props.history.push({ pathname: "/NameRoom" });
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
                onClick={() => this.nextfn()}
              >
                <IonIcon
                  icon={bedSharp}
                  size="large"
                  className="io-icon"
                ></IonIcon>
              </IonButton>
              <IonLabel className="icon_label1">Bedroom</IonLabel>
            </IonCol>
            <IonCol className="icon-col">
              <IonButton
                fill="solid"
                className="icon-btn ion-no-padding"
                shape="round"
                size="large"
                expand="block"
                color="medium"
                onClick={() => this.nextfn()}
              >
                <IonIcon
                  icon={fastFoodOutline}
                  size="large"
                  className="io-icon"
                >
                  <IonLabel>Bedroom</IonLabel>
                </IonIcon>
              </IonButton>
            </IonCol>
            <IonCol className="icon-col">
              <IonButton
                fill="solid"
                className="icon-btn ion-no-padding"
                shape="round"
                size="large"
                expand="block"
                color="medium"
                onClick={() => this.nextfn()}
              >
                <FaShower className="shower-icon" />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="icon-col">
              <IonButton
                fill="solid"
                className="icon-btn ion-no-padding"
                shape="round"
                size="large"
                expand="block"
                color="medium"
              >
                <FaShower className="shower-icon" />
              </IonButton>
            </IonCol>
            <IonCol className="icon-col">
              <IonButton
                fill="solid"
                className="icon-btn ion-no-padding"
                shape="round"
                size="large"
                expand="block"
                color="medium"
              >
                <FaShower className="shower-icon" />
              </IonButton>
            </IonCol>
            <IonCol className="icon-col">
              <IonButton
                fill="solid"
                className="icon-btn ion-no-padding"
                shape="round"
                size="large"
                expand="block"
                color="medium"
              >
                <FaShower className="shower-icon" />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonPage>
    );
  }
}

export default withRouter(RoomIcon);
