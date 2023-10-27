import React from 'react';

export const DropdownItem = ({ id, name, onChangeFilter }: any) => {
  return <li onClick={() => onChangeFilter(name, id)}>{name}</li>;
};
