import React from "react";
import {
  IonPage,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { hardwareChip } from "ionicons/icons";
import "./BuilderChip.css";

var fieldTitle = "";

var chiphomeIP = "192.168.4.1";

class BuilderChip extends React.Component {
  SettingPagefn() {
    fetch("http://" + chiphomeIP + "/mac", {
      method: "GET",
    })
      .then((result) => {
        result
          .json()
          .then((resp) => {
            if (resp.mac) {
              //this.setState({ items: resp.rooms });
              /*On success, setting the homeid in the local storage*/
              //let obj = resp.createdHome._id;
              //localStorage.setItem("homeid", JSON.stringify(obj));
              // if (resp.homeid != null) {
              //   this.props.history.push({ pathname: "/EHomePage" });
              // } else {
              //   this.props.history.push({ pathname: "/AddHomePage" });
              // }
              console.log(resp.mac);
              localStorage.setItem("mac", JSON.stringify(resp.mac));
              this.props.history.push({ pathname: "/BuilderChipWifi" });
              this.refreshPage();
            } else {
              fieldTitle = "Home not created";
              this.handleToast();
            }
          })
          .catch((error) => {
            console.log("Home not created", error);
          });
      })
      .catch((error) => {
        console.log("Wifi details not sent", error);
      });
  }

  render() {
    return (
      <IonPage>
        <IonHeader className="head">
          <IonToolbar>
            <IonTitle size="small">BUILDER CHIP SET-UP</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem lines="none">
          <p className="desc_ion">
            Please click the button on the device to enter Set-up mode. Once the
            light starts blinking, press 'Start'.{" "}
          </p>
        </IonItem>
        <IonItem lines="none">
          <p className="desc_ion">
            Please connect to the chip from the WIFI Settings Page. Once
            Connected click on start{" "}
          </p>
        </IonItem>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                className="button_ion"
                color="dark"
                size="large"
                icon-only
                fill="clear"
              >
                <IonIcon className="icon_corner" icon={hardwareChip}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton
          className="button_con"
          buttonType="button"
          shape="round"
          size="default"
          color="dark"
          onClick={() => this.SettingPagefn()}
        >
          Start
        </IonButton>
      </IonPage>
    );
  }
}

export default BuilderChip;
