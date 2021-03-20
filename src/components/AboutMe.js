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
            <IonCard style={{ width: "75%", margin: "auto" }}>
              <IonCardHeader style={{ fontSize: "12px" }}>
                <h2 style={{ textAlign: "left" }}>About Me</h2>
              </IonCardHeader>
              <IonCardContent>
                <p
                  style={{
                    fontSize: "18px",
                    color: "primary",
                    width: "100%",
                    margin: "auto",
                    textAlign: "left",
                  }}
                >
                  Hello. My name is Jacob. I am a Full Stack Developer with
                  professional experience with mulitple programming languages
                  and frameworks. <br />
                  <br />
                  On this site I will showcase some of my work and lay out my
                  skillset.
                  <br />
                  <br /> I am frequently continuing my learning of new skills
                  and langauges so this page will be updated frequently. Feel
                  free to reach out if you have any questions! Thanks.
                  <br></br>
                </p>
                <br />

                <h2 style={{ fontSize: "26px", textAlign: "left" }}>
                  Some Of My Skills
                </h2>
                <div
                  style={{
                    width: "100%",
                    margin: "auto",
                    textAlign: "left",
                  }}
                >
                  <ul>
                    <li>React.js and React Native</li>
                    <li>HTML, Javascript, CSS, JSX</li>
                    <li>Firebase tools and Admin SDK</li>

                    <li>REST API development with Node.js and Express.js</li>
                    <li>
                      AWS API knowledge including S3, Lighsail, and Lambda
                    </li>
                    <li>
                      Multiple design libraries such as Material UI and Ionic
                    </li>
                    <li>
                      DevOps, Managing Servers for Mulitple Websites, WHM,
                      cPanel, Apache, etc.
                    </li>
                    <li>Python for webscraping, GUI's, and automations</li>
                    <li>View Projects for more comprehensive view...</li>
                  </ul>
                </div>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default AboutMe;
