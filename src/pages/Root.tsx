import { useOutlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';

export default function Root() {
  const outlet = useOutlet();

  return (
    <>
      {outlet}
      <Navigation />
    </>
  );
}
