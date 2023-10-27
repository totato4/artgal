import style from './RangeDropdownWrapper.module.scss';
import { useState, useEffect, useRef, FC } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useSearchParams } from 'react-router-dom';
import { ReactNode } from 'react';
import { Icon } from '../../../shared/assets/svg/Icon';

type props = {
  filter: string | boolean;
  children?: ReactNode;
};

export const RangeDropdownWrapper: FC<props> = ({ filter, children }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);
  useOnClickOutside(dropdownRef, () => setOpen(false));

  const [searchParams, setSearchParams] = useSearchParams();
  const [filterValue, setFilterValue] = useState<
    string | boolean | null | number
  >(filter);

  const onChangeFilter = (name: string, id?: number, e?: any) => {
    setFilterValue(name);
    searchParams.set(`${filter}`, `${id}`);
    setSearchParams(searchParams);
    setOpen(false);
  };

  const onDeleteFilter = (e: any) => {
    e.stopPropagation();
    setFilterValue(filter);
    searchParams.delete(`${filter}`);
    setSearchParams(searchParams);
    setOpen(false);
  };

  useEffect(() => {
    // if (
    //   searchParams.get(`${filter}`) !== null &&
    //   searchParams.get(`${filter}`) !== undefined
    // ) {
    //   const currentFilter: any = children.find((obj: any, i) => {
    //     if (obj.id == searchParams.get(`${filter}`)) {
    //       return obj.name;
    //     }
    //   });
    //   currentFilter !== undefined && setFilterValue(currentFilter.name);
    // } else {
    //   setFilterValue(filter);
    // }
  }, [filterValue]);

  return (
    <button
      ref={dropdownRef}
      type="button"
      // className={`${open ? style.dropdownActive : style.dropdown}`}
      onClick={() => setOpen(true)}
      className={`  background input-border 
      ${open ? style.dropdownActive : style.dropdown}   `}
    >
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
      {open && children}
    </button>
  );
};
