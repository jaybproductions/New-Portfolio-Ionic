import React from "react";
import { IonCardHeader, IonCardContent, IonCard } from "@ionic/react";

const ReactCard = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>My React Projects</strong>
        </IonCardHeader>
        <IonCardContent>Hello</IonCardContent>
      </IonCard>
    </div>
  );
};

export default ReactCard;
