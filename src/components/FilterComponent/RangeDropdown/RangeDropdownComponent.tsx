import { useState, useEffect, useRef, FC, ReactNode } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from 'hooks/useRedux';
import { Icon } from 'components/shared/assets/svg/Icon';
import { useDebounce } from 'hooks/useDebounce';
import { Input } from './Input/Input';
import { Popup } from './Popup/Popup';
import style from './RangeDropdownComponent.module.scss';

type Props = {
  filter?: string | boolean;
  children?: ReactNode;
};

export const RangeDropdownComponent: FC<Props> = () => {
  //
  const [searchParams, setSearchParams] = useSearchParams();
  const startQuery =
    searchParams.get('gte') == null ? '' : searchParams.get('gte');
  const endQuery =
    searchParams.get('lte') == null ? '' : searchParams.get('lte');

  const [startVal, setStartVal] = useState<any>(startQuery);
  const [endVal, setEndVal] = useState<any>(endQuery);
  const debouncedSearchStart = useDebounce<string | null>(startVal, 400);
  const debouncedSearchEnd = useDebounce<string | null>(endVal, 400);
  //
  const { theme } = useAppSelector((state) => state.themeSlice);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);
  useOnClickOutside(dropdownRef, () => setOpen(false));

  const onDeleteFilter = (e: any) => {
    e.stopPropagation();
    setEndVal('');
    setStartVal('');
    searchParams.delete(`${'gte'}`);
    searchParams.delete(`${'lte'}`);
    setSearchParams(searchParams);
    setOpen(false);
  };
  //

  const handleOnChangeStart = (value: any) => {
    setStartVal(value);
  };
  const handleOnChangeEnd = (value: any) => {
    setEndVal(value);
  };

  useEffect(() => {
    // @ts-ignore
    if (!debouncedSearchStart) {
      searchParams.delete('gte');
      setSearchParams(searchParams);
    } else {
      searchParams.set('gte', debouncedSearchStart);
      setSearchParams(searchParams);
    }
  }, [debouncedSearchStart]);
  useEffect(() => {
    // @ts-ignore
    if (!debouncedSearchEnd) {
      searchParams.delete('lte');
      setSearchParams(searchParams);
    } else {
      searchParams.set('lte', debouncedSearchEnd);
      setSearchParams(searchParams);
    }
  }, [debouncedSearchEnd]);

  return (
    <button
      ref={dropdownRef}
      type="button"
      onClick={() => setOpen(true)}
      className={`  background input-border 
      ${open ? style.dropdownActive : style.dropdown}   `}
    >
      <div className={style.button}>
        <h3 className={`${style.dropdownName} color`}>
          {startVal || endVal ? `${startVal} - ${endVal}` : 'Created'}
        </h3>
        <div className={style.dropdownArray}>
          {startVal || endVal ? (
            <div
              role="button"
              style={{ padding: '4px' }}
              onClick={(e) => {
                onDeleteFilter(e);
              }}
            >
              <Icon id="cross" className="cross" />
            </div>
          ) : (
            ''
          )}
          {open ? (
            <div style={{ rotate: '180deg' }}>
              <Icon id="arrow-top" className="arrow-top" />
            </div>
          ) : (
            <div>
              <Icon id="arrow-top" className="arrow-top" />
            </div>
          )}
        </div>
      </div>
      {open && (
        <Popup>
          <ul className={style.List}>
            <Input
              placeholder="for"
              val={startVal}
              setValue={handleOnChangeStart}
            />
            <div
              className="line"
              style={{
                width: '12px',
                height: '1px',
                backgroundColor: `${theme === 'dark' ? 'white' : 'black'}`,
              }}
            />
            <Input
              placeholder="before"
              val={endVal}
              setValue={handleOnChangeEnd}
            />
          </ul>
        </Popup>
      )}
    </button>
  );
};
