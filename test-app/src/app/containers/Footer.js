import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import mint from '../data/images/mint_logo.png';
import bm from '../data/images/bm_logo.png';

const useStyles = makeStyles({
  wrapper: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgWrapper: {
    width: '100%',
    heigth: 100,
    margin: 'auto',
    textAlign: 'left',
    padding: 20,
  },
  textWrapper: {
    color: 'textSecondary',
    margin: 50,
    width: 1000,
    textAlign: 'left',
  },
  image: {
    width: '20%',
    height: 'auto',
    display: 'inline-block',
    vertical: 'middle',
  },
  copyright: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function Copyright() {
  const classes = useStyles();
  return (
    <div className={classes.copyright}>
      <p>
        Copyright ©
        <a href='https://www.geschichte.tu-darmstadt.de/institut_fuer_geschichte_1/fach__und_arbeitsgebiete_ifg/geschichtsdidaktik/uebersicht_ifg_gedid/lehre_ifg_gedid/gesch_vern.de.jsp'>
          {' '}Projekt Geschichte vernetzt{' '}
        </a>
        2021
      </p>
    </div>
  );
}

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.textWrapper}>
      <h6>
          Das Projekt MINTplus<sup>2</sup>: Systematischer und vernetzter
          Kompetenzaufbau in der Lehrerbildung im Umgang mit Digitalisierung und
          Heterogenität wird im Rahmen der gemeinsamen „Qualitätsoffensive
          Lehrerbildung“ von Bund und Ländern aus Mitteln des Bundesministeriums
          für Bildung und Forschung gefördert
        </h6>
        </div>
        <div className={classes.imgWrapper}>
          <img src={bm} className={classes.image} />
          <img src={mint} className={classes.image} />
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
