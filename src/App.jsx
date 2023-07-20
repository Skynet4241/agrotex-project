import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PAGE_NAMES } from './components/Router/path';
import { MainLayouts } from './components/Layouts/MainLayouts';
import { Home } from './pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<MainLayouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
