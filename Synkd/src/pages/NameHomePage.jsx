import React from "react";
import "./LoginPage.css";
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonToast,
} from "@ionic/react";
import "./LoginPage.css";

var fieldTitle = "";

class NameHomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homename: "",
    };
  }

  handleToast() {
    this.setState({
      show: !this.state.show,
    });
  }

  onSubmit() {
    let data = this.state;
    if (!this.state.homename) {
      fieldTitle = "Home Name cannot be empty";
      this.handleToast();
    } else {
      this.props.history.push({ pathname: "/HomePage" });
    }
  }

  render() {
    return (
      <IonPage>
        <IonContent className="ion_content">
          <IonItem lines="none" className="home_name">
            <IonLabel className="ion-text-wrap ion_label1">
              Let's give your new home a name !
            </IonLabel>
          </IonItem>
          <IonItem className="email_field">
            <IonInput
              className="ion_input1"
              placeholder="Home Name"
              type="stacked"
              inputMode="text"
              maxlength="70"
              required="true"
              mode="md"
              value={this.state.homename}
              onIonChange={(data) => {
                this.setState({ homename: data.target.value });
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
              onClick={() => this.onSubmit()}
            >
              Next
            </IonButton>
          </IonItem>
          <IonToast
            isOpen={this.state.show}
            onDidDismiss={() => this.handleToast()}
            message={fieldTitle}
            duration={2000}
          />
        </IonContent>
      </IonPage>
    );
  }
}

export default NameHomePage;
