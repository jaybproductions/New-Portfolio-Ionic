import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab3.css";

const Resume = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resume</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader translucent={true}></IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Resume;
