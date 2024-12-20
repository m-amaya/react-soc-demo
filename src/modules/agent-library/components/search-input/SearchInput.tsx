import { InputGroup } from '@/components/cogs';
import { Input } from '@chakra-ui/react';
import { BiSearch as SearchIcon } from 'react-icons/bi';

export function SearchInput() {
  return (
    <InputGroup startElement={<SearchIcon />} width={250}>
      <Input colorPalette="blue" placeholder="Search agents..." size="sm" />
    </InputGroup>
  );
}
