import { HashRouter, Routes, Route } from "react-router-dom";
import { team } from "./data/data";
import NavMenu from "./components/NavMenu/NavMenu";
import HomePage from "./Containers/HomePage/HomePage";
import TicketsPage from "./Containers/TrackerPage/TrackerPage";
import Profiles from "./components/Profile/Profile";
import "./App.scss";

const App = () => {
  return (
    <>
      <HashRouter>
        <div>
          <NavMenu />
          <Routes>
            <Route key="home" path="/" element={<HomePage employee={team} />} />
            <Route
              key="profiles"
              path="/profiles/:id"
              element={<Profiles team={team} />} // Use the Profiles component directly
            />
            <Route key="tickets" path="/employee" element={<TicketsPage />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
};

export default App;
