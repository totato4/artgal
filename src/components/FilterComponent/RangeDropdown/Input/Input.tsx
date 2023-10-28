import { useEffect } from 'react';
import { useAppSelector } from '../../../../RTK/store';
import style from './Input.module.scss';
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

type props = {
  value: string | number;
  setValue: any;
  urlParam: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<props> = ({
  placeholder,
  value,
  setValue,
  urlParam,
}: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { theme } = useAppSelector((state) => state.themeSlice);
  const onChange = (eventVal: string | number) => {
    setValue(eventVal);
    searchParams.set(`${urlParam}`, `${eventVal}`);
    setSearchParams(searchParams);
    if (eventVal == '') {
      searchParams.delete(`${urlParam}`);
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {}, [value]);

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={style.input}
      style={{ backgroundColor: `${theme == 'dark' ? 'white' : '#EFEFEF'}` }}
    />
  );
};
