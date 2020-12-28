import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonInput,
  IonContent,
  IonItem,
  IonToast,
} from "@ionic/react";
import React from "react";
import { bedSharp, fastFoodOutline, logoAndroid } from "ionicons/icons";
import { FaShower } from "react-icons/fa";
import "./LoginPage.css";

var fieldTitle = "";

class NameRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomname: "",
    };
  }

  nextfn() {
    if (!this.state.roomname) {
      fieldTitle = "Please enter a Room Name";
      this.handleToast();
    } else {
      this.props.history.push({ pathname: "/PHomePage" });
    }
  }

  handleToast() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <IonPage className="rn-page">
        <IonContent className="ion-content">
          <IonItem lines="none" className="room_name">
            <IonLabel className="ion-text-wrap ion_label1">
              Let's give your new home a name !
            </IonLabel>
          </IonItem>
          <IonGrid style={{ alignItems: "center" }}>
            <IonRow style={{ alignItems: "center" }}>
              <IonCol className="rn-col">
                <IonButton
                  fill="solid"
                  className="icon-btn ion-no-padding"
                  shape="round"
                  size="large"
                  expand="block"
                  color="medium"
                >
                  <IonIcon
                    icon={bedSharp}
                    size="large"
                    className="io-icon"
                  ></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonItem className="rn-item">
            <IonInput
              className="rn-input"
              placeholder="Bedroom"
              type="text"
              inputMode="text"
              maxlength="50"
              required="true"
              value={this.state.roomname}
              onIonChange={(data) => {
                this.setState({ roomname: data.target.value });
              }}
            ></IonInput>
          </IonItem>
          <IonItem lines="none" className="loginbtn_item">
            <IonButton
              className="rn-btn"
              buttonType="button"
              shape="round"
              size="default"
              color="medium"
              onClick={() => {
                this.nextfn();
              }}
            >
              Next
            </IonButton>
          </IonItem>
          <IonToast
            isOpen={this.state.show}
            onDidDismiss={() => this.handleToast()}
            message={fieldTitle}
            duration={3000}
          />
        </IonContent>
      </IonPage>
    );
  }
}

export default NameRoom;
