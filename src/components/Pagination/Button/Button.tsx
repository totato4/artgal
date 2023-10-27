import React, { ButtonHTMLAttributes } from 'react';
import { FC } from 'react';
import { ReactNode } from 'react';
import style from './Button.module.scss';
import { useAppSelector } from '../../../RTK/store';

type props = {
  children?: ReactNode;
  classname?: any;
  borderRadius?: string;
  onClick?: any;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<props> = ({
  children,
  borderRadius,
  disabled = false,
  onClick,
}) => {
  const { theme } = useAppSelector((state) => state.themeSlice);

  const disableStatus = disabled
    ? { borderRadius: `${borderRadius}`, opacity: '0.3' }
    : { borderRadius: `${borderRadius}` };

  return (
    <button
      onClick={onClick}
      data-theme-color-hover={theme}
      data-theme-background-hover={theme}
      data-theme-border-hover={theme}
      className={` border-hover background-hover ${
        style.btn
      } color-hover border-hover ${disabled && style.hoverOff}`}
      style={disableStatus}
    >
      {children}
    </button>
  );
};
