/* This is the home page with rooms populated */

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
  IonFooter,
} from "@ionic/react";
import React from "react";
import "./LoginPage.css";
import { bedSharp, addCircle } from "ionicons/icons";
import SideMenuPage from "./SideMenuPage";
import SF from "./SF";

var auth_token;
var rid = "";
var fieldTitle = "";

const contentStyle = {
  height: "90px",
  justifyContent: "center",
  width: "90px",
};

class PHomepage extends React.Component {
  constructor(props) {
    super(props);
    auth_token = JSON.parse(localStorage.getItem("token"));
    this.state = {
      homeid: "",
      rname: "",
      ricon: "",
      roomid: "",
      items: [],
      switchcontroller: [],
    };
  }

  async componentDidMount() {
    localStorage.setItem("UPage", JSON.stringify("/PHomePage"));
    var homeid1 = JSON.parse(localStorage.getItem("homeid"));
    this.setState({ homeid: homeid1 });
    setTimeout(() => {
      this.getRoomInfo();
    }, 1000);
  }

  handleToast() {
    this.setState({
      show: !this.state.show,
    });
  }

  NewRoomFn() {
    this.props.history.push({ pathname: "/RoomIcon" });
  }

  displayfn = (e) => {
    const id = e.target.id;
    this.setState({ roomid: id });
    localStorage.setItem("roomid", JSON.stringify(id));
    if (this.state.switchcontroller.length === 0) {
      this.props.history.push({ pathname: "/ChipSetup" });
    } else {
      this.props.history.push({ pathname: "/ChipLoad" });
    }
    //this.props.history.push({ pathname: "/ERoomPage" });
  };

  getRoomInfo() {
    let data = this.state;
    //console.log(data);
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
          if (resp) {
            this.setState({ items: resp.rooms });
            this.setState({
              switchcontroller: resp.rooms[0].switchcontrollerid,
            });
            //console.log(this.state.switchcontroller);
            /*On success, setting the homeid in the local storage*/
            //let obj = resp.createdHome._id;
            //localStorage.setItem("homeid", JSON.stringify(obj));
            // if (resp.homeid != null) {
            //   this.props.history.push({ pathname: "/EHomePage" });
            // } else {
            //   this.props.history.push({ pathname: "/AddHomePage" });
            // }
            console.log(resp);
            //console.log(this.state.switchcontroller);
            // this.props.history.push({ pathname: "/PHomePage" });
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
        <SideMenuPage />
        <IonContent slot="fixed">
          <IonGrid className="phome-grid">
            <IonRow className="phome-row">
              {this.state.items.map((item, index) => {
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
                        icon={item.iconname}
                        size="large"
                        className="io-icon"
                      ></IonIcon>
                    </IonButton>
                    <br />
                    <IonLabel className="icon_label1">{item.roomname}</IonLabel>
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>

          <IonItem lines="none" className="ion-float-right"></IonItem>
        </IonContent>
        <IonFooter className="ion-no-border" style={{ textAlign: "end" }}>
          <IonButton
            mode="md"
            style={contentStyle}
            fill="clear"
            onClick={() => {
              this.NewRoomFn();
            }}
          >
            <IonIcon
              color="dark"
              style={{ fontSize: "150px" }}
              icon={addCircle}
            ></IonIcon>
          </IonButton>
        </IonFooter>
        <SF />
      </IonPage>
    );
  }
}

export default PHomepage;

/* 
<IonGrid>
            <IonRow>
              <IonCol>
              </IonCol>
            </IonRow>
          </IonGrid>

*/
