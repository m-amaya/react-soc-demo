import { ReactNode, useMemo, useState } from 'react';
import { FloatingBox, Label, ToggleRoot } from './SegmentedToggle.styled';

export type SegmentedToggleProps = {
  labels: [ReactNode, ReactNode];
};

export function SegmentedToggle({ labels }: SegmentedToggleProps) {
  const [refOption1, setRefOption1] = useState<HTMLParagraphElement | null>(
    null,
  );
  const [refOption2, setRefOption2] = useState<HTMLParagraphElement | null>(
    null,
  );
  const offsetWidthOption1 = useMemo(
    () => refOption1?.offsetWidth || 0,
    [refOption1],
  );
  const offsetWidthOption2 = useMemo(
    () => refOption2?.offsetWidth || 0,
    [refOption2],
  );
  const [selectedOption, selectOption] = useState<number>(1);
  const currentWidth =
    selectedOption === 1 ? offsetWidthOption1 : offsetWidthOption2;

  return (
    <ToggleRoot
      as="button"
      onClick={() => selectOption(selectedOption === 1 ? 2 : 1)}
    >
      <FloatingBox
        $direction={selectedOption === 1 ? 'left' : 'right'}
        $width={currentWidth}
      />
      <Label as="label" ref={ref => setRefOption1(ref)} textStyle="sm">
        {labels[0]}
      </Label>
      <Label as="label" ref={ref => setRefOption2(ref)} textStyle="sm">
        {labels[1]}
      </Label>
    </ToggleRoot>
  );
}
