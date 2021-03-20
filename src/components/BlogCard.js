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

const BlogCard = () => {
  return (
    <div>
      <Link to="/blog" style={{ textDecoration: "none" }}>
        <IonCard
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          }}
        >
          <IonCardHeader style={{ fontSize: "16px" }}>
            <strong>View the Blog</strong>
          </IonCardHeader>
          <IonCardContent>
            <h2>
              Click here to view programming tutorials, gamedev logs, pretty
              much anything I am interested in making at the moment. This will
              change and update over time.
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

export default BlogCard;
