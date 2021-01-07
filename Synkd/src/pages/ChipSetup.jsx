import {
  IonContent,
  IonPage,
  IonGrid,
  IonIcon,
  IonRow,
  IonCol,
  IonButton,
  IonLabel,
  IonItem,
  IonSegmentButton,
  IonSegment,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonNote,
  IonTextarea,
} from "@ionic/react";
import {
  home,
  peopleCircleOutline,
  logoAndroid,
  bedSharp,
  fastFoodOutline,
  addCircleOutline,
  addCircle,
} from "ionicons/icons";
import React from "react";
import "./LoginPage.css";
import Modal from "simple-react-modal";

const test = {
  borderRadius: "1rem",
  width: "15rem",
  height: "12rem",
  margin: "0px auto",
  display: "table",
  position: "absolute",
  left: "50%",
  right: "50%",
  top: "50%",
  border: "1px solid",
  transform: "translate(-50%, -50%)",
  padding: "5px 20px 13px",
  background: "rgb(255, 255, 255)",
};

class ChipSetup extends React.Component {
  constructor() {
    super();
    this.state = {
      lname: "",
    };
    this.close = this.close.bind(this);
  }
  show() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
  }
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>SegmentExamples</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonSegment color="secondary" scrollable="true">
            <IonSegmentButton type="button">
              <IonIcon icon={addCircle} style={{ fontSize: "28px" }}></IonIcon>
              <IonLabel style={{ fontSize: "13px" }}>Chip1</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton type="button" style={{ paddingLeft: "20px" }}>
              <IonIcon style={{ fontSize: "28px" }} icon={addCircle}></IonIcon>
              <IonLabel style={{ fontSize: "13px" }}>Groups</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton type="button" style={{ paddingLeft: "20px" }}>
              <IonIcon style={{ fontSize: "28px" }} icon={addCircle}></IonIcon>
              <IonLabel style={{ fontSize: "13px" }}>Groups</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton type="button" style={{ paddingLeft: "20px" }}>
              <IonIcon style={{ fontSize: "28px" }} icon={addCircle}></IonIcon>
              <IonLabel style={{ fontSize: "13px" }}>Groups</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton type="button" style={{ paddingLeft: "20px" }}>
              <IonIcon style={{ fontSize: "28px" }} icon={addCircle}></IonIcon>
              <IonLabel style={{ fontSize: "13px" }}>Groups</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton
              value="sat"
              type="button"
              style={{ paddingLeft: "5px" }}
            >
              <IonIcon style={{ fontSize: "28px" }} icon={addCircle}></IonIcon>
              <IonLabel style={{ fontSize: "13px" }}>Automation</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <IonGrid>
            <IonRow>
              <IonCol className="phome-col ion-align-self-center" size="3">
                <IonButton
                  fill="solid"
                  className="device-btn ion-no-padding"
                  shape="round"
                  size="large"
                  expand="block"
                  color="medium"
                  onClick={() => this.show()}
                >
                  <IonIcon
                    icon={addCircleOutline}
                    size="large"
                    className="io-icon"
                  ></IonIcon>
                </IonButton>
              </IonCol>
              <IonCol className="phome-col ion-align-self-center" size="3">
                <IonButton
                  fill="solid"
                  className="device-btn ion-no-padding"
                  shape="round"
                  size="large"
                  expand="block"
                  color="medium"
                  onClick={() => this.show()}
                >
                  <IonIcon
                    icon={addCircleOutline}
                    size="large"
                    className="io-icon"
                  ></IonIcon>
                </IonButton>
              </IonCol>
              <IonCol className="phome-col ion-align-self-center" size="3">
                <IonButton
                  fill="solid"
                  className="device-btn ion-no-padding"
                  shape="round"
                  size="large"
                  expand="block"
                  color="medium"
                  onClick={() => this.show()}
                >
                  <IonIcon
                    icon={addCircleOutline}
                    size="large"
                    className="io-icon"
                  ></IonIcon>
                </IonButton>
              </IonCol>
              <IonCol className="phome-col ion-align-self-center" size="3">
                <IonButton
                  fill="solid"
                  className="device-btn ion-no-padding"
                  shape="round"
                  size="large"
                  expand="block"
                  color="medium"
                  onClick={() => this.show()}
                >
                  <IonIcon
                    icon={addCircleOutline}
                    size="large"
                    className="io-icon"
                  ></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <Modal
            containerStyle={test}
            show={this.state.show}
            onClose={this.close}
          >
            <IonHeader className="head contHead">Emergency</IonHeader>
            <IonNote
              className="contBod"
              style={{
                paddingLeft: "6rem",
              }}
            >
              Call 108
              <IonIcon
                style={{
                  paddingLeft: "0.3rem",
                }}
                icon={bedSharp}
              ></IonIcon>
            </IonNote>
            <IonItem>
              <IonTextarea
                className="contBod"
                style={{
                  width: "15rem",
                }}
                spellcheck="true"
                color="dark"
                placeholder="Type your Emergency message here..."
                rows="4"
                cols="50"
              />
            </IonItem>
            <IonRow>
              <IonSegment>
                <IonSegmentButton value="Self">
                  <IonLabel className="contBod">Self</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Others">
                  <IonLabel className="contBod">Others</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonRow>
            <IonRow>
              <IonCol size="1"></IonCol>
              <IonCol size="4">
                <IonButton className="contBod">Submit</IonButton>
              </IonCol>
              <IonCol size="1"></IonCol>
              <IonCol size="4">
                <IonButton className="contBod" onClick={() => this.close()}>
                  Cancel
                </IonButton>
              </IonCol>
              <IonCol size="1"></IonCol>
            </IonRow>
          </Modal>
        </IonContent>
      </IonPage>
    );
  }
}

export default ChipSetup;
