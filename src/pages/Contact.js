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
  const [keywords, setKeywords] = React.useState([]);
  const [isBlocked, setIsBlocked] = React.useState(null);
  const [gotData, setGotData] = React.useState(null);
  let blocked;

  React.useEffect(() => {
    getKeywords();
  }, [!gotData]);

  function postEmail() {
    const getter = values.message;
    setGet(getter);
    axios({
      url: `http://localhost:80/contactforms/email`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      //es-lint disable next line
      data: { email: values.email, message: values.message },
    }).then((res) => {});
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

    checkKeywords();

    axios({
      url: `http://localhost:81/users/bjWKTCQOWxRP3NEpRvmY6TC0Lv02/${
        blocked ? "blockedemails" : "sentemails"
      }`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: { newFormFill },
    }).then((res) => {});
  }

  function getKeywords() {
    axios({
      url: `http://localhost:81/users/bjWKTCQOWxRP3NEpRvmY6TC0Lv02/keywords`,
      method: "get",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      setKeywords(res.data[0].keywords);

      setGotData(true);
    });
  }

  function checkKeywords() {
    blocked = false;
    const { subject, name, phoneNumber, email, message } = values;
    keywords.forEach((keyword) => {
      if (message.indexOf(keyword) > -1) {
        blocked = true;
      }
    });
  }

  const [busy, setBusy] = React.useState(false);

  return (
    <div className="contact-form" id="contact-form">
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
