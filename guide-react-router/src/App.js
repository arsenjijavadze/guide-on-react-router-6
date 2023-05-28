import { BrowserRouter, useRoutes } from 'react-router-dom';
import { PageOne, PageTwo } from './Pages';
import { MainPage } from './MainPage';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainPage />,
      children: [
        { index: true, element: <div>No page is selected</div> },
        { path: '*', element: <PageOne /> },
        { path: 'two', element: <PageTwo /> },
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
