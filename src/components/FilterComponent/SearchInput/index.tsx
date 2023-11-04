import { useState, useEffect } from 'react';
import { useDebounce } from 'usehooks-ts';
import { useSearchParams } from 'react-router-dom';

import style from './SearchInput.module.scss';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const debouncedSearch = useDebounce<string>(value, 400);

  const { wrapper } = style;

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (debouncedSearch.length < 1) {
      searchParams.delete('q');
      setSearchParams(searchParams);
    } else {
      searchParams.set('q', debouncedSearch);
      setSearchParams(searchParams);
    }
  }, [debouncedSearch]);
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
