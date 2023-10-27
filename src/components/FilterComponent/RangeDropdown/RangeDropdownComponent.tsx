import { useState, useEffect, useRef, FC } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useSearchParams } from 'react-router-dom';
import { ReactNode } from 'react';
import { RangeDropdownWrapper } from './RangeDropdownWrapper/RangeDropdownWrapper';
import { Input } from './Input/Input';
import { Popup } from './Popup/Popup';
import style from './RangeDropdownComponent.module.scss';

type props = {
  filter?: string | boolean;
  children?: ReactNode;
};

export const RangeDropdownComponent: FC<props> = () => {
  const [startVal, setStartVal] = useState('');
  const [endVal, setEndVal] = useState('');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);
  useOnClickOutside(dropdownRef, () => setOpen(false));

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <RangeDropdownWrapper filter={'created'}>
      <Popup>
        <div className={style.wrapper}>
          <Input placeholder="for" value={startVal} setValue={setStartVal} />
          <div className="" />
          <Input placeholder="before" value={endVal} setValue={setEndVal} />
        </div>
      </Popup>
    </RangeDropdownWrapper>
  );
};
