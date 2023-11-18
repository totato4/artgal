import { ButtonHTMLAttributes, ReactNode, FC } from 'react';
import { useAppSelector } from 'hooks/useRedux';
import style from './Button.module.scss';

type Props = {
  children: ReactNode | string;
  borderRadius?: string;
  onClick?: () => void;
  ariaLabel?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({
  children,
  borderRadius,
  disabled = false,
  onClick,
  ariaLabel,
}) => {
  const { theme } = useAppSelector((state) => state.themeSlice);

  const disableStatus = disabled
    ? { borderRadius: `${borderRadius}`, opacity: '0.3' }
    : { borderRadius: `${borderRadius}` };

  return (
    <button
      disabled={disabled}
      aria-label={ariaLabel}
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
