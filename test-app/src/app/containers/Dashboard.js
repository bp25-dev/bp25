import * as React from 'react';
import Card from '@material-ui/core/Card';
import { Grid, Paper, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { Title } from 'react-admin';

// style for the cards
const useStyles = makeStyles(() => ({
   card: {
    maxWidth: 500,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  }, 
  media: {
    paddingTop: '56.25%',
  },
  content: {
    textAlign: 'left',
  },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
  root: {
    minWidth: 200
  },
  pos: {
    marginBottom: 12
  }
}));

// style for the gird
const useGridStyles = makeStyles(({ breakpoints }) => ({
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
}));

// card components for different links
const CustomCard = ({ classes, image, title, subtitle }) => {
  const cardStyles = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} />
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant={'h2'}>
          {title}
        </Typography>
        <Typography className={classes.subtitle}>{subtitle}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Klicke hier</Button>
      </CardActions>
    </Card>
  );
};

// place the card on a grid
export default function Dashboard() {
  const cardStyles = useStyles();
  const gridStyles = useGridStyles();
  return (
    <Grid
      container
      spacing={4}
      className={gridStyles.gridContainer}
      justify='center'
    >
      <Title title='Hessisches Landesmusuem' />
      <Grid item xs={12} sm={6} md={4}>
        <CustomCard
          classes={cardStyles}
          title={'Admins'}
          subtitle={'Erstelle Administratoren'}
          image={
            'https://www.geschichte.tu-darmstadt.de/media/geschichte/ifg/didaktik/geschichtsdidaktik_bilder/01_1180x0.png'
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomCard
          classes={cardStyles}
          title={'Touren'}
          subtitle={'Erstelle Touren'}
          image={
            'https://www.geschichte.tu-darmstadt.de/media/geschichte/ifg/didaktik/geschichtsdidaktik_bilder/02_376x376.png'
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomCard
          classes={cardStyles}
          title={'Exponate'}
          subtitle={'Bearbeite Exponate'}
          image={
            'https://www.geschichte.tu-darmstadt.de/media/geschichte/ifg/didaktik/geschichtsdidaktik_bilder/05_versionKlein_376x376.png'
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CustomCard
          classes={cardStyles}
          title={'Abzeichen'}
          subtitle={'Füge neue Abzeichen hinzu'}
          image={
            'https://www.geschichte.tu-darmstadt.de/media/geschichte/ifg/didaktik/geschichtsdidaktik_bilder/03_376x376.png'
          }
        />
      </Grid>
    </Grid>
  );
}
