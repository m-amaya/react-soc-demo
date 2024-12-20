import { FilterToggle } from '../filter-toggle';
import { SearchInput } from '../search-input';
import { ViewToggle } from '../view-toggle';
import { FilterBarRoot, ToggleWrapper } from './FilterBar.styled';

export function FilterBar() {
  return (
    <FilterBarRoot>
      <SearchInput />
      <ToggleWrapper>
        <FilterToggle />
        <ViewToggle />
      </ToggleWrapper>
    </FilterBarRoot>
  );
}
