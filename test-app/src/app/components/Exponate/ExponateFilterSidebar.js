import React from 'react';
import {
  useListContext,
  FilterList,
  FilterListItem,
  FilterLiveSearch,
} from 'react-admin';
// material UI styling
import { Card as MuiCard, CardContent, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
//icons
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ClassIcon from '@material-ui/icons/Class';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';

// filter sidebar styling
const Card = withStyles((theme) => ({
    root: {
      [theme.breakpoints.up('sm')]: {
        order: -1, // display on the left rather than on the right of the list
        width: '15em',
        minWidth: 250,
        marginRight: '1em',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  }))(MuiCard);
  

  // check if picture object is not empty (create boolean)
  const HasImageFilter = () => (
    <FilterList label='Bildverknüpfung' icon={<ImageSearchIcon />}>
      <FilterListItem label='vorhanden' value={{ img: true }} />
      <FilterListItem label='nicht vorhanden' value={{ img: false }} />
    </FilterList>
  );
  
  const MapSubCategoryFilter = () => {
    const { ids, data } = useListContext();
    return (
      <FilterList label='Subkategorie' icon={<ClassIcon />}>
        {ids.map((id) => (
          <FilterListItem
            label={data[id].sub_category}
            key={data[id]._id}
            value={{ groups: data[id]._id }}
          />
        ))}
      </FilterList>
    );
  };

 
 const MapCreatorFilter = () => {
    const { ids, data } = useListContext();
    return (
      <FilterList label='Ersteller' icon={<PersonIcon />}>
        {ids.map((id) => (
          <FilterListItem
            label={data[id].creator}
            key={data[id]._id}
            value={{ groups: data[id]._id }}
          />
        ))}
      </FilterList>
    );
  };
  
  const MapContextFilter = () => {
    const { ids, data } = useListContext();
    return (
      <FilterList label='Interdisziplinäre Bezüge' icon={<SchoolIcon />}>
        {ids
          .map((id) => (
            <FilterListItem
              label={data[id].interdisciplinary_context.split('Themen:')}
              value={data[id]._id}
            />
          ))
          .filter((a, b) => ids.indexOf(a) === b)}
      </FilterList>
    );
  };
  
  // sidebar functionality
  export const FilterSidebar = () => {
    return (
      <Card>
        <CardContent>
          <FilterLiveSearch />
          <Typography variant='subtitle1' color='error' gutterBottom>
            Entwurf: Bitte klicke auf keine von den unteren Kategorien
          </Typography>
          <HasImageFilter />
          <MapSubCategoryFilter />
          <MapCreatorFilter />
        </CardContent>
      </Card>
    );
  };