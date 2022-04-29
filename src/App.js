import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Components/pages/404";
import CreateEmployee from "./Components/pages/CreateEmployee";
import ListEmployees from "./Components/pages/ListEmployees";
import { ContextProvider } from "./services/contextAPI";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employee-table" element={<ListEmployees />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
