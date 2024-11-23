import { useOutlet, useLocation } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import useTokenCheck from '../hooks/useTokenCheck';

export default function Root() {
  const outlet = useOutlet();
  const location = useLocation();

  useTokenCheck();

  return (
    <>
      {outlet}
      {location.pathname !== '/' && <Navigation />}
    </>
  );
}
