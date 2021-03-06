import React from 'react'
import { gql, useQuery } from '@apollo/client'

/* fetch('http://localhost:5000', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: `
    query {
      badge {
         _id
        name
        picture {
            $oid
        }
        unlocked_picture {
            $oid
        }
        test
      }
    }` 
  }),
})
.then(res => res.json())
.then(res => console.log(res.data)); */


const GET_ALL_BADGES = gql`
  query getBadges {
    badge {
        _id
        name
        picture {
            $oid
        }
        unlocked_picture {
            $oid
        }
        test
	}
      }
    }
`;

export const badges = () => {
    const { loading, error, data } = useQuery( GET_ALL_BADGES);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <ul>
        { data.badge.map((i) => (
          <li key={badge._id}>{badge.name}</li>
        ))}
      </ul>
    )
  }