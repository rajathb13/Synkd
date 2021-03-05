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
    if (iname === "tvSharp") {
      iname = tvSharp;
      this.setState({ icon: iname });
    }
    if (iname === "bulb") {
      iname = bulb;
      this.setState({ icon: iname });
    }
    //var homeid1 = JSON.parse(localStorage.getItem("homeid"));
    //this.setState({ homeid: homeid1 });
  }

  refreshPage() {
    window.location.reload();
  }

  CreateSlotFn() {
    var result = "";
    if (!this.state.name || !this.state.slotnumber) {
      fieldTitle = "Both Fields are Required";
      this.handleToast();
    }
    if (this.state.slotnumber && this.state.name) {
      if (this.state.slotnumber > 16) {
        fieldTitle = "Slot numbers must be between 1-16";
        this.handleToast();
      }
      if (this.state.slotnumber <= 0) {
        fieldTitle = "Slot numbers must be between 1-16";
        this.handleToast();
      }
      result = true;
    } else {
      var data = this.state;
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
            if (resp) {
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
          <IonItem className="rn-item">
            <IonInput
              className="rn-input"
              placeholder="Enter Slot Number(1-16)"
              inputMode="tel"
              maxlength="2"
              required="true"
              value={this.state.slotnumber}
              onIonChange={(data) => {
                this.setState({ slotnumber: data.target.value });
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
