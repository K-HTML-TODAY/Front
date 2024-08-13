import { MoreLayout } from './styles';
import { MoreType } from './types';

export default function More({ onClick }: MoreType) {
  return (
    <MoreLayout onClick={onClick}>
      <span>더보기</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
        <path d="M6 3.5L0.75 6.53109L0.75 0.468911L6 3.5Z" fill="#8D999F" />
      </svg>
    </MoreLayout>
  );
}
