import React from "react";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonLoading,
  IonTextarea,
  IonCard,
  IonCardContent,
  IonGrid,
  IonCardTitle,
  IonFooter,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import useForm from "../hooks/useForm";

import toast from "../helpers/toast";
import validateContactForm from "../validators/validateContactForm";
import "../css/Contact.css";

const INITIAL_STATE = {
  subject: "",
  name: "",
  phoneNumber: "",
  email: "",
  message: "",
};

const ContactForm = (props) => {
  const { handleSubmit, handleChange, values, isSubmitting } = useForm(
    INITIAL_STATE,
    validateContactForm,
    handleCreateForm
  );

  function handleCreateForm() {
    const { subject, name, phoneNumber, email, message } = values;
  }

  const [busy, setBusy] = React.useState(false);

  return (
    <div class="contact-form" id="contact-form">
      <IonPage>
        <IonLoading message={"Please wait..."} isOpen={busy} />
        <IonContent>
          <IonCard>
            <IonCardTitle
              style={{
                paddingLeft: "20px",
                paddingBottom: "10px",
                paddingTop: "10px",
                fontSize: "24px",
              }}
            >
              I'm Open for Business...
            </IonCardTitle>
            <IonCardContent>
              Have questions? Want to Inquire about a new website build?
            </IonCardContent>
          </IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    <IonItem lines="full">
                      <IonLabel position="floating">Subject</IonLabel>
                      <IonInput
                        name="subject"
                        type="text"
                        required
                        value={values.subject}
                        onIonChange={handleChange}
                      ></IonInput>
                    </IonItem>
                    <IonItem lines="full">
                      <IonLabel position="floating">Name</IonLabel>
                      <IonInput
                        name="name"
                        type="text"
                        required
                        value={values.name}
                        onIonChange={handleChange}
                      ></IonInput>
                    </IonItem>
                    <IonItem lines="full">
                      <IonLabel position="floating">Phone</IonLabel>
                      <IonInput
                        name="phoneNumber"
                        type="text "
                        required
                        value={values.phoneNumber}
                        onIonChange={handleChange}
                      ></IonInput>
                    </IonItem>

                    <IonItem lines="full">
                      <IonLabel position="floating">Email</IonLabel>
                      <IonInput
                        name="email"
                        type="text"
                        required
                        value={values.email}
                        onIonChange={handleChange}
                      ></IonInput>
                    </IonItem>
                    <IonItem lines="full">
                      <IonLabel position="floating">Message</IonLabel>
                      <IonTextarea
                        name="message"
                        type="text"
                        required
                        value={values.message}
                        onIonChange={handleChange}
                      ></IonTextarea>
                    </IonItem>
                    <IonRow>
                      <IonCol>
                        <IonButton
                          type="submit"
                          color="primary"
                          expand="block"
                          fill="solid"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                        >
                          Send!
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonFooter>
            <IonToolbar>
              <IonTitle style={{ fontSize: "14px" }}>
                <center>2020 JayBProd</center>
              </IonTitle>
            </IonToolbar>
          </IonFooter>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default ContactForm;
