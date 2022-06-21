import React from "react";

//React router dom
import { Route, Routes, useLocation } from "react-router-dom";

//PAGES
import CreateEmployee from "../Components/pages/CreateEmployee";
import ListEmployees from "../Components/pages/ListEmployees";
import NotFound from "../Components/pages/404";



const ConfigRoutes = () => {
  const location = useLocation();

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-table" element={<ListEmployees />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default ConfigRoutes;
