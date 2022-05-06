import React from "react";

//React router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

//PAGES
import CreateEmployee from "../Components/pages/CreateEmployee";
import ListEmployees from "../Components/pages/ListEmployees";
import NotFound from "../Components/pages/404";

//------------------------------------------------------------//

const IndexRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-table" element={<ListEmployees />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRoutes;
