import { FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { TileContainer } from './Tile.styled';

export type TileProps = {
  bg: FlexProps['bg'];
  color?: FlexProps['color'];
  circle?: boolean;
  icon: ReactNode;
  size?: number;
};

export function Tile({
  bg,
  color = 'black',
  circle = false,
  icon,
  size = 28,
}: TileProps) {
  return (
    <TileContainer bg={bg} color={color} $circle={circle} $size={size}>
      {icon}
    </TileContainer>
  );
}
