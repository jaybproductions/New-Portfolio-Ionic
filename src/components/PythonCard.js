import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonList,
  IonItem,
  IonIcon,
} from "@ionic/react";
import { logoPython } from "ionicons/icons";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const PythonCard = () => {
 
  const classes = useStyles();


  return (
    <>
      <IonCard>
        <IonCardContent>
          <h2>Featured Python Project: Automated Report Downloader</h2>
          <br></br>
          <IonGrid>
            <IonRow>
              <IonCol>
                About This Project
              </IonCol>
              <IonCol>
                Skills Used
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                  <Timeline align="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Selenium
            </Typography>
            <Typography>For download all reports and storing on local drive.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              ftplip
            </Typography>
            <Typography>For connecting to FTP and uploading to server.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
        
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Functions and For Loops
            </Typography>
            <Typography>For iterating through all reports.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline></IonCol>
    </IonRow>

          </IonGrid>
          
          
         
          
            
                <IonButton
                  color="primary"
                  size="small"
                  href="https://github.com/jaybproductions/pythonreportautomator"
                  target="_blank"
                >
                  View on Github
                </IonButton>
                <IonButton color="primary" size="small">
                  View More
                </IonButton>
             
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default PythonCard;
