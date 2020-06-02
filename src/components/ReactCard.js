import React from "react";
import {
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
} from "@ionic/react";

const ReactCard = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>My React Projects</strong>
        </IonCardHeader>
        <IonCardContent>
          <h2>Featured React Project: Client Communication App</h2>
          <IonGrid>
            <IonCol>
              <IonRow>
                <IonButton color="primary" size="small">
                  View on Github
                </IonButton>
                <IonButton color="primary" size="small">
                  View More
                </IonButton>
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default ReactCard;
