import React, { useState, useEffect } from 'react';

export const Players = ({ playersPromise }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!playersPromise) return; // <-- prevent undefined errors

    playersPromise
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Failed to load players:', err));
  }, [playersPromise]);

  return <div>players: {data.length}</div>;
};