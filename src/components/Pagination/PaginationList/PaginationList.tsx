import { FC, ReactNode } from 'react';
import style from './PaginationList.module.scss';

type Props = {
  children: ReactNode;
};

export const PaginationList: FC<Props> = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};
