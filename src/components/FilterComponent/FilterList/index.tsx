import { FC } from 'react';
import style from './FilterList.module.scss';

type Props = {
  children: any;
};

const FilterList: FC<Props> = ({ children }) => (
  <div className={style.filters}>{children}</div>
);

export default FilterList;
