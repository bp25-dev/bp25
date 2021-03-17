import React from 'react';
import MuiGridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { linkToRecord } from 'ra-core';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: '-2px',
  },
  gridList: {
    width: '100%',
    margin: 0,
  },
  tileBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)',
  },
  placeholder: {
    backgroundColor: theme.palette.grey[300],
    height: '100%',
  },
  price: {
    display: 'inline',
    fontSize: '1em',
  },
  link: {
    color: '#003473',
  },
}));

// picture grid for showing images
export const PictureGrid = ({ ids, data, basePath }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <MuiGridList cellHeight={180} cols={3} className={classes.gridList}>
          {/* get the content of a certain col val by data[id].field */}
        {ids.map((id) => (
          <GridListTile
            component={Link}
            key={id}
            to={linkToRecord(basePath, data[id]._id)}
          >
            <img src={data[id].picture} alt='' />
            <GridListTileBar
              className={classes.tileBar}
              title={data[id].description}
            />
          </GridListTile>
        ))}
      </MuiGridList>
    </div>
  );
};
