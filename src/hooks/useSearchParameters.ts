import { useSearchParams } from "react-router-dom";

const [searchParams, setSearchParams] = useSearchParams();


export const useSearchParameters = (urlParam: string | number,val: string | number | boolean, setState: any) => {
    //  переменная urlParam хранит string "name"
    // eventVal тоже хранит string значение
    setState(val);
    searchParams.set(`${urlParam}`, `${val}`);
    setSearchParams(searchParams);
    if (val == '') {
      searchParams.delete(`${urlParam}`);
      setSearchParams(searchParams);
    }

    return
    //  я хочу сделать вот так ...
    // setSearchParams({urlParam: eventVal})
    // дело в том что eventVal все норм он заходит вот так ${eventVal}
    // но urlParam нихрена, как быть???
    //  типа все это нужно добавлять через urlSearchParam, а не текущий рабочий вариант
    // суть в том что я хочу динамически прокидывать в компонент через пропсы параметр urlParam.
    //  но он не вставляется в объект, который я вставляю в setSearchParam
  };