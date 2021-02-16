/* This page loads all the slots available for a chip*/

import {
  IonContent,
  IonPage,
  IonInput,
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
  IonToast,
  IonFooter,
  IonGrid,
} from "@ionic/react";
import { hardwareChip, addCircle } from "ionicons/icons";
import React from "react";
import "./LoginPage.css";
import Modal from "simple-react-modal";
import { withRouter } from "react-router";

var defaultChipName = "";
var iconname = "";
var macaddress = require("macaddress");

const contentStyle = {
  height: "90px",
  justifyContent: "center",
  width: "90px",
};

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

var fieldTitle = "";
var data = "";
var auth_token = "";

const Arpping = require("arpping");
var arpping = new Arpping({
  timeout: 4,
  includeEndpoints: true,
  useCache: true,
  cacheTimeout: 30,
});

///room/retrieve-switchcontrollers
class LoadSlots extends React.Component {
  constructor() {
    super();
    auth_token = JSON.parse(localStorage.getItem("token"));
    this.state = {
      roomid: "",
      switchitems: [],
      slotsItems: [],
      name: "",
      state: "0",
      mac: "",
    };
    this.close = this.close.bind(this);
  }
  show() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
  }

  refreshPage() {
    window.location.reload();
  }

  componentDidMount() {
    var id = JSON.parse(localStorage.getItem("roomid"));
    this.setState({ roomid: id });
    var macAdd = JSON.parse(localStorage.getItem("mac"));
    this.setState({ mac: macAdd });
    setTimeout(() => {
      this.LoadFn();
    }, 500);
    setTimeout(() => {
      this.getSlotsInfo();
    }, 500);
    defaultChipName = JSON.parse(localStorage.getItem("ChipName"));
    this.arpfn();
  }

  arpfn() {
    arpping
      .findMyInfo()
      .then((info) => console.log(info)) // ex. {"ip": "192.168.0.20", "mac": "01:23:45:67:89:01", "type": "RaspberryPi"}
      .catch((err) => console.log(err));
  }

  handleToast() {
    this.setState({
      tshow: !this.state.tshow,
    });
  }

  getSlotsInfo() {
    fetch("https://clickademy.in/switchcontrollers/retrieve-slots", {
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
            this.setState({ slotsItems: resp.slots });
            /*On success, setting the homeid in the local storage*/
            //let obj = resp.createdHome._id;
            //localStorage.setItem("homeid", JSON.stringify(obj));
            // if (resp.homeid != null) {
            //   this.props.history.push({ pathname: "/EHomePage" });
            // } else {
            //   this.props.history.push({ pathname: "/AddHomePage" });
            // }
            iconname = resp.slots.sloticon;
            console.log(resp);

            //this.props.history.push({ pathname: "/BuilderChip" });
            //this.refreshPage();
          } else {
            fieldTitle = "Home not created";
            this.handleToast();
          }
        })
        .catch((error) => {
          console.log("Home not created", error);
        });
    });
  }

  NewSlotFn() {
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

            //this.props.history.push({ pathname: "/BuilderChip" });
            //this.refreshPage();
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

  NextFn() {
    if (!this.state.name) {
      fieldTitle = "Please enter Chip Name";
      this.handleToast();
    } else {
      data = this.state;
      fetch("https://clickademy.in/switchcontrollers/create", {
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
              this.setState({ items: resp.rooms });
              /*On success, setting the homeid in the local storage*/
              //let obj = resp.createdHome._id;
              //localStorage.setItem("homeid", JSON.stringify(obj));
              // if (resp.homeid != null) {
              //   this.props.history.push({ pathname: "/EHomePage" });
              // } else {
              //   this.props.history.push({ pathname: "/AddHomePage" });
              // }
              console.log(resp);

              //this.props.history.push({ pathname: "/BuilderChip" });
              //this.refreshPage();
            } else {
              fieldTitle = "Home not created";
              this.handleToast();
            }
          })
          .catch((error) => {
            console.log("Home not created", error);
          });
      });
      this.props.history.push({ pathname: "/ChipLoad" });
    }
  }

  LoadFn() {
    data = this.state;
    fetch("https://clickademy.in/room/retrieve-switchcontrollers", {
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
            this.setState({ switchitems: resp.switchControllers });
            /*On success, setting the homeid in the local storage*/
            //let obj = resp.createdHome._id;
            //localStorage.setItem("homeid", JSON.stringify(obj));
            // if (resp.homeid != null) {
            //   this.props.history.push({ pathname: "/EHomePage" });
            // } else {
            //   this.props.history.push({ pathname: "/AddHomePage" });
            // }
            //console.log(resp.switchControllers);

            //this.props.history.push({ pathname: "/ChipLoad" });
          } else {
            fieldTitle = "Home not created";
            this.handleToast();
          }
        })
        .catch((error) => {
          console.log("Home not created", error);
        });
    });
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Slots</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonSegment
            color="secondary"
            scrollable="true"
            value={defaultChipName}
          >
            {this.state.switchitems.map((item, index) => {
              return (
                <IonSegmentButton
                  type="button"
                  id={item.mac}
                  onClick={this.displayfn}
                  value={item.name}
                >
                  <IonLabel style={{ fontSize: "13px" }}>{item.name}</IonLabel>
                </IonSegmentButton>
              );
            })}
            <IonSegmentButton type="button" onClick={() => this.show()}>
              <IonIcon
                icon={addCircle}
                size="large"
                className="io-icon"
              ></IonIcon>
            </IonSegmentButton>
          </IonSegment>
          <IonGrid className="phome-grid">
            <IonRow className="phome-row">
              {this.state.slotsItems.map((item, index) => {
                return (
                  <IonCol className="phome-col ion-align-self-center" size="4">
                    <IonButton
                      fill="solid"
                      className="icon-btn ion-no-padding"
                      shape="round"
                      size="large"
                      expand="block"
                      color="medium"
                      id={item._id}
                      onClick={this.displayfn}
                    >
                      <IonIcon
                        icon={item.sloticon}
                        size="large"
                        className="io-icon"
                      ></IonIcon>
                    </IonButton>
                    <br />
                    <IonLabel className="icon_label1">{item.slotname}</IonLabel>
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>

          <IonItem lines="none" className="ion-float-right"></IonItem>

          <IonFooter className="ion-no-border" style={{ textAlign: "end" }}>
            <IonButton
              mode="md"
              style={contentStyle}
              fill="clear"
              onClick={() => {
                this.NewSlotFn();
              }}
            >
              <IonIcon
                color="dark"
                style={{ fontSize: "150px" }}
                icon={addCircle}
              ></IonIcon>
            </IonButton>
          </IonFooter>
          <Modal
            containerStyle={test}
            show={this.state.show}
            onClose={this.close}
          >
            <IonHeader
              className="head contHead"
              style={{ textAlign: "center", height: "30px", paddingTop: "5px" }}
            >
              ChipSetup
            </IonHeader>
            <div
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "180px",
                width: "180px",
              }}
            >
              <IonButton
                fill="solid"
                className="icon-btn ion-no-padding"
                style={{ paddingTop: "5px", height: "100px", width: "100px" }}
                shape="round"
                size="large"
                expand="block"
                color="medium"
              >
                <IonIcon icon={hardwareChip} size="large" className="io-icon">
                  Add Icon
                </IonIcon>
              </IonButton>
            </div>
            <IonItem>
              <IonInput
                style={{ color: "black" }}
                placeholder="Chip Name"
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

            <IonRow style={{ paddingTop: "10px" }}>
              <IonCol size="6">
                <IonButton className="contBod" onClick={() => this.NextFn()}>
                  Submit
                </IonButton>
              </IonCol>

              <IonCol size="6">
                <IonButton className="contBod" onClick={() => this.close()}>
                  Cancel
                </IonButton>
              </IonCol>
            </IonRow>
          </Modal>
          <IonToast
            isOpen={this.state.tshow}
            onDidDismiss={() => this.handleToast()}
            message={fieldTitle}
            duration={3000}
          />
        </IonContent>
      </IonPage>
    );
  }
}

export default withRouter(LoadSlots);
