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
import { Link } from "react-router-dom";

const ProjectsCard = () => {
  return (
    <div>
      <Link to="/projects" style={{ textDecoration: "none" }}>
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
              <b></b>Click here to view the Log of projects I'm actively
              working. I am mostly focusing on React and Node at the moment. I
              also enjoy working with Python and C#.
            </h2>
            <IonGrid>
              <IonCol>
                <IonRow></IonRow>
              </IonCol>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </Link>
    </div>
  );
};

export default ProjectsCard;
