import React from "react";

//React router dom
import { Route, Routes, useLocation } from "react-router-dom";

//PAGES
import CreateEmployee from "../Components/pages/CreateEmployee";
import ListEmployees from "../Components/pages/ListEmployees";
import NotFound from "../Components/pages/404";
import { AnimatePresence } from "framer-motion";



const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-table" element={<ListEmployees />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
