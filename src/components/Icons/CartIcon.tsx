import { PropsSVG } from '../../globals/types';

export const CartIcon = ({ width = '1.25em', height = '1.25em' }: PropsSVG) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0.25'
      viewBox='0 0 16 16'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z'
        clipRule='evenodd'
      ></path>
      <path d='M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z'></path>
    </svg>
  );
};
