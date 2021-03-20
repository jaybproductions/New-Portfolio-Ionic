import React from "react";
import {
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <div>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <IonCard
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          }}
        >
          <IonCardHeader style={{ fontSize: "16px" }}>
            <strong>Contact Me</strong>
          </IonCardHeader>
          <IonCardContent>
            <h2>
              Click here if you have questions, need help with any of your
              projects, or if you have a suggestion for the blog. Feel free to
              reach out and I would be glad to help!
            </h2>
            <IonGrid>
              <IonCol>
                <IonRow></IonRow>
              </IonCol>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </Link>
    </div>
  );
};

export default ContactCard;
