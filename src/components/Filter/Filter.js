import React from 'react';

export const Filter = ({ filter, onChangefilter }) => {
  return (
    <label>
      Filter by name: 
      <input type="text" onChange={onChangefilter} value={filter} />
    </label>
  );
};
