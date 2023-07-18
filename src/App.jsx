import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PAGE_NAMES } from "./components/Router/path";
import { MainLayouts } from "./components/layouts/MainLayouts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<MainLayouts />}></Route>
      </Routes>
    </>
  );
};

export default App;