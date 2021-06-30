import React from 'react';
import { useParams } from 'react-router-dom';

function DetailScreen() {
  const { id } = useParams();
  return (
    <div>{id}</div>
  );
}

export default DetailScreen;
