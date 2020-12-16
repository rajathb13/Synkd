import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import "./LoginPage.css";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonButton,
  IonGrid,
  IonImg,
} from "@ionic/react";

class Homepage extends React.Component {
  render() {
    return (
      <IonPage className="ion_page">
        <IonHeader className="ion-no-border ion_header">
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion_content"></IonContent>
      </IonPage>
    );
  }
}

export default Homepage;
