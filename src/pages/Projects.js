import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./Tab2.css";

import ProjectCard from "../components/ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    display: "inline-block",
    height: "25%",
    width: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.primary}`,

    padding: "10px",
  },

  panel: {
    width: "100%",
    margin: "auto",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={8} style={{ width: "100%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Projects = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader translucent="true"></IonHeader>
        <div className={classes.root}>
          <Tabs
            orientation="horizontal"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="React Projects" {...a11yProps(0)} />
            <Tab label="Python Projects" {...a11yProps(1)} />
            <Tab label="C# Projects" {...a11yProps(2)} />
            <Tab label="Wordpress Projects" {...a11yProps(3)} />
          </Tabs>

          <TabPanel value={value} index={0} className={classes.panel}>
            <IonGrid>
              <IonRow
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IonCol size="12" size-sm="3">
                  <ProjectCard
                    title={"Hacker Forums Clone"}
                    content={"Hello"}
                    skills={
                      "React, HTML, CSS, Hooks, Firebase, Reusable components"
                    }
                    link="https://github.com/jaybproductions/ReactNewsApp"
                  />
                </IonCol>
                <IonCol size="12" size-sm="3">
                  <ProjectCard
                    title={"QR Code Generator"}
                    content={"Hello"}
                    link="https://github.com/jaybproductions/qr-store"
                    skills={"React, HTML, CSS, Hooks, Firebase, Express, Axios"}
                  />
                </IonCol>
                <IonCol size="12" size-sm="3">
                  <ProjectCard
                    title={"Spam filter for contact forms to email"}
                    content={"Hello"}
                    link="https://github.com/jaybproductions/SpamFilter"
                    skills={"React, HTML, CSS, Hooks, Firebase, Express, Axios"}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
          </TabPanel>

          <TabPanel value={value} index={1} className={classes.panel}>
            <IonGrid>
              <IonRow
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IonCol size="12" size-sm="3">
                  <ProjectCard
                    title={"Coronavirus Discord Bot"}
                    content={"Hello"}
                    skills={"Python, API integration"}
                    link="https://github.com/jaybproductions/PythonCoronaDiscordBot"
                  />
                </IonCol>
                <IonCol size-sm="3">
                  <ProjectCard
                    title={"Automated Report Uploader"}
                    content={"Hello"}
                    skills={"Skills"}
                    link="https://github.com/jaybproductions/pythonreportautomator"
                  />
                </IonCol>
                <IonCol size="12" size-sm="3"></IonCol>
              </IonRow>
            </IonGrid>
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.panel}>
            <IonGrid>
              <IonRow
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IonCol size="12" size-sm="3">
                  <ProjectCard
                    title={"FPS Game Template for Unity"}
                    content={"Work in progress..."}
                    skills={"Please check back later or view on github."}
                    link={"https://github.com/jaybproductions/FPSUnityTemplate"}
                  />
                </IonCol>
                <IonCol size="12" size-sm="3">
                  <ProjectCard
                    title={"Unity Mobile Game"}
                    content={"Work in progress..."}
                    skills={"Please check back later or view on github."}
                    link={
                      "https://github.com/jaybproductions/unity-mobile-game"
                    }
                  />
                </IonCol>
                <IonCol size="12" size-sm="3"></IonCol>
              </IonRow>
            </IonGrid>
          </TabPanel>
          <TabPanel value={value} index={3} className={classes.panel}>
            <IonGrid>
              <IonRow
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IonCol size="12" size-sm="3"></IonCol>
                <IonCol size="12" size-sm="3">
                  <ProjectCard
                    title={"Wordpress Projects Coming Soon..."}
                    content={"More Projects are being added frequently."}
                    skills={"Please check back later."}
                  />
                </IonCol>
                <IonCol size="12" size-sm="3"></IonCol>
              </IonRow>
            </IonGrid>
          </TabPanel>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar color="primary">
          <IonTitle style={{ fontSize: "14px" }}>
            <center>2020 JayBProd</center>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Projects;
