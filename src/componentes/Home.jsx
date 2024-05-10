import React, { useEffect, useState } from 'react';
import Tarjeta from './Tarjeta';

const Home = () => {
    const [users, setUsers]=useState([]);
 useEffect(() => {
    fetchRandomCharacters();
  }, []);

  const fetchRandomCharacters = () => {
    const randomIds = generateRandomIds(3, 10);
    const promises = randomIds.map((id) =>
      fetch(`https://661037cf0640280f219c98da.mockapi.io/api/v2/users/${id}`).then((res) =>
        res.json()
      )
    );

    Promise.all(promises).then((data) => {
      setUsers(data);
    });
  };

  const generateRandomIds = (count,maxId) => {
    const ids = [];
    while (ids.length < count) {
      const randomId = Math.floor(Math.random() * (maxId+1));
      if (!ids.includes(randomId)) {
        ids.push(randomId);
      }
    }
    return ids;
  };

  return (
    <>
      {users.map((user, index) => (
        <Tarjeta key={index} user={user} />
      ))}
    </>
  );
};

export default Home;