import { useOutlet } from 'react-router-dom';

export default function Root() {
  const outlet = useOutlet();

  return <>메인이에요{outlet}</>;
}
