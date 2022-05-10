import { useContext, useEffect } from "react";

//ROUTES >  the component <IndexRoutes /> contains all the routes of the app
import IndexRoutes from "./Routes";

//ContextAPI
import { Context } from "./services/contextAPI";

//------------------------------------------------------------//

function App() {
  const { setEmployeesArray } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("employees") !== null) {
      setEmployeesArray(JSON.parse(window.localStorage.getItem("employees")));
    }
  }, [setEmployeesArray]);

  return (
    <>
      <IndexRoutes />
    </>
  );
}

export default App;
