import SearchInput from 'components/FilterComponent/SearchInput';
import Dropdown from '../Dropdown';
import style from './FilterList.module.scss';
import { FC } from 'react';
type props = {
  children: any;
};

const FilterList: FC<props> = ({ children }) => {
  return <div className={style.filters}>{children}</div>;
};

export default FilterList;
