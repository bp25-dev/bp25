import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  /**heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },**/
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} variant="h6">TOUREN - Kann der Schwierigkeitsgrad auch negativ sein?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nein, der Schwierigkeitsgrad bei Touren liegt immer zwischen 0 und 5.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading} variant="h6">Frage 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Hier steht die Antwort zu Frage 2.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading} variant="h6">Frage 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hier steht die Antwort zu Frage 3.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
  }