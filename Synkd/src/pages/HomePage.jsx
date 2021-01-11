import {
  IonContent,
  IonPage,
  IonRow,
  IonIcon,
  IonGrid,
  IonCol,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonButton,
  IonHeader,
  IonTabBar,
  IonSegmentButton,
  IonLabel,
  IonSegment,
  IonLoading,
} from "@ionic/react";
import React, { useState } from "react";
import "./LoginPage.css";
import { addCircle } from "ionicons/icons";
import SideMenuPage from "./SideMenuPage";
import SF from "./SF";
import Loader from "react-loader-spinner";

const contentStyle = {
  height: "300px",
  justifyContent: "center",
  width: "300px",
};

var auth_token = "";
var homeid = "";
var data = "";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeid: "",
      loading: true,
    };
  }

  async componentDidMount() {
    localStorage.setItem("UPage", JSON.stringify("/EHomePage"));
    auth_token = JSON.parse(localStorage.getItem("token"));
    homeid = JSON.parse(localStorage.getItem("homeid"));
    this.setState({ homeid: homeid });
    this.setState({ loading: true });
    setTimeout(() => {
      this.roomsExist();
    }, 50);
  }

  refreshPage() {
    window.location.reload();
  }

  roomsExist() {
    data = this.state;
    fetch("https://clickademy.in/home/retrieve-rooms", {
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
          if (resp.rooms != null) {
            console.log(resp);
            /*On success, setting the user name in the local storage*/
            this.props.history.push({ pathname: "/PHomePage" });
            this.refreshPage();
          } else {
            //this.props.history.push({ pathname: "/EHomePage" });
            //this.refreshPage();
          }
        })
        .catch((error) => {
          console.log("Invalid email or Wrong Password", error);
        });
    });
  }
  spinnerfn() {
    return (
      <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }

  IconFn() {
    this.props.history.push({ pathname: "/RoomIcon" });
  }

  handleToast() {
    this.setState({
      show: !this.state.show,
    });
  }

  nextfn() {
    this.props.history.push({ pathname: "/RoomIcon" });
    /*
     display: "flex",
  height: "150px",
  width: "150px",
  marginLeft: "7rem",
  marginTop: "13rem",
    */
  }

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }
    return (
      <IonPage>
        <SideMenuPage />
        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <IonButton
            style={contentStyle}
            fill="clear"
            onClick={() => {
              this.IconFn();
            }}
          >
            <IonIcon
              color="dark"
              style={{ fontSize: "150px" }}
              icon={addCircle}
            ></IonIcon>
          </IonButton>
        </div>
        <SF />
      </IonPage>
    );
  }
}

export default Homepage;
