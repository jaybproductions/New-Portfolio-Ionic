import React from "react";
import {
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
} from "@ionic/react";
import { logoWordpress } from "ionicons/icons";

const WordpressCard = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>
            My Wordpress Projects <IonIcon icon={logoWordpress} />
          </strong>
        </IonCardHeader>
        <IonCardContent>
          <h2>Featured Wordpress Project: eBay Seller's Blog</h2>
          <br></br>
          <h2>Skills Used</h2>
          <IonList lines="none">
            <IonItem>DevOps - Setting up hosting, managing cPanel</IonItem>
            <IonItem>Design and UI</IonItem>
            <IonItem>Content Writing for blog posts</IonItem>
          </IonList>
          <IonGrid>
            <IonCol>
              <IonRow>
                <IonButton
                  color="primary"
                  size="small"
                  href="https://packingprofit.com"
                  target="_blank"
                >
                  View Live Site
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
