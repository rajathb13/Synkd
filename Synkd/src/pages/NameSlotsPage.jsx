/* Page lets users give names to slots */

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
import { tvSharp, bulb } from "ionicons/icons";
import "./LoginPage.css";

var fieldTitle = "";
var iname = "";
var iconname = "";
var auth_token;
var slotnumber = 1;

class NameSlots extends React.Component {
  constructor(props) {
    super(props);
    auth_token = JSON.parse(localStorage.getItem("token"));
    this.state = {
      name: "",
      mac: "",
      icon: "",
      slotnumber: "",
    };
  }

  componentDidMount() {
    var macAdd = JSON.parse(localStorage.getItem("mac"));
    this.setState({ mac: macAdd });
    iname = JSON.parse(localStorage.getItem("Slotsicon"));
    console.log(iname);
    this.setState({ icon: iname });
    this.setState({ slotnumber: slotnumber });
    if (iname === "tvSharp") {
      iname = tvSharp;
    }
    if (iname === "bulb") {
      iname = bulb;
    }
    //var homeid1 = JSON.parse(localStorage.getItem("homeid"));
    //this.setState({ homeid: homeid1 });
  }

  refreshPage() {
    window.location.reload();
  }

  CreateSlotFn() {
    if (!this.state.name) {
      fieldTitle = "Please enter a Slot Name";
      this.handleToast();
    } else {
      if (slotnumber >= 16) {
        fieldTitle = "Cannot create any more slots";
        this.handleToast();
      } else {
        console.log(slotnumber);
        this.setState({ slotnumber: slotnumber });
        var data = this.state;
        slotnumber++;
        console.log(data);
        fetch("https://clickademy.in/switchcontrollers/set-slot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth_token,
          },
          body: JSON.stringify(data),
        }).then((result) => {
          result
            .json()
            .then((resp) => {
              if (resp.message === "Slot Created") {
                //this.setState({ items: resp.rooms });
                /*On success, setting the homeid in the local storage*/
                //let obj = resp.createdHome._id;
                //localStorage.setItem("homeid", JSON.stringify(obj));
                // if (resp.homeid != null) {
                //   this.props.history.push({ pathname: "/EHomePage" });
                // } else {
                //   this.props.history.push({ pathname: "/AddHomePage" });
                // }
                console.log(resp);

                this.props.history.push({ pathname: "/LoadSlots" });
                this.refreshPage();
              } else {
                fieldTitle = "Slot not created";
                this.handleToast();
              }
            })
            .catch((error) => {
              console.log("Slot not created", error);
            });
        });
      }
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
              Let's give your Switch a name !
            </IonLabel>
          </IonItem>
          <div
            style={{
              display: "flex",
              paddingTop: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IonButton
              fill="solid"
              className="icon-btn ion-no-padding"
              shape="round"
              size="large"
              expand="block"
              color="medium"
            >
              <IonIcon icon={iname} size="large" className="io-icon"></IonIcon>
            </IonButton>
          </div>
          <IonItem className="rn-item">
            <IonInput
              className="rn-input"
              placeholder="Bedroom"
              type="text"
              inputMode="text"
              maxlength="50"
              required="true"
              value={this.state.name}
              onIonChange={(data) => {
                this.setState({ name: data.target.value });
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
                this.CreateSlotFn();
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

export default NameSlots;
