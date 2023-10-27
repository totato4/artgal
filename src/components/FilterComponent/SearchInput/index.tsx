import { useState } from 'react';
import style from './SearchInput.module.scss';
import { useAppSelector } from '../../../RTK/store';
import { useEffect } from 'react';
import { useDebounce } from 'usehooks-ts';
import { useSearchParams } from 'react-router-dom';

type ButtonProps = React.ButtonHTMLAttributes<HTMLInputElement>;
type myProps = {
  value?: string;
};

const SearchInput = ({}: myProps) => {
  const [value, setValue] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const debouncedSearch = useDebounce<string>(value, 400);

  const { theme } = useAppSelector((state) => state.themeSlice);
  const { wrapper, black, white } = style;

  // const { isBlack } = useAppSelector((state) => state.themeSlice);

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
