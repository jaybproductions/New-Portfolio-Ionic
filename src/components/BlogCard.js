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

const BlogCard = () => {
  return (
    <div>
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
            Programming tutorials, Gamedev logs, pretty much anything I am
            interested in making at the moment. This will change and update over
            time.
          </h2>
          <IonGrid>
            <IonCol>
              <IonRow>
                <IonButton color="primary" size="md" routerLink={"/blog"}>
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

export default BlogCard;
