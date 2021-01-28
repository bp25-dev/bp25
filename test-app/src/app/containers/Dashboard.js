import * as React from 'react';
import { Link } from 'react-router-dom';
import { Title } from 'react-admin';
//material UI imports
import Card from '@material-ui/core/Card';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { ContactMail } from '@material-ui/icons';

//Copyright
function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" >
      Projekt Geschichte vernetzt
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// style for the cards
const useStyles = makeStyles(() => ({
  card: {
    maxWidth: '100%',
    margin: 'auto',
    transition: '0.3s',
    color: '#000',
    backgroundColor: 'transparent',
    //   boxShadow: 'none',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginLeft: '50%',
    margin: 'auto',
    display: 'flex',
    objectFit: 'contain',
    right: 0,
    bottom: 0,
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
    minWidth: '90%',
  },
  pos: {
    marginBottom: 12,
  },
}));

// style for the grid
const useGridStyles = makeStyles(({ breakpoints }) => ({
  gridContainer: {
    maxWidth: '100%',
    //   paddingLeft: '40px',
    //   paddingRight: '40px',
    //  paddingTop: '0px',
    margin: 'auto',
    position: 'relative',
  },
}));

// card components for different links
const CustomCard = ({ classes, image, title, subtitle, path }) => {
  const cardStyles = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.con}>
        <CardContent className={classes.content}>
          <div
            style={{
              position: 'relative',
            }}
          >
            <CardMedia className={classes.media} image={image} />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                //  transform: 'translateX(25%)'
              }}
            >
              <Typography
                className={classes.title}
                variant={'h4'}
                component={'h4'}
              >
                {title}
              </Typography>
              <Typography className={classes.subtitle}>{subtitle}</Typography>
              <CardActions>
                <Link to={path}>
                  <Button renderAs='button'>Klicke hier</Button>
                </Link>
              </CardActions>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

// place the card on a grid
export default function Dashboard() {
  const cardStyles = useStyles();
  const gridStyles = useGridStyles();

  return (
    <Container> 
    <Grid
      container
      //  direction="row"
      spacing={0}
      className={gridStyles.gridContainer}
      justify='center'
     
      
    >
      <Title title='Hessisches Landesmusuem' />
      <Grid item md>
        <CustomCard
          classes={cardStyles}
          title={'Benutzer'}
          subtitle={'Verwalte Benutzer*innen'}
          image={
            'https://www.geschichte.tu-darmstadt.de/media/geschichte/ifg/didaktik/geschichtsdidaktik_bilder/01_1180x0.png'
          }
          path = "/Benutzer"
        />
        <CustomCard
          classes={cardStyles}
          title={'Touren'}
          subtitle={'Erstelle Touren'}
          image={ 
            'https://www.geschichte.tu-darmstadt.de/media/geschichte/ifg/didaktik/geschichtsdidaktik_bilder/02_376x376.png'
          }
          path='/Touren'
        />
      </Grid>
      <Grid item md>
        <CustomCard
          classes={cardStyles}
          title={'Exponate'}
          subtitle={'Bearbeite Exponate'}
          image={
            'https://www.geschichte.tu-darmstadt.de/media/geschichte/ifg/didaktik/geschichtsdidaktik_bilder/05_versionKlein_376x376.png'
          }
          path='/Exponate'
        />
        <CustomCard
          classes={cardStyles}
          title={'Abzeichen'}
          subtitle={'Füge neue Abzeichen hinzu'}
          image={
            'https://www.geschichte.tu-darmstadt.de/media/geschichte/ifg/didaktik/geschichtsdidaktik_bilder/03_376x376.png'
          }
          path='/Abzeichen'
        />
      </Grid>
    </Grid>
     <Copyright/>
     </Container> 
  );
}