import React from "react";

//React router dom
import { BrowserRouter } from "react-router-dom";

//framer-motion > dynamic animation between pages
import ConfigRoutes from "./ConfigRoutes";



//------------------------------------------------------------//

const IndexRoutes = () => {
  return (
    <BrowserRouter>
     <ConfigRoutes />
    </BrowserRouter>
  );
};

export default IndexRoutes;
