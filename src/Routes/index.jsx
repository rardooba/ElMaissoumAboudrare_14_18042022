import React from "react";

//React router dom
import { BrowserRouter } from "react-router-dom";

//framer-motion > dynamic animation between pages
import AnimatedRoutes from "./AnimatedRoutes";



//------------------------------------------------------------//

const IndexRoutes = () => {
  return (
    <BrowserRouter>
     <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default IndexRoutes;
