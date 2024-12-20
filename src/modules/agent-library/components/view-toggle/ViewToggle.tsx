import { SegmentedToggle } from '@/components/segmented-toggle';
import { BiGridAlt as GridIcon, BiListUl as ListIcon } from 'react-icons/bi';

export function ViewToggle() {
  return <SegmentedToggle labels={[<GridIcon />, <ListIcon size={18} />]} />;
}
