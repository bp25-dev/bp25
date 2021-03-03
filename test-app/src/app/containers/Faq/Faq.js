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
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading} variant='h6'>
            Fragen zu Touren
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In welchem Wertebereich liegt der Schwierigkeitsgrad und kann dieser
            auch negativ sein?
            <br />
            Der Schwierigkeitsgrad einer Tour liegt immer zwischen 0 und 5 und
            kann somit nicht negativ sein. Dabei beschreibt 0 die geringste
            Schwierigkeit und 5 die höchste.
            <br />
            <br />
            Was ist der Unterschied zwischen Ersteller*in und Benutzer*innen?
            <br />
            Der/die Ersteller*in erstellt eine neue Tour und der/die
            Benutzer*innen sind die Teilnehmenden dieser Tour.
            <br />
            <br />
            Was ist das Passwort und was ist der Touren Code einer Tour?
            <br />
            Um an einer nicht öffentlichen Tour teilzunehmen, wird ein Passwort
            benötigt. Der Touren Code einer Tour ist ...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.heading} variant='h6'>
            Fragen zu Exponaten
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wie lösche ich ein Exponat?
            <br />
            Um ein Exponat zu löschen, muss man zunächst auf die Seite der
            Exponate navigieren. Dort gibt es zwei Möglichkeiten ein Exponat zu
            löschen. Entweder man wählt bei dem Exponat, das gelöscht werden
            soll, erstmal den Edit-Button. Anschließend findet man dort neben
            den Reitern "Übersicht", "Eckdaten" und "Bildverknüpfungen" einen
            Löschen-Button. Andererseits kann man in der Tabelle mit allen
            Exponaten das Exponat, welches gelöscht werden soll, direkt
            auswählen. Dies geschieht, indem auf das Kästchen links neben der
            ObjektID geklickt wird. Anschließend erscheint oben rechts über der
            Tabelle ein Delete-Button.
            <br />
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel5a-content'
          id='panel5a-header'
        >
          <Typography className={classes.heading} variant='h6'>
            Fragen zum Profil
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wie kann ich mein Passwort ändern?
            <br />
            Um das eigene Passwort zu ändern, navigiert man auf die sogenannte
            "Mein Profil"-Seite. Diese ist, wie der Logout-Button, oben rechts
            auf der Website zu finden. Auf der "Mein Profil"-Seite kann man sein
            Passwort ändern, indem das alte Passwort sowie ein neues Passwort
            eingegeben und bestätigt wird.
            <br />
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel6a-content'
          id='panel6a-header'
        >
          <Typography className={classes.heading} variant='h6'>
            Fragen zur Nutzung auf dem Handy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Warum passt sich das Layout der Website bei Handynutzung nicht an?
            <br />
            Die Hauptnutzung der Website ist auf dem Computer oder Laptop
            gedacht, deshalb passt sich das Layout (noch) nicht automatisch bei
            Handynutzung an. Alle Funktionen sind aber auch über das Handy
            ausführbar.
            <br />
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel7a-content'
          id='panel7a-header'
        >
          <Typography className={classes.heading} variant='h6'>
            Fragen zu Abzeichen
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Was ist der Sinn und Zweck von Abzeichen?
            <br />
            Durch verschiedene Aktivitäten, kann ein/e Nutzer*in sich Abzeichen
            verdienen. Somit motivieren Abzeichen zum regelmäßigen Besuch der
            App und dokumentieren den Fortschritt eines/einer Nutzer*in.
            Außerdem sollen durch verschiedene Abzeichen Profilbilder für
            den/die Nutzer*in freigeschaltet werden.
            <br />
            <br />
            Was sind die Kosten für Abzeichen?
            <br />
            Verschiedene Abzeichen haben unterschiedliche Kosten. Diese Kosten
            verdient man sich durch Ausführen verschiedener Funktionen der App.
            <br />
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
