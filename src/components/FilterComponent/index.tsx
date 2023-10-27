import React from 'react';
import SearchInput from './SearchInput';
import Dropdown from './Dropdown';
import FilterList from './FilterList';
import { authors, locations } from './Dropdown/arr';
import { Popup } from './RangeDropdown/Popup/Popup';
import { Input } from './RangeDropdown/Input/Input';
import { RangeDropdownWrapper } from './RangeDropdown/RangeDropdownWrapper/RangeDropdownWrapper';
import { RangeDropdownComponent } from './RangeDropdown/RangeDropdownComponent';

const FilterComponent = () => {
  return (
    <>
      <FilterList>
        <SearchInput></SearchInput>
        <Dropdown filter={'author'}>{authors}</Dropdown>
        <Dropdown filter={'location'}>{locations}</Dropdown>
        <RangeDropdownComponent />
      </FilterList>
    </>
  );
};

export default FilterComponent;
