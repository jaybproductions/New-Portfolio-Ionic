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

const ProjectsCard = () => {
  return (
    <div>
      <IonCard
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        }}
      >
        <IonCardHeader style={{ fontSize: "16px" }}>
          <strong>View my Project's</strong>
        </IonCardHeader>
        <IonCardContent>
          <h2>
            Log of projects I'm actively working. I am mostly focusing on React
            and Node at the moment. I also enjoy working with Python and C#.
          </h2>
          <IonGrid>
            <IonCol>
              <IonRow>
                <IonButton color="primary" size="md" routerLink={"/projects"}>
                  Go ->
                </IonButton>
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default ProjectsCard;
