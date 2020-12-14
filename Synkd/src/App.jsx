import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage1";
import HomePage from "./pages/HomePage";
import AddHomePage from "./pages/AddHomePage";
import JoinHomePage from "./pages/JoinHomePage";
import LaS from "./pages/LoginandSignupPage";
import SignUpPage from "./pages/SignUpPage";
import "@codetrix-studio/capacitor-google-auth";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

class App extends React.Component {
  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/LoginAndSignUpPage" component={LaS} exact={true} />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/LoginAndSignUpPage" />}
            />
            <Route path="/RegisterPage" component={RegisterPage} exact={true} />
            <Route path="/AddHomePage" component={AddHomePage} exact={true} />
            <Route path="/JoinHomePage" component={JoinHomePage} exact={true} />
            <Route path="/HomePage" component={HomePage} exact={true} />
            <Route path="/LoginPage" component={LoginPage} exact={true} />
            <Route path="/SignUpPage" component={SignUpPage} exact={true} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
  }
}

export default App;
