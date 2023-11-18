import style from './DropdownItem.module.scss';

type Props = {
  id: number;
  name: string;
  onChangeFilter: (name: string, id: number) => void;
};

export const DropdownItem = ({ id, name, onChangeFilter }: Props) => (
  <li className={style.item} onClick={() => onChangeFilter(name, id)}>
    {name}
  </li>
);
