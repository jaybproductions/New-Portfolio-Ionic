import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import GitHubIcon from "@material-ui/icons/GitHub";

const ProjectCard = ({
  title,
  content,
  type,
  skills,
  link,
  liveLink,
  loginInfo,
}) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {content} <br />
        <div className="spacing"></div>
        <br />
        <b>Skills Used: {skills}</b>
        <br />
        <br />
        {loginInfo && (
          <>
            {loginInfo} <br />
            <br />{" "}
          </>
        )}
        <IonButton href={link} target="_blank">
          <GitHubIcon />
        </IonButton>
        {liveLink && (
          <IonButton href={liveLink} target="_blank">
            View Live
          </IonButton>
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default ProjectCard;
