import { useEffect } from 'react';
import { useAppSelector } from '../../../../RTK/store';
import style from './Input.module.scss';
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearchParameters } from '../../../../hooks/useSearchParameters';

type props = {
  value?: string | number;
  setValue?: any;
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
  // const par = useSearchParameters();
  const onChange = (eventVal: string | number) => {
    //  переменная urlParam хранит string "name"
    // eventVal тоже хранит string значение
    setValue(eventVal);
    searchParams.set(`${urlParam}`, `${eventVal}`);
    setSearchParams(searchParams);
    if (eventVal == '') {
      searchParams.delete(`${urlParam}`);
      setSearchParams(searchParams);
    }

    // useSearchParameters(urlParam, eventVal, setValue);

    //  я хочу сделать вот так ...
    // setSearchParams({urlParam: eventVal})
    // дело в том что eventVal все норм он заходит вот так ${eventVal}
    // но urlParam нихрена, как быть???
    //  типа все это нужно добавлять через urlSearchParam, а не текущий рабочий вариант
    // суть в том что я хочу динамически прокидывать в компонент через пропсы параметр urlParam.
    //  но он не вставляется в объект, который я вставляю в setSearchParam
  };

  useEffect(() => {}, [value]);

  return (
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={style.input}
      style={{ backgroundColor: `${theme == 'dark' ? 'white' : '#EFEFEF'}` }}
    />
  );
};
