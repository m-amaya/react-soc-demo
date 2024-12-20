import { Button, DialogActionTrigger, DialogFooter } from '@/components/cogs';
import { BiRocket as RocketIcon, BiSave as SaveIcon } from 'react-icons/bi';

export function ModalFooter() {
  return (
    <DialogFooter>
      <DialogActionTrigger asChild>
        <Button size="xs" variant="ghost">
          Close without saving
        </Button>
      </DialogActionTrigger>
      <Button icon={<SaveIcon size={16} />} size="xs" variant="outline">
        Save
      </Button>
      <Button colorPalette="blue" icon={<RocketIcon size={16} />} size="xs">
        Publish
      </Button>
    </DialogFooter>
  );
}
