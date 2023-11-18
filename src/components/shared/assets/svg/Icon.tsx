import { FC } from 'react';
import Icons from './sprite.svg';

type Props = {
  id?:
    | 'double-left-array'
    | 'left-array'
    | 'right-array'
    | 'double-right-array'
    | 'cross'
    | 'arrow-top'
    | 'frame'
    | 'Logo';
  className?: any;
};

export const Icon: FC<Props> = ({ id, className }) => (
  <svg className={`${className}`}>
    <use href={`${`${Icons}#${id}`} `} />
  </svg>
);
