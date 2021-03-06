import React from 'react';
import {
  UrlField,
  ImageField,
  BooleanField,
  useListContext,
  EditButton,
  usePermissions
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, CardActions, CardActionArea } from '@material-ui/core';
import { linkToRecord } from 'ra-core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    div: {
      margin: '1em', // spacing between cards
    },
    card: {
      width: 300,
      height: 500,
      margin: '0.5em',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    link: {
      minHeight: 45,
      fontSize: 12,
    },
    actions: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  });

// show the pictures on a grid
export const ProfilePictureGrid = () => {
    const { ids, data, basePath } = useListContext();
    const classes = useStyles();
    const {permissions} = usePermissions();
    return (
      <div className={classes.div}>
        {ids.map((id) => (
          <Card key={id} className={classes.card}>
            <CardActionArea>
            <CardHeader />
            <CardContent>
              Profilbild:&nbsp;
              <ImageField record={data[id]} source='picture' />
            </CardContent>
            <CardContent className={classes.link}>
              Link:&nbsp;
              <UrlField record={data[id]} source='picture' />
            </CardContent>
            <CardContent>
              Status:&nbsp;
              <BooleanField record={data[id]} source='locked' />
            </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
            {permissions === 'admin' &&
              <EditButton
                label = 'Editieren'
                to={linkToRecord(basePath, data[id].id)}
                component={Link}
                variant='outlined'
                color='primary'
              />
              }
            </CardActions>
          </Card>
        ))}
      </div>
    );
  };