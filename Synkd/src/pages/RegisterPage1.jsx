import React from "react";
import "./RegisterPage1.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonButton,
  IonGrid,
  IonImg,
} from "@ionic/react";

class RegisterPage1 extends React.Component {
  render() {
    return (
      <IonPage className="ion_page">
        <IonHeader className="ion-no-border ion_header">
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion_content">
          <IonList className="ion_list">
            <img
              alt="my-img"
              className="mx-auto rounded-circle Synkd_Logo"
              src={require("../images/limg3.png")}
            ></img>
          </IonList>
          <IonItem lines="none" className="loginbtn_item">
            <IonButton
              className="login_btn"
              buttonType="button"
              shape="round"
              size="default"
              color="medium"
            >
              Register with Email
            </IonButton>
          </IonItem>
          <IonGrid className="login_grid">
            <IonRow>
              <IonCol size="4" className="col_line">
                <hr
                  style={{
                    color: "grey",
                    backgroundColor: "grey",
                    height: 1,
                  }}
                ></hr>
              </IonCol>
              <IonCol className="col_or" size="1.7" style={{ color: "black" }}>
                OR
              </IonCol>
              <IonCol size="4" className="col_line2">
                <hr
                  style={{
                    color: "grey",
                    backgroundColor: "grey",
                    height: 1,
                  }}
                ></hr>
              </IonCol>
            </IonRow>
          </IonGrid>
          <div className="social_btns">
            <IonButton fill="clear" className="facebookbtn ion-no-padding">
              <IonImg src={require("../images/fb3.png")}></IonImg>
            </IonButton>
            <IonButton fill="clear" className="googlebtn ion-no-padding">
              <IonImg src={require("../images/g3.png")}></IonImg>
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}

export default RegisterPage1;
