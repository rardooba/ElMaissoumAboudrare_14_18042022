import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//PAGES
import CreateEmployee from "./Components/pages/CreateEmployee";
import ListEmployees from "./Components/pages/ListEmployees";
import NotFound from "./Components/pages/404";

//ContextAPI
import { Context } from "./services/contextAPI";

//------------------------------------------------------------//

function App() {
  const {
    setEmployeesArray,
  } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('employees') !== null) {
      setEmployeesArray(JSON.parse(window.localStorage.getItem('employees')))
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-table" element={<ListEmployees />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
