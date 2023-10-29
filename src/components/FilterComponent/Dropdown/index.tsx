import { useState, useRef, FC } from 'react';
import style from './Dropdown.module.scss';
import { DropdownItem } from './DropdownItem/DropdownItem';
import { useSearchParams } from 'react-router-dom';
import { useOnClickOutside } from 'usehooks-ts';
import { useEffect } from 'react';
import { Icon } from './../../shared/assets/svg/Icon';
import { Popup } from './Popup/Popup';

type props = {
  filter: string | boolean;
  children: object[];
};

const Dropdown: FC<props> = ({ filter, children }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef(null);

  useOnClickOutside(dropdownRef, () => setOpen(false));

  // --------------------Routing----------------------------- //

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
  //  ---------------------- //
  useEffect(() => {
    if (
      searchParams.get(`${filter}`) !== null &&
      searchParams.get(`${filter}`) !== undefined
    ) {
      const currentFilter: any = children.find((obj: any, i) => {
        if (obj.id == searchParams.get(`${filter}`)) {
          return obj.name;
        }
      });
      currentFilter !== undefined && setFilterValue(currentFilter.name);
    } else {
      setFilterValue(filter);
    }
  }, [filterValue]);

  return (
    <button
      ref={dropdownRef}
      type="button"
      // className={`${open ? style.dropdownActive : style.dropdown}`}
      onClick={() => setOpen(!open)}
      className={`  background input-border 
      ${open ? style.dropdownActive : style.dropdown}   `}
    >
      <h3 ref={textRef} className={`${style.dropdownName} color`}>
        {filterValue}
      </h3>
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
            <Icon className="arrow-top" id="arrow-top" />
          </div>
        ) : (
          <div>
            <Icon className="arrow-top" id="arrow-top" />
          </div>
        )}
      </div>
      {open && (
        <Popup>
          {children.map((obj: any, i: number) => (
            <DropdownItem
              setValue={filterValue}
              name={obj.name}
              id={obj.id}
              key={i + obj.name}
              onChangeFilter={onChangeFilter}
            />
          ))}
        </Popup>
      )}
    </button>
  );
};

export default Dropdown;
