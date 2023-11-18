import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'hooks/useDebounce';

import style from './SearchInput.module.scss';

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  // const query = searchParams.get('q') == null ? '' : searchParams.get('q');

  const [value, setValue] = useState<string>(query || '');

  const debouncedValue = useDebounce<string>(value, 400);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // @ts-ignore
    if (!debouncedValue) {
      searchParams.delete('q');
      setSearchParams(searchParams);
    } else {
      searchParams.set('q', debouncedValue);
      setSearchParams(searchParams);
    }
  }, [debouncedValue]);

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
