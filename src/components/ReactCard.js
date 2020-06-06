import React from "react";
import {
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonList,
  IonItem,
  IonIcon,
} from "@ionic/react";
import { logoReact } from "ionicons/icons";

const ReactCard = ({ viewmorebutton }) => {
  return (
    <div>
      <IonCard>
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>
            My React Projects <IonIcon icon={logoReact} />
          </strong>
        </IonCardHeader>
        <IonCardContent>
          <h2>Featured React Project: Client Communication App</h2>
          <br></br>
          <h2>Skills Used</h2>
          <IonList lines="none">
            <IonItem>Ionic Framework</IonItem>
            <IonItem>Firebase for auth, hosting and database</IonItem>
            <IonItem>React States, Contexts, and functional components</IonItem>
          </IonList>
          <IonGrid>
            <IonCol>
              <IonRow>
                <IonButton
                  color="primary"
                  size="small"
                  href="https://github.com/jaybproductions/ReactNewsApp"
                  target="_blank"
                >
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
