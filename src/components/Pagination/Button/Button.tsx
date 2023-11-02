import { ButtonHTMLAttributes, ReactNode, FC } from 'react';
import style from './Button.module.scss';
import { useAppSelector } from '../../../RTK/store';

type Props = {
  children?: ReactNode;
  borderRadius?: string;
  onClick?: any;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({
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
      type="button"
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
