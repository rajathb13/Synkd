import React from "react";
import { IonIcon, IonToolbar, IonFooter, IonButton } from "@ionic/react";
import { home, people, logoAndroid } from "ionicons/icons";

class Footer extends React.Component {
  NextFn() {
    this.props.history.push({ pathname: "/PHomePage" });
  }
  render() {
    return (
      <IonFooter>
        <IonToolbar>
          <IonButton
            onClick={() => this.NextFn()}
            style={{ paddingLeft: "2rem" }}
            icon-only
            fill="clear"
          >
            <IonIcon
              color="dark"
              size="large"
              slot="icon-only"
              icon={home}
            ></IonIcon>
          </IonButton>
          <IonButton style={{ paddingLeft: "4.5rem" }} icon-only fill="clear">
            <IonIcon
              color="dark"
              size="large"
              slot="icon-only"
              icon={people}
            ></IonIcon>
          </IonButton>
          <IonButton style={{ paddingLeft: "4.5rem" }} icon-only fill="clear">
            <IonIcon
              color="dark"
              size="large"
              slot="icon-only"
              icon={logoAndroid}
            ></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonFooter>
    );
  }
}

export default Footer;
