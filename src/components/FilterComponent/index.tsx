import SearchInput from './SearchInput';
import Dropdown from './Dropdown';
import FilterList from './FilterList';
import { authors, locations } from './Dropdown/arr';
import { RangeDropdownComponent } from './RangeDropdown/RangeDropdownComponent';

const FilterComponent = () => {
  return (
    <>
      <FilterList>
        <SearchInput />

        <Dropdown filter={'Author'}>{authors}</Dropdown>

        <Dropdown filter={'Location'}>{locations}</Dropdown>

        <RangeDropdownComponent />
      </FilterList>
    </>
  );
};

export default FilterComponent;
