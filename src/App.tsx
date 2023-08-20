import { HashRouter, Routes, Route } from "react-router-dom";
import team from "./data/data";
import NavMenu from "./components/NavMenu/NavMenu";
import HomePage from "./Containers/HomePage/HomePage";
import EmployeesPage from "./Containers/EmployeesPage/EmployeesPage";
import "./App.scss";

const App = () => {
  return (
    <>
      <HashRouter>
        <div>
          <NavMenu />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage employee={team} />
              }
            />
            <Route path="/employee" element={<EmployeesPage />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
};

export default App;
