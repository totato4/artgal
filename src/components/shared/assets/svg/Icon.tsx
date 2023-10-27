import { FC } from 'react';
import Icons from './sprite.svg';

type props = {
  id?:
    | 'double-left-array'
    | 'left-array'
    | 'right-array'
    | 'double-right-array'
    | 'cross'
    | 'arrow-top';
  className?: any;
};

export const Icon: FC<props> = ({ id, className }) => {
  return (
    <svg className={`${className}`}>
      <use href={`${Icons + '#' + id} `}></use>
    </svg>
  );
};
