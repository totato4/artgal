import { FC } from 'react';
import style from './itemList.module.scss';

interface Props {
  children: any;
}

const ItemList: FC<Props> = ({ children }) => {
  return <div className={style.itemList}>{children}</div>;
};

export default ItemList;
