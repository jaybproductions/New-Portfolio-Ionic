import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
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
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ReactCard />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <PythonCard />

        <WordpressCard />
        <CsharpCard />
      </IonContent>
    </IonPage>
  );
};

export default Projects;
