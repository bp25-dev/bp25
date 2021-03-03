import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme, index) => ({
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
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography className={classes.heading} variant="h6">Fragen zu "Abzeichen"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Wo finde ich die Abzeichen?<br />
          Abzeichen, die in der App angezeigt werden können, sind unter der Kategorie „Bildverknüpfungen“ gesammelt und können dort bearbeite werden.
          <br />
          <br />
          Was ist der Sinn und Zweck von Abzeichen?<br />
           Durch verschiedene Aktivitäten im Museum, kann ein/e Nutzer*in sich Abzeichen verdienen. 
           Somit motivieren Abzeichen zum regelmäßigen Nutzen der App und dokumentieren den Fortschritt eines/einer Nutzer*in. 
           Außerdem sollen durch verschiedene Abzeichen Profilbilder für den/die Nutzer*in freigeschaltet werden.
           <br />
           <br />
           Wie kann ich Abzeichen erhalten?<br />
           Ein/e Nutzer*in kann sich Abzeichen durch unterschiedliche Aktivitäten im Museum verdienen. 
           Hierzu zählen bspw. die Anzahl betrachteter Exponate, die Anzahl abgeschlossener Rundgänge oder die Bearbeitung von Aufgaben innerhalb von Rundgängen. 
           Grundsätzlich ist die App-Nutzung nicht mit tatsächlichen Geldaufwendungen verbunden.
           <br />
           <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography className={classes.heading} variant="h6">Fragen zu "Benutzer*innen"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Warum kann ich im Feld Benutzer*innen keine Änderungen vornehmen?<br />
          Dieses Feld kann nur von der Administration der Website bearbeitet und eingesehen werden.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography className={classes.heading} variant="h6">Fragen zu "Bildverknüpfungen"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Was ist mit Bildverknüpfungen gemeint?<br />
          Hierunter fallen sowohl die Abzeichen und die Profilbilder. 
          Beide Elemente sind für die App-Nutzer*innen relevant. 
          Sie können durch die Verwendung der App Abzeichen und auch Profilbilder freischalten.
          <br />
          <br />
          Was ist der Sinn und Zweck von Profilbildern?<br />
          Um den eigenen Account als App-Nutzer*in zu individualisieren besteht die Möglichkeit, ein Profilbild aus ausgewählten Exponaten des Museums zu wählen. 
          Außerdem können durch das Verdienen von Abzeichen weitere Profilbilder freigeschaltet werden. 
          Im Bereich der „Bildverknüpfungen“ sollen die möglichen Profilbilder zur Verfügung gestellt und bearbeitet werden können.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}  variant="h6">Fragen zu "Exponaten"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Was ist ein Exponat?<br />
            „Exponant“ ist ein anderer Begriff für „(Austellungs-)Objekt“ im Museum. 
            Gemeint sind hier die gesammelten Objekte des Museums. Jedes Objekt hat in der über diese Website zugänglichen Datenbank einen eigenen Eintrag mit allen relevanten Informationen. 
            Unser Ziel ist es, möglichst viele Informationen über die unterschiedlichen Exponate zusammenzutragen.
            <br />
            <br />
          Wie lösche ich ein Exponat?<br />
           Um ein Exponat zu löschen, muss zunächst die Seite der Exponate angewählt werden.
           Dort gibt es zwei Möglichkeiten, ein Exponat zu löschen.
           Im Bearbeitungsmodus (Edit-Button) findet sich dazu neben den Reitern "Übersicht", "Eckdaten" und "Bildverknüpfungen" ein Löschen-Button, der genutzt werden kann.
           Außerdem kann in der Tabellenübersicht aller Exponate das Exponat, welches gelöscht werden soll, direkt ausgewählt und gelöscht werden. Dies wird möglich, indem das Kästchen links neben der ObjektID angeklickt wird. 
           Anschließend erscheint oben rechts über der Tabelle ein Delete-Button, der bestätigt werden kann.
           <br />
           <br />
           Wer kann Exponate anlegen, bearbeiten oder löschen?<br />
           Die Administration der Website kann alle angelegten Exponate bearbeiten und löschen. 
           Einfache Benutzer*innen der Website können selbst Exponate anlegen, allerdings nur die selbst angelegten Exponate auch bearbeiten oder löschen.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className={classes.heading}  variant="h6">Fragen zur Handynutzung</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Warum passt sich das Layout der Website bei der Handynutzung nicht an?<br />
           Die Hauptnutzung der Website ist für den Computer oder Laptop gedacht, deshalb ist das Layout (noch) nicht für die Handynutzung angepasst.
           Alle Funktionen der Website sind aber auch über das Handy ausführbar. 
           <br />
           <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading} variant="h6">Fragen zum "Profil-Bereich"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Wie kann ich mein Passwort ändern?<br />
           Um das eigene Passwort zu ändern, navigiert man auf die sogenannte "Mein Profil"-Seite. 
           Diese ist, wie der Logout-Button, oben rechts auf der Website zu finden.
           Auf der "Mein Profil"-Seite kann das Passwort geändert werden, indem zuerst erneut das alte Passwort sowie anschließend ein neues Passwort eingegeben werden. 
           Dies muss anschließend bestätigt werden.
           <br />
           <br />
           Wer kann mein Profil einsehen?<br />
           Nur die Administration der Website kann alle Benutzer*innen der Website sehen.<br />
           Kontakt: miriam.grabarits@tu-darmstadt.de
           <br />
           <br />
           Wie kann ich mein Profil wieder löschen? Wer kann das Löschen außerdem vornehmen?<br /> 
           Sie können Ihr Profil ebenfalls auf der Seite „Mein Profil“, das Sie über den Button oben rechts auf der Website erreichen, löschen. 
           Außerdem kann auch die Administration der Website das Löschen Ihres Profils vornehmen, bspw. bei Verstoß gegen die geltenden Regeln der Website-Nutzung oder auf Wunsch von Seiten der Nutzer*innen.<br /> 
           Kontakt:miriam.grabarits@tu-darmstadt.de
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} variant="h6">Fragen zu "Touren"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In welchem Wertebereich liegt der Schwierigkeitsgrad und kann dieser auch negativ sein?<br />
            Der Schwierigkeitsgrad einer Tour liegt immer zwischen 0 und 5 und kann somit nicht negativ sein. 
            Dabei beschreibt 0 die geringste Schwierigkeit und 5 die höchste.
            <br />
            <br />
            Was ist der Unterschied zwischen Ersteller*in und Benutzer*innen?<br />
            Der/die Ersteller*in erstellt eine neue Tour und alle Benutzer*innen sind die Teilnehmenden dieser Tour. Diese Teilnehmenden sind App-Nutzer*innen.
            <br />
            <br />
            Was ist das Passwort und was ist der Touren-Code einer Tour?<br />
            Um an einer nicht-öffentlichen Tour teilzunehmen, ist die Eingabe eines Download-Codes nötig.
            Der Touren-Code einer Tour wird automatisch beim Erstellen einer Tour generiert und kann von der Person, die die Tour erstellt hat, weitergegeben werden. Dabei handelt es sich aber um nicht-öffentliche Touren. Nur die Administration der App und der Website kann eine Tour als öffentliche Tour für alle App-Nutzer*innen freigeben.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
  );
  }