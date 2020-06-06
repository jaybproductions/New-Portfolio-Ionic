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
import { logoPython } from "ionicons/icons";

const PythonCard = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>
            My Python Projects <IonIcon icon={logoPython} />
          </strong>
        </IonCardHeader>
        <IonCardContent>
          <h2>Featured Python Project: Automated Report Downloader</h2>
          <br></br>
          <h2>Skills Used</h2>
          <IonList lines="none">
            <IonItem>Selenium</IonItem>
            <IonItem>ftplib for uploading to website</IonItem>
            <IonItem>Moving items in directories to different places</IonItem>
          </IonList>
          <IonGrid>
            <IonCol>
              <IonRow>
                <IonButton
                  color="primary"
                  size="small"
                  href="https://github.com/jaybproductions/pythonreportautomator"
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

export default PythonCard;
