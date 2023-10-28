import style from './RangeDropdownWrapper.module.scss';
import { useState, useEffect, useRef, FC } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useSearchParams } from 'react-router-dom';
import { ReactNode } from 'react';
import { Icon } from '../../../shared/assets/svg/Icon';

type props = {
  filter: string | boolean;
  children?: ReactNode;
  filterValue?: any;
  setFilterValue?: any;
};

export const RangeDropdownWrapper: FC<props> = ({
  filter,
  children,
  setFilterValue,
  filterValue,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);
  useOnClickOutside(dropdownRef, () => setOpen(false));

  const [searchParams, setSearchParams] = useSearchParams();

  const onDeleteFilter = (e: any) => {
    e.stopPropagation();
    setFilterValue(filter);
    searchParams.delete(`${filter}`);
    setSearchParams(searchParams);
    setOpen(false);
  };

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
        <h3 className={`${style.dropdownName} color`}>{filterValue}</h3>
        <div className={style.dropdownArray}>
          {filterValue !== `${filter}` && (
            <div
              style={{ padding: '4px' }}
              onClick={(e) => {
                onDeleteFilter(e);
              }}
            >
              <Icon id="cross" className="cross" />
            </div>
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
      {open && children}
    </button>
  );
};
