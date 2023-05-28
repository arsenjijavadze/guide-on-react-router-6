import { useEffect } from 'react';
import { BrowserRouter, useLocation, useRoutes } from 'react-router-dom';
import { PageOne, PageTwo } from './Pages';
import { MainPage } from './MainPage';

function App() {
  const location = useLocation();
  useEffect(() => {
    console.log('Current location is', location);
  }, [location]);
  const routes = useRoutes([
    {
      path: '/',
      element: <MainPage />,
      children: [
        { index: true, element: <div>No page is selected</div> },
        { path: '*', element: <PageOne /> },
        {
          path: 'one',
          element: <PageOne />,
          children: [{ path: ':id', element: <PageOne /> }],
        },
        {
          path: 'two',
          element: <PageTwo />,
          children: [{ path: ':id', element: <PageTwo /> }],
        },
      ],
    },
  ]);
  return routes;
}
const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};


export default AppWrapper;
