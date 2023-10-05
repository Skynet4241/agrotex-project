import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PAGE_NAMES } from './components/Router/path';
import MainLayouts from './components/Layouts/MainLayouts';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import Services from './pages/Services';
import SpareParts from './pages/SpareParts';
import Contacts from './pages/Contacts';

const App = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path={PAGE_NAMES.about} element={<AboutUs />} />
          <Route path={PAGE_NAMES.services} element={<Services />} />
          <Route path={PAGE_NAMES.spareParts} element={<SpareParts />} />
          <Route path={PAGE_NAMES.contacts} element={<Contacts />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
