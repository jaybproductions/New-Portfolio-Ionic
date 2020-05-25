import React from "react";
import { IonCardHeader, IonCardContent, IonCard } from "@ionic/react";

const CsharpCard = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>My C# Projects</strong>
        </IonCardHeader>
        <IonCardContent>Hello</IonCardContent>
      </IonCard>
    </div>
  );
};

export default CsharpCard;
