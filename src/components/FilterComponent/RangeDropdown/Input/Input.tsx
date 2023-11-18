import { FC } from 'react';
import { useAppSelector } from 'hooks/useRedux';
import style from './Input.module.scss';

type Props = {
  val?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  urlParam?: string;
  handleChange?: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<Props> = ({ val, placeholder, setValue }: any) => {
  const { theme } = useAppSelector((state) => state.themeSlice);

  return (
    <input
      type="number"
      placeholder={placeholder}
      value={val}
      onChange={(e) => setValue(e.target.value)}
      className={style.input}
      style={{ backgroundColor: `${theme === 'dark' ? 'white' : '#EFEFEF'}` }}
    />
  );
};
