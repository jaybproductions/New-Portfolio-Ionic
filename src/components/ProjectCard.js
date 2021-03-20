import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import GitHubIcon from "@material-ui/icons/GitHub";

const ProjectCard = ({ title, content, type, skills, link }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {content} | {skills}
        <br />
        <br />
        <IonButton href={link} target="_blank">
          <GitHubIcon />
        </IonButton>
        <IonButton>View Live</IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default ProjectCard;
