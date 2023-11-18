import { FC, ReactNode } from 'react';
import style from './Popup.module.scss';

type Props = {
  children: ReactNode;
};

export const Popup: FC<Props> = ({ children }) => {
  return (
    <div className={`${style.ListWrapper}  background input-border color`}>
      <ul className={style.List}>{children}</ul>
    </div>
  );
};
