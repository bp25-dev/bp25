import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import mint from '../data/images/mint_logo.png';
import bm from '../data/images/bm_logo.png';

const useStyles = makeStyles({
  wrapper: {
    textAlign: 'center',
  },
  imgFooter: {
    width: '100%',
    heigth: 100,
    margin: 'auto',
    textAlign: 'center',
    padding: 10,
  },
  image: {
    width: '15%',
    height: 'auto',
    display: 'inline-block',
    vertical: 'middle',
  },
  text: {
    color: 'textSecondary'
  }
});

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
        <div className={classes.imgFooter}>
        <img src={bm} className={classes.image} />
        <img src={mint} className={classes.image} />
        </div>
      <h6 className={classes.text} >
        Das Projekt MINTplus<sup>2</sup>: Systematischer und vernetzter
        Kompetenzaufbau in der Lehrerbildung im Umgang mit Digitalisierung und
        Heterogenität wird im Rahmen der gemeinsamen „Qualitätsoffensive
        Lehrerbildung“ von Bund und Ländern aus Mitteln des Bundesministeriums
        für Bildung und Forschung gefördert
      </h6>
    </div>
  );
};

export default Footer;
