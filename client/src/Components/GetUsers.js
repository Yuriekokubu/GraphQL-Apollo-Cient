import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [dataFetch, setdataFetch] = useState([]);

  useEffect(() => {
    if (data) {
      setdataFetch(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      {dataFetch.map((d) => (
        <p>{d.firstName}</p>
      ))}
    </div>
  );
}

export default GetUsers;
