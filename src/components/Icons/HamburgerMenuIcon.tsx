import { PropsSVG } from '../../globals/types';

export const HamburgerMenuIcon = ({
  width = '1em',
  height = '1em',
}: PropsSVG) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth={0}
      viewBox='0 0 512 512'
      height={height}
      width={width}
    >
      <path d='M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z' />
    </svg>
  );
};
