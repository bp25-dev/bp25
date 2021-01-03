import * as React from 'react';
import Card from '@material-ui/core/Card';
import { Grid, Paper, Typography } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { Title } from 'react-admin';


export default () => (
  <Card /* style={cardStyle} */>
    <Title title='Hessisches Landesmusuem' />
    <CardMedia
      style={{ paddingTop: '56.25%' , maxHeight:100}}
      image={
        'https://www.darmstadtimherzen.de/wp-content/uploads/2020/07/hessisches-landesmuseum-2397084_1920-3.jpg'
      }
    ></CardMedia>
    <CardContent
      style={{
        textAlign: 'left',
      }}
    >
      Wilkommen zur Administration
    </CardContent>
  </Card>
);
