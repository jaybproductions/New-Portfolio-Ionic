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
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import ReactCard from "../components/ReactCard";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";

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
              <ReactCard />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
