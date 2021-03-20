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

const ContactCard = () => {
  return (
    <div>
      <IonCard
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        }}
      >
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>View my Contact Details</strong>
        </IonCardHeader>
        <IonCardContent>
          <h2>
            Have questions? Need help with any of your projects? Have a
            suggestion for the blog? Feel free to reach out and I would be glad
            to help!
          </h2>
          <IonGrid>
            <IonCol>
              <IonRow>
                <IonButton color="primary" size="md" routerLink={"/contact"}>
                  Go ->
                </IonButton>
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default ContactCard;
