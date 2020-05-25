import React from "react";
import { IonCardHeader, IonCardContent, IonCard } from "@ionic/react";

const WordpressCard = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>My Wordpress Projects</strong>
        </IonCardHeader>
        <IonCardContent>Hello</IonCardContent>
      </IonCard>
    </div>
  );
};

export default WordpressCard;
