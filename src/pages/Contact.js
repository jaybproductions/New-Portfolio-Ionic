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
import firebase from "../firebase";
import axios from "axios";

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

  const [get, setGet] = React.useState("");

  function postEmail() {
    const getter = values.message;
    setGet(getter);
    axios({
      url: `http://localhost:80/contactforms/email`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      //es-lint disable next line
      data: { email: values.email, message: values.message },
    }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }

  function getEmails() {
    axios({
      url: `http://localhost:80/contactforms/email`,
      method: "get",
      headers: { "Content-Type": "application/json" },
      //es-lint disable next line
    }).then((res) => {
      console.log(res);
      console.log(res.data);

      console.log(
        "email: " + res.data[0].email,
        "message: " + res.data[0].message
      );
    });
  }

  function handleCreateForm() {
    const { subject, name, phoneNumber, email, message } = values;

    const newFormFill = {
      subject: values.subject,
      name: values.name,
      phoneNumber: values.phoneNumber,
      email: values.email,
      message: values.message,
    };

    firebase.db.collection("contactforms").add(newFormFill);
    postEmail();
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
              Have questions? Want to Inquire about a new website build?{get}
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

                        <IonButton
                          type="button"
                          color="primary"
                          expand="block"
                          fill="solid"
                          onClick={getEmails}
                          disabled={isSubmitting}
                        >
                          Test GET
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
        <IonFooter>
          <IonToolbar color="primary">
            {" "}
            <IonTitle style={{ fontSize: "14px" }}>
              <center>2020 JayBProd</center>
            </IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </div>
  );
};

export default ContactForm;
