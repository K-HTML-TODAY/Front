import { useOutlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import useTokenCheck from '../hooks/useTokenCheck';

export default function Root() {
  const outlet = useOutlet();

  useTokenCheck();

  return (
    <>
      {outlet}
      <Navigation />
    </>
  );
}
