import React from "react";
import {
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

const AboutMe = () => {
  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader style={{ fontSize: "16px" }}>
                <strong>About Section</strong>
              </IonCardHeader>
              <IonCardContent>Hello</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default AboutMe;
