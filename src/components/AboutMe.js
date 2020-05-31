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
              <IonCardHeader style={{ fontSize: "12px" }}>
                <h2>About Section</h2>
              </IonCardHeader>
              <IonCardContent>
                Hello. My name is Chris. I am a web developer and mobile app
                developer that focuses on 2 things. Design and functionality.{" "}
                <br></br>On this site I will showcase some of my work and lay
                out my skillset. I look forward to hearing from you soon!
                Thanks.<br></br>
                <h2 style={{ paddingTop: "10px" }}>Why me?</h2> I am a
                professional in the industry. I have experience working for an
                agency that delivers a wide range of products to clients from
                beautiful websites to direct mail campaigns that convert leads
                into real customers.
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default AboutMe;
