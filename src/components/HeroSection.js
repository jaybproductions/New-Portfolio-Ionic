import React from "react";
import {
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/react";
import background from "../images/Lawrencium.jpg";
import { logoGithub } from "ionicons/icons";
const HeroSection = () => {
  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonCol
            size="12"
            style={{
              backgroundImage:
                "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
            }}
          >
            <IonCard mode="ios">
              <IonCardHeader
                style={{
                  fontSize: "16px",
                  color: "white",
                  backgroundImage:
                    "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
                }}
              >
                <strong>
                  <center>Simple, Beautiful, Elegant</center>
                </strong>
              </IonCardHeader>{" "}
              <IonCardContent
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
                  color: "white",
                }}
              >
                <center>
                  Web Designer, Software Developer, Mobile App Creator{" "}
                </center>
                <div style={{ paddingTop: "10px" }} className="social-links">
                  <center>
                    {" "}
                    <a
                      href="https://github.com/jaybproductions"
                      target="_blank"
                    >
                      <IonIcon
                        className="github-icon"
                        style={{ paddingTop: "10px", fontSize: "24px" }}
                        icon={logoGithub}
                      />
                    </a>
                  </center>
                </div>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default HeroSection;
