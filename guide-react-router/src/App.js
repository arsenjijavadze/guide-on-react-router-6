import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageOne, PageTwo } from './Pages';
import { MainPage } from './MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<div>No page is selected</div>} />
          <Route path="*" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
