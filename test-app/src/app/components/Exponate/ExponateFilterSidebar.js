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
import ArtTrackIcon from '@material-ui/icons/ArtTrack';

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
            value={{ sub_category: data[id].sub_category }}
          />
        ))}
      </FilterList>
    );
  };

  // manual
  {/**const MapSubCategoryFilter = () => {
    return (
      <FilterList label='Subkategorie' icon={<ClassIcon />}>
          <FilterListItem
            label = "Archäologie/Vor- und Frühgeschichte"
            value = {{ sub_category : "Archäologie/Vor- und Frühgeschichte" }}
          />
          <FilterListItem
            label = "Gotik"
            value = {{ sub_category : "Gotik" }}
          />
          <FilterListItem
            label = "Expressionsimus"
            value = {{ sub_category : "Expressionsimus" }}
          />
          <FilterListItem
            label = "Realismus"
            value = {{ sub_category : "Realismus" }}
          />
          <FilterListItem
            label = "Symbolismus"
            value = {{ sub_category : "Symbolismus" }}
          />
      </FilterList>
    );
  };**/}


 
 const MapCreatorFilter = () => {
    const { ids, data } = useListContext();
    return (
      <FilterList label='Ersteller' icon={<PersonIcon />}>
        {ids.map((id) => (
          <FilterListItem
            label={data[id].creator}
            key={data[id]._id}
            value={{ creator: data[id].creator }}
          />
        ))}
      </FilterList>
    );
  };

  //problem: same art type is displayed more than once
  {/**const MapArtTypeFilter = () => {
    const { ids, data } = useListContext();
    return (
      <FilterList label='Kunsttyp' icon={<ArtTrackIcon />}>
        {ids.map((id) => (
          <FilterListItem
            label={data[id].art_type}
            key={data[id]._id}
            value={{ art_type: data[id].art_type }}
          />
        ))}
      </FilterList>
    );
  }; **/}

  const MapArtTypeFilter = () => {
    return (
      <FilterList label='Kunsttyp' icon={<ArtTrackIcon />}>
          <FilterListItem
            label = "Gemälde"
            value = {{ art_type : "Gemälde" }}
          />
          <FilterListItem
            label = "Kunsthandwerk; Fibel"
            value = {{ art_type : "Kunsthandwerk; Fibel" }}
          />
          <FilterListItem
            label = "Zeitmessung; Automat; Spielzeug"
            value = {{ art_type : "Zeitmessung; Automat; Spielzeug" }}
          />
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
          <HasImageFilter />
          <MapArtTypeFilter/>
          <MapSubCategoryFilter />
          <MapCreatorFilter />
        </CardContent>
      </Card>
    );
  };