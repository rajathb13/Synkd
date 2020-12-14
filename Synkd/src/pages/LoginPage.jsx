import {
  IonContent,
  IonPage,
  IonRow,
  IonCol,
  IonInput,
  IonList,
  IonItem,
  IonButton,
  IonGrid,
  IonImg,
  IonToast,
  IonTitle,
} from "@ionic/react";
import React from "react";
import "./LoginPage.css";
import img1 from "../images/limg3.png";
import fbimg from "../images/fb3.png";
import gimg from "../images/g3.png";
import { Plugins } from "@capacitor/core";
import "@codetrix-studio/capacitor-google-auth";

var fieldTitle = "";

const INITIAL_STATE = {
  loggedIn: false,
};

const GINITIAL_STATE = {};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
      userID: "",
      name: "",
      displayname: "",
      email: "",
      picture: "",
      ...INITIAL_STATE,
      ...GINITIAL_STATE,
    };
  }

  responseFacebook = (response) => {
    console.log(response);
  };

  componentClicked = () => console.log("clicked");

  handleToast() {
    this.setState({
      show: !this.state.show,
    });
  }

  refreshPage() {
    window.location.reload();
  }

  SignUpFn() {
    this.props.history.push({ pathname: "/SignUpPage" });
  }

  async FbSignOut() {
    await Plugins.FacebookLogin.logout();
  }

  async fbSignIin() {
    const FACEBOOK_PERMISSIONS = ["public_profile", "email"];

    const result = await Plugins.FacebookLogin.login({
      permissions: FACEBOOK_PERMISSIONS,
    });
    console.info("result", result);
    if (result && result.accessToken) {
      console.info("token", result.accessToken);
      localStorage.setItem("UserId", JSON.stringify(result.accessToken.userId));
      localStorage.setItem("fbtoken", JSON.stringify(result.accessToken.token));
      this.props.history.push({
        pathname: "/AddHomePage",
        state: {
          token: result.accessToken.token,
          userId: result.accessToken.userId,
        },
      });
    }

    console.log(result);
  }

  async getCurrentState() {
    const result = await Plugins.FacebookLogin.getCurrentAccessToken();

    try {
      console.log(result);
      return result && result.accessToken;
    } catch (e) {
      return false;
    }
  }

  async GsignIn() {
    const result = await Plugins.GoogleAuth.signIn();
    console.info("result", result);
    if (result) {
      this.props.history.push({ pathname: "/AddHomePage" });
    }
    localStorage.setItem("Name", JSON.stringify(result.displayName));
    localStorage.setItem(
      "Gtokens",
      JSON.stringify(result.authentication.idToken)
    );
    console.log(this.state);
  }

  SignInSubmit() {
    let data = this.state;
    if (!this.state.username && !this.state.password) {
      fieldTitle = "Both fields cannot be empty";
      this.handleToast();
    } else {
      if (!this.state.username) {
        fieldTitle = "Email ID field cannot be empty";
        this.handleToast();
      }
      if (!this.state.password) {
        fieldTitle = "Password field cannot be empty";
        this.handleToast();
      }
      if (this.state.username && this.state.password) {
        var regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        var result = regex.test(this.state.username);
        if (result === false) {
          fieldTitle = "Please Enter a valid Email ID";
          this.handleToast();
        }
      }
    }
    console.log(data);
    if (result === true) {
      fetch("https://clickademy.in/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        result
          .json()
          .then((resp) => {
            if (resp.message === "Authentication Successful") {
              /*On success, setting the user phone in the local storage*/
              let obj = this.state.username;
              localStorage.setItem("username", JSON.stringify(obj));
              // if (resp.homeid != null) {
              //   this.props.history.push({ pathname: "/HomePage" });
              // } else {
              //   this.props.history.push({ pathname: "/AddHomePage" });
              // }
              this.props.history.push({ pathname: "/AddHomePage" });
              this.refreshPage();
            } else {
              fieldTitle = "Email ID or Pasword is wrong";
              this.handleToast();
            }
          })
          .catch((error) => {
            console.log("Invalid email or Wrong Password", error);
          });
      });
    }
  }

  render() {
    return (
      <IonPage className="ion_page">
        <IonContent className="ion_content">
          <IonList className="ion_list">
            <img
              alt="my-img"
              className="mx-auto rounded-circle Synkd_Logo"
              src={img1}
            ></img>
          </IonList>
          <IonList className="ion_list">
            <IonItem className="email_field">
              <IonInput
                className="ion_input1"
                placeholder="Email ID"
                type="stacked"
                inputMode="email"
                maxlength="70"
                required="true"
                mode="md"
                value={this.state.username}
                onIonChange={(data) => {
                  this.setState({ username: data.target.value });
                }}
              ></IonInput>
            </IonItem>
            <IonItem className="pwd_field">
              <IonInput
                className="ion_input1"
                placeholder="Password"
                type="password"
                inputMode="text"
                maxlength="50"
                required="true"
                value={this.state.password}
                onIonChange={(data) => {
                  this.setState({ password: data.target.value });
                }}
              ></IonInput>
            </IonItem>
            <IonItem lines="none" className="loginbtn_item">
              <IonButton
                className="login_btn"
                buttonType="button"
                shape="round"
                size="default"
                color="medium"
                onClick={() => {
                  this.SignInSubmit();
                }}
              >
                Login
              </IonButton>
            </IonItem>
            <IonItem lines="none" className="ion_item">
              <IonTitle
                className="footer_title"
                onClick={() => {
                  this.SignUpFn();
                }}
              >
                New User? Sign Up
              </IonTitle>
            </IonItem>
          </IonList>
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
            <IonButton
              fill="clear"
              className="facebookbtn ion-no-padding"
              onClick={() => {
                this.fbSignIin();
              }}
            >
              <IonImg src={fbimg}></IonImg>
            </IonButton>
            <IonButton
              fill="clear"
              className="googlebtn ion-no-padding"
              onClick={() => this.GsignIn()}
            >
              <IonImg src={gimg}></IonImg>
            </IonButton>
          </div>
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

export default LoginPage;
