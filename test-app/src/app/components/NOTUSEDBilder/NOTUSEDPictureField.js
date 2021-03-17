import { fetchUtils } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

// custom http client authorization header
const fetchJson = (url, options = {}) => {
  options.user = {
    authenticated: true,
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjE1MjgzNjQ4LCJuYmYiOjE2MTUyODM2NDgsImp0aSI6ImVmMDVjOTdiLTNjN2ItNGMyYy1hNzI1LTIyNWVmYmRmMTdjNCIsImlkZW50aXR5IjoicGEiLCJleHAiOjE2MTUyODQ1NDgsInVzZXJfY2xhaW1zIjp7ImFkbWluIjp0cnVlfX0.xWbMilYrrojQCi63zH7npgiKrIJveVrxBJcJ0ZaEDRI',
  };
  return fetchUtils.fetchJson(url, options);
};

const apiUrl = 'http://127.0.0.1:5000/file';
const httpClient = fetchJson;

const imgProvider = {
  getOne: (resource, params) =>
    httpClient(
      `${apiUrl}/download?type=${resource}&id=${params.id}`
    )
  // original: .
  .then(({ json }) => ({ data: json })),
  // change default id to custom id
  //.then(({ json }) => ({...json, id: json._id})),
};

//testing
/* imgProvider.getOne('Badge', { id: 'Gegangene_Rundgaenge_gold' })
    .then(response => {console.log(response.data); });  */

// localhost:5000/file/download?type=Badge&id=Gegangene_Rundgaenge_gold
// link/file/download?type={resource}&id={resource.id}

const useStyles = makeStyles({
  img: {
    '& img': {
      height: 50,
      width: 50,
      objectFit: 'contain',
    },
  },
});

export const BadgeField = ({ record }) => {
  const classes = useStyles();
  const data = imgProvider.getOne(record, record._id);
  return (
    <span>
      {/* User {data.username} */}
      <img src={data._id} className={classes.img}></img>
    </span>
  );
};
// 127.0.0.1 - - [09/Mar/2021 11:02:14] "OPTIONS /file/download?type=[object%20Object]&id=undefined HTTP/1.1" 200 -