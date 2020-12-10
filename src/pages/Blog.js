import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonLoading,
  IonTextarea,
  IonCard,
  IonCardContent,
  IonGrid,
  IonCardTitle,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonHeader,
} from "@ionic/react";
import useForm from "../hooks/useForm";
import validateContactForm from "../validators/validateContactForm";
import "../css/Contact.css";

const Blog = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blog</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="blog"></div>
      </IonContent>
    </IonPage>
  );
};

export default Blog;
