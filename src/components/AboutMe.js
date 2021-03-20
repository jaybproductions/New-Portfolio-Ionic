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
    <div style={{ textAlign: "center" }}>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader style={{ fontSize: "12px" }}>
                <h2>About Me</h2>
              </IonCardHeader>
              <IonCardContent>
                <p style={{ fontSize: "18px", color: "primary" }}>
                  Hello. My name is Jacob. I am a web developer and mobile app
                  developer that focuses on 2 things. Design and functionality.{" "}
                  <br></br>On this site I will showcase some of my work and lay
                  out my skillset. Feel free to reach out if you have any
                  questions! Thanks.<br></br>
                </p>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default AboutMe;
