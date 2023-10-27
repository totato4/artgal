import { useAppSelector } from '../../../../RTK/store';
import style from './Input.module.scss';

export const Input: any = ({ placeholder, value, setValue }: any) => {
  const { theme } = useAppSelector((state) => state.themeSlice);

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={style.input}
      style={{ backgroundColor: `${theme == 'dark' ? 'white' : '#EFEFEF'}` }}
    />
  );
};
