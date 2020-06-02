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

const PythonCard = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>My Python Projects</strong>
        </IonCardHeader>
        <IonCardContent>
          <h2>Featured Python Project: Report Downloader</h2>
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

export default PythonCard;
