import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import Test2 from '../pages/Test2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/test2',
    element: <Test2 />,
  },
]);

export default router;
