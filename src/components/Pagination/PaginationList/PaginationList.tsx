import { FC, ReactNode } from 'react';
import style from './PaginationList.module.scss';

type props = {
  children: ReactNode;
};

export const PaginationList: FC<props> = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};
