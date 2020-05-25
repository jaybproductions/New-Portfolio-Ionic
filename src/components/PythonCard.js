import React from "react";
import { IonCardHeader, IonCardContent, IonCard } from "@ionic/react";

const PythonCard = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>My Python Projects</strong>
        </IonCardHeader>
        <IonCardContent>Hello</IonCardContent>
      </IonCard>
    </div>
  );
};

export default PythonCard;
