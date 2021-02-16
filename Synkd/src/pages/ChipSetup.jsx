import {
  IonContent,
  IonPage,
  IonToast,
  IonIcon,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonItem,
  IonSegmentButton,
  IonSegment,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonNote,
  IonTextarea,
} from "@ionic/react";
import { hardwareChip, addCircle } from "ionicons/icons";
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

var fieldTitle = "";
var data = "";
var auth_token = "";

class ChipSetup extends React.Component {
  constructor() {
    super();
    auth_token = JSON.parse(localStorage.getItem("token"));
    this.state = {
      name: "",
      roomid: "",
      mac: "",
    };
    this.close = this.close.bind(this);
  }
  show() {
    this.setState({ show: true });
  }

  componentDidMount() {
    var id = JSON.parse(localStorage.getItem("roomid"));
    this.setState({ roomid: id });
    //console.log(id);
  }

  handleToast() {
    this.setState({
      tshow: !this.state.tshow,
    });
  }

  NextFn() {
    if (!this.state.name) {
      fieldTitle = "Please enter Chip Name";
      this.handleToast();
    }
    if (this.state.name) {
      data = this.state;
      localStorage.setItem("ChipName", JSON.stringify(this.state.name));
      this.props.history.push({ pathname: "/BuilderChip" });
    }
  }

  close() {
    this.setState({ show: false });
  }
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Chip Setup</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonSegment color="secondary">
            <IonSegmentButton type="button" onClick={() => this.show()}>
              <IonIcon icon={addCircle} style={{ fontSize: "28px" }}></IonIcon>
            </IonSegmentButton>
          </IonSegment>

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

export default ChipSetup;
