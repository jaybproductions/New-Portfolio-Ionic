import React from "react";
import {
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonImg,
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import background from "../images/Lawrencium.jpg";
const HeroSection = () => {
  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonCol size="12">
            <IonCard mode="ios">
              <IonCardHeader
                style={{
                  fontSize: "16px",
                  backgroundImage:
                    "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
                }}
              >
                <strong>Simple, Beautiful, Elegant</strong>
              </IonCardHeader>{" "}
              <IonCardContent
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
                }}
              >
                Web Design
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default HeroSection;
