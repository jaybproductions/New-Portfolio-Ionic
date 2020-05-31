import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
} from "@ionic/react";

import "./Tab2.css";
import ReactCard from "../components/ReactCard";
import PythonCard from "../components/PythonCard";
import WordpressCard from "../components/WordpressCard";
import CsharpCard from "../components/CsharpCard";

const Projects = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader translucent="true"></IonHeader>
        <ReactCard />
        <PythonCard />

        <WordpressCard />
        <CsharpCard />
        <CsharpCard />
        <CsharpCard />
        <CsharpCard />
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

export default Projects;
