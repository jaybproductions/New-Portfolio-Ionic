import React, { useEffect } from "react";
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
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";

import BlogCard from "../components/BlogCard";
import ProjectsCard from "../components/ProjectsCard";
import ContactCard from "../components/ContactCard";

const Home = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent>
        <HeroSection />
        <IonHeader translucent="true"></IonHeader>
        <AboutMe />

        <IonGrid>
          <IonRow style={{ justifyContent: "center" }}>
            <IonCol size="12" size-sm="3">
              <ProjectsCard />
            </IonCol>
            <IonCol size="12" size-sm="3">
              <BlogCard />
            </IonCol>
            <IonCol size="12" size-sm="3">
              <ContactCard />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          }}
        >
          <IonTitle
            style={{
              fontSize: "14px",
            }}
          >
            <center>2021 JayBProd</center>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
