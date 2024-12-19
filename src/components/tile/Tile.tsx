import { FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { TileContainer } from './Tile.styled';

export type TileProps = {
  bg: FlexProps['bg'];
  icon: ReactNode;
  size?: number;
};

export function Tile({ bg, icon, size = 28 }: TileProps) {
  return (
    <TileContainer bg={bg} color="black" $size={size}>
      {icon}
    </TileContainer>
  );
}
