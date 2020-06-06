import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
} from "@ionic/react";

import "./Tab1.css";
import ReactCard from "../components/ReactCard";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import PythonCard from "../components/PythonCard";
import WordpressCard from "../components/WordpressCard";
import CsharpCard from "../components/CsharpCard";
import background from "../images/Lawrencium.jpg";

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <HeroSection />
        <IonHeader translucent="true"></IonHeader>
        <AboutMe />
        <IonGrid>
          <IonRow>
            <IonCol>
              <ReactCard />
            </IonCol>
            <IonCol>
              <PythonCard />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <WordpressCard />
            </IonCol>
            <IonCol>
              <CsharpCard />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar color="primary">
          <IonTitle
            style={{
              fontSize: "14px",
            }}
          >
            <center>2020 JayBProd</center>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
