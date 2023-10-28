import React from 'react';
import style from './DropdownItem.module.scss';

export const DropdownItem = ({ id, name, onChangeFilter }: any) => {
  return (
    <li className={style.item} onClick={() => onChangeFilter(name, id)}>
      {name}
    </li>
  );
};
