import React from "react";
import { IonItem, IonIcon } from "@ionic/react";
import { moon, moonOutline } from "ionicons/icons";
import "../theme/variables.css";

const ToggleDark = (props) => {
  const [isDark, setIsDark] = React.useState(false);
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };
  return (
    <IonItem onClick={toggleDarkModeHandler}>
      <IonIcon
        slot="start"
        icon={isDark ? moon : moonOutline}
        style={{ marginRight: "10px", paddingLeft: "15px" }}
      />
    </IonItem>
  );
};

export default ToggleDark;