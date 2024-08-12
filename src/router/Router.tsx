import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import Test2 from '../pages/Test2';
import RankingTest from '../test/RankingTest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/test2',
    element: <Test2 />,
    path: '/test',
    children: [{ path: 'ranking', element: <RankingTest /> }],
  },
]);

export default router;
