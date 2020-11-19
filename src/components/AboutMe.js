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
                <h2>About Me</h2>
              </IonCardHeader>
              <IonCardContent>
                <p style={{fontSize:"18px", color: "white",}}>
                  Hello. My name is Jacob. I am a web developer and mobile app
                  developer that focuses on 2 things. Design and functionality.{" "}
                  <br></br>On this site I will showcase some of my work and lay
                  out my skillset. I look forward to hearing from you soon!
                  Thanks.<br></br>
                </p>
                <h2 style={{ paddingTop: "10px" }}>
                  <b>Why me?</b>
                </h2>{" "}
                <p style={{fontSize:"18px", color: "white",}}>
                  I am a professional in the industry. I have experience working
                  for an agency as well as freelance work. I can create beautiful websites custom to your business in the platform of your choosing. 

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
