import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage1";
import EHomePage from "./pages/HomePage";
import AddHomePage from "./pages/AddHomePage";
import JoinHomePage from "./pages/JoinHomePage";
import LaS from "./pages/LoginandSignupPage";
import SignUpPage from "./pages/SignUpPage";
import "@codetrix-studio/capacitor-google-auth";
import NameHomePage from "./pages/NameHomePage";
import CheckUser from "./components/CheckUser";
import Menu from "./pages/Menu";
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings";
import AddNewHome from "./pages/AddNewHome";
import OrderDevice from "./pages/OrderDevice";
import AddUser from "./pages/AddUser";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import SideMenuPage from "./pages/SideMenuPage";
import ChangeHome from "./pages/ChangeHome";
import PHomepage from "./pages/PHomePage";
import RoomIcon from "./pages/RoomIconPage";
import NameRoom from "./pages/NameRoomPage";
import Footer from "./pages/Footer";
import SelectDevice from "./pages/SelectDevice";
import ChipSetup from "./pages/ChipSetup";
import BuilderChipWifi from "./pages/BuilderChipWifi";
import ChipLoad from "./pages/ChipLoad";

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
          <IonSplitPane contentId="menuContent">
            <Menu />
            <IonRouterOutlet id="menuContent">
              <Route path="/LoginAndSignUpPage" component={LaS} exact={true} />
              <Route
                exact
                path="/"
                render={() => <Redirect to="/CheckUser" />}
              />
              <Route
                path="/RegisterPage"
                component={RegisterPage}
                exact={true}
              />
              <Route path="/AddHomePage" component={AddHomePage} exact={true} />
              <Route
                path="/JoinHomePage"
                component={JoinHomePage}
                exact={true}
              />
              <Route path="/EHomePage" component={EHomePage} exact={true} />
              <Route path="/LoginPage" component={LoginPage} exact={true} />
              <Route path="/SignUpPage" component={SignUpPage} exact={true} />
              <Route
                path="/NameHomePage"
                component={NameHomePage}
                exact={true}
              />
              <Route path="/CheckUser" component={CheckUser} exact={true} />
              <Route path="/menu" component={Menu} exact={true} />
              <Route path="/edit" component={EditProfile} exact={true} />
              <Route path="/settings" component={Settings} exact={true} />
              <Route path="/addnewhome" component={AddNewHome} exact={true} />
              <Route path="/orderdevice" component={OrderDevice} exact={true} />
              <Route path="/changehome" component={ChangeHome} exact={true} />
              <Route path="/adduser" component={AddUser} exact={true} />
              <Route path="/FAQ" component={FAQ} exact={true} />
              <Route path="/contactus" component={ContactUs} exact={true} />
              <Route
                path="/SideMenuPage"
                component={SideMenuPage}
                exact={true}
              />
              <Route path="/PHomePage" component={PHomepage} exact={true} />
              <Route path="/RoomIcon" component={RoomIcon} exact={true} />
              <Route path="/NameRoom" component={NameRoom} exact={true} />
              <Route path="/Footer" component={Footer} exact={true} />
              <Route
                path="/SelectDevice"
                component={SelectDevice}
                exact={true}
              />
              <Route path="/ChipSetup" component={ChipSetup} exact={true} />
              <Route
                path="/BuilderChipWifi"
                component={BuilderChipWifi}
                exact={true}
              />
              <Route path="/ChipLoad" component={ChipLoad} exact={true} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    );
  }
}

export default App;
