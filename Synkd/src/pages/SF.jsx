import React from "react";
import {
  IonSegmentButton,
  IonSegment,
  IonIcon,
  IonLabel,
  IonFooter,
  IonToolbar,
} from "@ionic/react";
import { home, peopleCircleOutline, logoAndroid } from "ionicons/icons";
import { withRouter } from "react-router-dom";

class SF extends React.Component {
  nextfn() {
    this.props.history.push({ pathname: "/EHomePage" });
  }

  render() {
    return (
      <IonFooter>
        <IonToolbar>
          <IonSegment color="secondary" scrollable="false" swipeGesture="false">
            <IonSegmentButton
              value="standard"
              type="button"
              onClick={() => this.nextfn()}
            >
              <IonIcon icon={home} style={{ fontSize: "28px" }}></IonIcon>
              <IonLabel style={{ fontSize: "13px" }}>Home</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton
              value="hybrid"
              type="button"
              style={{ paddingLeft: "20px" }}
              onClick={() => this.nextfn()}
            >
              <IonIcon
                style={{ fontSize: "28px" }}
                icon={peopleCircleOutline}
              ></IonIcon>
              <IonLabel style={{ fontSize: "13px" }}>Groups</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton
              value="sat"
              type="button"
              style={{ paddingLeft: "5px" }}
              onClick={() => this.nextfn()}
            >
              <IonIcon
                style={{ fontSize: "28px" }}
                icon={logoAndroid}
              ></IonIcon>
              <IonLabel style={{ fontSize: "13px" }}>Automation</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonFooter>
    );
  }
}

export default withRouter(SF);
