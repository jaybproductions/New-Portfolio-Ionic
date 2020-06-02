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

const WordpressCard = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>My Wordpress Projects</strong>
        </IonCardHeader>
        <IonCardContent>
          <h2>Featured Wordpress Project: eBay Seller's Blog</h2>
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

export default WordpressCard;
