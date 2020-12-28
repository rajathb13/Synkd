import React from "react";
import {
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import img1 from "../images/limg3.png";
import './Menu.css';
import {useLocation} from 'react-router-dom';
import { helpCircleSharp, homeOutline, homeSharp, logOutOutline, peopleSharp, personCircleOutline, phonePortraitSharp, settingsOutline } from "ionicons/icons";
import Logout from "./Logout"
import { Plugins } from "@capacitor/core";



interface AppPage {
  url : string;
  title : string;
  icon : string;
}

const appPages : AppPage[] = [
  {
    title: 'Profile Settings',
    url: '/Settings',
    icon : settingsOutline
  }, 
  {
    title: 'Add New Home',
    url: '/AddNewHome',
    icon : homeOutline
  }, 
  {
    title: 'Change Home',
    url: '/Changehome',
    icon : homeSharp
  }, 
  {
    title: 'Order A Device',
    url: '/OrderDevice',
    icon : phonePortraitSharp

  }, 
  {
    title: 'Add User',
    url: '/AddUser',
    icon : personCircleOutline
  }, 
  {
    title: 'FAQs',
    url: '/FAQ',
    icon : helpCircleSharp
  }, 
  {
    title: 'Contact Us',
    url: '/contactus',
    icon : peopleSharp
  },  
  
];



const Menu : React.FC = () => 
{
 const location = useLocation();

 const logout = () => {
  var sapp = localStorage.getItem("SocialApp")
  if (sapp === "Facebook") {
    Plugins.FacebookLogin.logout();
    window.localStorage.clear();
    window.location.href = "/CheckUser";
  } else if (sapp === "Google") {
    window.localStorage.clear();
    window.location.href = "/CheckUser";
  } else {
    window.localStorage.clear();
    window.location.href = "/CheckUser";
  }
 }; 
 
 

  return (
      <IonMenu
        menuId="first"
        contentId="menuContent"
        swipe-gesture="false"
        type="overlay">
        <IonContent>
          <IonList>
          <IonList className="ion_list">
            <img  alt="imagelogo" className="mx-auto rounded-circle Synkd_Logo" src={img1}></img>
            </IonList>
            <h6 className="Name">Name</h6>
            {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem
                                    className={location.pathname === appPage.url
                                    ? 'selected'
                                    : ''}
                                    routerLink={appPage.url}
                                    routerDirection="none"
                                    lines="none"
                                    detail={false}
                                    id="ionchanges"
                                    >
                                    <IonIcon slot="start" icon={appPage.icon}/>
                                    <IonLabel className="MenuInfo">{appPage.title}</IonLabel>
                                </IonItem>
                                
                            </IonMenuToggle>
                        );
                      })}
                      </IonList>
                      <IonItem>
                    <IonIcon slot="start" icon={logOutOutline}/>
                    <IonLabel className="components" onClick= {() => logout()}>Logout</IonLabel>
                </IonItem>
          </IonContent>
      </IonMenu>
  );
                    };
export default Menu;