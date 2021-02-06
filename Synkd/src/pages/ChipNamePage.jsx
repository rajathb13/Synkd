import React from "react";
import {
  IonPage,
  IonItem,
  IonToast,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonInput,
} from "@ionic/react";
import { hardwareChip } from "ionicons/icons";
import "./BuilderChip.css";
import Modal from "simple-react-modal";

var fieldTitle = "";
var data = "";
var auth_token = "";

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

class ChipNamePage extends React.Component {
  constructor() {
    super();
    auth_token = JSON.parse(localStorage.getItem("token"));
    this.state = {
      name: "",
      roomid: "",
      state: "0",
      mac: "",
    };
    this.close = this.close.bind(this);
  }
  show() {
    this.setState({ show: true });
  }
  componentDidMount() {
    var macAdd = JSON.parse(localStorage.getItem("mac"));
    this.setState({ mac: macAdd });
    var id = JSON.parse(localStorage.getItem("roomid"));
    this.setState({ roomid: id });
  }

  NextFn() {
    fetch("https://clickademy.in/", {
      method: "GET",
    })
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
          //console.log(result);
          console.log("success");
          //this.props.history.push({ pathname: "ChipLoad" });
        } else {
          fieldTitle = "Not Connected to WIFI";
          this.handleToast();
        }
      })
      .catch((error) => {
        console.log("Not Connected to WIFI", error);
      });
    this.show();
  }

  CreateFn() {
    if (!this.state.name) {
      fieldTitle = "Please enter Chip Name";
      this.handleToast();
    }
    if (this.state.name) {
      data = this.state;
      console.log(data);
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
      this.props.history.push({ pathname: "/ChipLoad" });
    }
  }

  close() {
    this.setState({ show: false });
  }

  render() {
    return (
      <IonPage>
        <IonHeader className="head">
          <IonToolbar>
            <IonTitle size="small">Create Chip</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem lines="none">
          <p className="desc_ion">
            Please Connect back to the WIFI. Once connected click Next{" "}
          </p>
        </IonItem>
        <IonButton
          className="button_con"
          buttonType="button"
          shape="round"
          size="default"
          color="dark"
          onClick={() => this.NextFn()}
        >
          Next
        </IonButton>
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
              <IonButton className="contBod" onClick={() => this.CreateFn()}>
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
      </IonPage>
    );
  }
}

export default ChipNamePage;
