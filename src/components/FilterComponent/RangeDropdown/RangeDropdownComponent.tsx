import { useState, useEffect, useRef, FC } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useSearchParams } from 'react-router-dom';
import { ReactNode } from 'react';
import { Input } from './Input/Input';
import { Popup } from './Popup/Popup';
import style from './RangeDropdownComponent.module.scss';
import { useAppSelector } from '../../../RTK/store';
import { Icon } from '../../../components/shared/assets/svg/Icon';

type props = {
  filter?: string | boolean;
  children?: ReactNode;
};

export const RangeDropdownComponent: FC<props> = () => {
  const { theme } = useAppSelector((state) => state.themeSlice);
  const [startVal, setStartVal] = useState<string>('');
  const [endVal, setEndVal] = useState<string>('');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);
  useOnClickOutside(dropdownRef, () => setOpen(false));

  const [searchParams, setSearchParams] = useSearchParams();

  const onDeleteFilter = (e: any) => {
    e.stopPropagation();
    setEndVal('');
    setStartVal('');
    searchParams.delete(`${'gte'}`);
    searchParams.delete(`${'lte'}`);
    setSearchParams(searchParams);
    setOpen(false);
  };

  useEffect(() => {
    // @ts-ignore
    searchParams.get('gte') !== null && setStartVal(searchParams.get('gte'));
    // @ts-ignore
    searchParams.get('lte') !== null && setEndVal(searchParams.get('lte'));
  }, []);

  return (
    <button
      ref={dropdownRef}
      type="button"
      // className={`${open ? style.dropdownActive : style.dropdown}`}
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
          <Input
            placeholder="for"
            value={startVal}
            setValue={setStartVal}
            urlParam={'gte'}
          />
          <div
            className="line"
            style={{
              width: '12px',
              height: '1px',
              backgroundColor: `${theme == 'dark' ? 'white' : 'black'}`,
            }}
          />
          <Input
            placeholder="before"
            value={endVal}
            setValue={setEndVal}
            urlParam={'lte'}
          />
        </Popup>
      )}
    </button>
  );
};
