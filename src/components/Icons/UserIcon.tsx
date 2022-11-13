import { PropsSVG } from '../../globals/types';

export const UserIcon = ({ width = '1em', height = '1em' }: PropsSVG) => {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
      <circle cx='12' cy='7' r='4'></circle>
    </svg>
  );
};
