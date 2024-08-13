import { PagingType } from './types';

export default function Paging({ isActive, onClick }: PagingType) {
  return (
    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" onClick={onClick}>
      <circle cx="3.5" cy="3.5" r="3.5" fill={isActive ? '#0047FF' : '#D9D9D9'} />
    </svg>
  );
}
