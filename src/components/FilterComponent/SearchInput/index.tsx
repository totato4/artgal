import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'hooks/useDebounce';

import style from './SearchInput.module.scss';

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') == null ? '' : searchParams.get('q');
  // @ts-ignore
  const [value, setValue] = useState<string>(query);

  const debouncedValue = useDebounce<string>(value, 400);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // @ts-ignore
    if (debouncedValue.length === 0) {
      searchParams.delete('q');
      setSearchParams(searchParams);
      console.log(debouncedValue);
    } else {
      setSearchParams({ q: debouncedValue });
      console.log('second');
    }
  }, [debouncedValue]);
  useEffect(() => {
    const sParam = searchParams.get('q');
    if (!sParam) {
      searchParams.delete('q');
      setSearchParams(searchParams);
      console.log('SEARC');
    }
  }, []);

  const { wrapper } = style;

  return (
    <input
      className={`${wrapper} color background input-border`}
      value={value}
      onChange={(e) => onChangeInput(e)}
      placeholder="Name"
    />
  );
};

export default SearchInput;
