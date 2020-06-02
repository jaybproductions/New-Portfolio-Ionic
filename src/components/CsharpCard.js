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

const CsharpCard = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>My C# Projects</strong>
        </IonCardHeader>
        <IonCardContent>
          <h2>Featured C# Project: Unity FPS Template</h2>
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

export default CsharpCard;
