import React from "react";
import {
  IonPage,
  IonItem,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonLabel,
  IonInput,
  IonToast,
} from "@ionic/react";
import { wifi } from "ionicons/icons";
import "./BuilderChipWifi.css";

var fieldTitle = "";

var chiphomeIP = "192.168.4.1";
//192.168.4.1/chip-interface?serial_input=wifi~change-ssid|Pritivi Raj|0
//192.168.4.1/chip-interface?serial_input=wifi~change-password|shivadi2000|0
//192.168.4.1/chip-interface?serial_input=wifi~reset| |0

class BuilderChipWifi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ssid: "",
      pwd: "",
    };
  }

  handleToast() {
    this.setState({
      show: !this.state.show,
    });
  }

  nextfn() {
    console.log(this.state);
    fetch(
      "http://" +
        chiphomeIP +
        "/chip-interface?serial_input=wifi~change-ssid|" +
        this.state.ssid +
        "|0",
      {
        method: "GET",
      }
    )
      .then((result) => {
        if (result.status === 200) {
          /*On success, setting the homeid in the local storage*/
          //let obj = resp.createdHome._id;
          //localStorage.setItem("homeid", JSON.stringify(obj));
          // if (resp.homeid != null) {
          //   this.props.history.push({ pathname: "/EHomePage" });
          // } else {
          //   this.props.history.push({ pathname: "/AddHomePage" });
          // }
          console.log(result);
          //console.log("success");
          // this.props.history.push({ pathname: "ChipLoad" });
        } else {
          fieldTitle = "SSID details not sent";
          this.handleToast();
        }
      })
      .catch((error) => {
        console.log("SSID details not sent", error);
      });
    fetch(
      "http://" +
        chiphomeIP +
        "/chip-interface?serial_input=wifi~change-password|" +
        this.state.pwd +
        "|0",
      {
        method: "GET",
      }
    )
      .then((result) => {
        if (result) {
          /*On success, setting the homeid in the local storage*/
          //let obj = resp.createdHome._id;
          //localStorage.setItem("homeid", JSON.stringify(obj));
          // if (resp.homeid != null) {
          //   this.props.history.push({ pathname: "/EHomePage" });
          // } else {
          //   this.props.history.push({ pathname: "/AddHomePage" });
          // }
          console.log(result);

          // this.props.history.push({ pathname: "/PHomePage" });
        } else {
          fieldTitle = "Password Not changed";
          this.handleToast();
        }
      })
      .catch((error) => {
        console.log("Password Not changed", error);
      });
    fetch(
      "http://" + chiphomeIP + "/chip-interface?serial_input=wifi~reset| |0",
      {
        method: "GET",
      }
    )
      .then((result) => {
        if (result.status === 200) {
          /*On success, setting the homeid in the local storage*/
          //let obj = resp.createdHome._id;
          //localStorage.setItem("homeid", JSON.stringify(obj));
          // if (resp.homeid != null) {
          //   this.props.history.push({ pathname: "/EHomePage" });
          // } else {
          //   this.props.history.push({ pathname: "/AddHomePage" });
          // }
          console.log(result);
          console.log("success");
          this.props.history.push({ pathname: "ChipLoad" });
        } else {
          fieldTitle = "Chip not reset";
          this.handleToast();
        }
      })
      .catch((error) => {
        console.log("Chip not reset", error);
      });
    // setTimeout(() => {

    // }, 500);
  }

  render() {
    return (
      <IonPage>
        <IonHeader className="head">
          <IonToolbar>
            <IonTitle size="small">BUILDER CHIP SET-UP</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem lines="none" className="desc">
          <p className="desc_ion_wifi">
            Please enter the credentials for the desired Wi-Fi network
          </p>
        </IonItem>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                className="button_ion_wifi"
                color="dark"
                size="large"
                disabled="true"
                icon-only
                fill="clear"
              >
                <IonIcon className="icon_corner_wifi" icon={wifi}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonInput
              placeholder="Wifi Network"
              style={{ backgroundColor: "grey" }}
              value={this.state.ssid}
              onIonChange={(data) => {
                this.setState({ ssid: data.target.value });
              }}
            ></IonInput>
          </IonRow>
          <IonRow>
            <IonInput
              placeholder="Password"
              style={{ backgroundColor: "grey" }}
              value={this.state.pwd}
              onIonChange={(data) => {
                this.setState({ pwd: data.target.value });
              }}
            ></IonInput>
          </IonRow>
        </IonGrid>
        <IonButton
          className="button_con"
          shape="round"
          size="default"
          color="dark"
          onClick={() => this.nextfn()}
        >
          Verify
        </IonButton>
        <IonToast
          isOpen={this.state.show}
          onDidDismiss={() => this.handleToast()}
          message={fieldTitle}
          duration={3000}
        />
      </IonPage>
    );
  }
}

export default BuilderChipWifi;
