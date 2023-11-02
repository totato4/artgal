import { FC } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../../../RTK/store';
import style from './Input.module.scss';

type Props = {
  val?: any;
  setValue?: any;
  urlParam?: string;
  handleChange?: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

// {
//   placeholder,
//   val,
//   setValue,
//   urlParam,
// }: any

export const Input: FC<Props> = ({ val, placeholder, setValue }: any) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const { theme } = useAppSelector((state) => state.themeSlice);
  // const par = useSearchParameters();
  // const onChange = (eventVal: string | number) => {
  //   //  переменная urlParam хранит string "name"
  //   // eventVal тоже хранит string значение
  //   setValue(eventVal);
  //   searchParams.set(`${urlParam}`, `${eventVal}`);
  //   setSearchParams(searchParams);
  //   if (eventVal === '') {
  //     searchParams.delete(`${urlParam}`);
  //     setSearchParams(searchParams);
  //   }

  // useSearchParameters(urlParam, eventVal, setValue);

  //  я хочу сделать вот так ...
  // setSearchParams({urlParam: eventVal})
  // дело в том что eventVal все норм он заходит вот так ${eventVal}
  // но urlParam нихрена, как быть???
  //  типа все это нужно добавлять через urlSearchParam, а не текущий рабочий вариант
  // суть в том что я хочу динамически прокидывать в компонент через пропсы параметр urlParam.
  //  но он не вставляется в объект, который я вставляю в setSearchParam
  // };

  // useEffect(() => {}, [val]);

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
