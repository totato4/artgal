import React, { FC } from 'react';
import style from './itemList.module.scss';

interface props {
  children: any;
}

const ItemList: FC<props> = ({ children }) => {
  return <div className={style.itemList}>{children}</div>;
};

export default ItemList;
