import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
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
        <IonFooter>
          <IonToolbar>
            <IonTitle style={{ fontSize: "14px" }}>
              <center>2020 JayBProd</center>
            </IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Resume;
