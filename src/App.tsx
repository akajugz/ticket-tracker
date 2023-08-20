import { HashRouter, Routes, Route } from "react-router-dom";
import { team } from "./data/data";
import NavMenu from "./components/NavMenu/NavMenu";
import HomePage from "./Containers/HomePage/HomePage";
import Profiles from "./components/Profile/Profile";
import TicketsPage from "./Containers/TrackerPage/TrackerPage";
import "./App.scss";

type ProfileProps = {
  id: number;
  name: string;
  role: string;
  profile: {
    experience: string;
    department: string;
    techstack: string[];
    profilePicture: string;
  };
};

const App = ({ name, role }: ProfileProps) => {
  return (
    <>
      <HashRouter>
        <div>
          <NavMenu />
          <Routes>
            <Route path="/" element={<HomePage employee={team} />} />
            <Route
              path="/profiles"
              element={
                <Profiles
                  id={0}
                  name={name}
                  role={role}
                  profile={{
                    experience: "",
                    department: "{profile.department}",
                    techstack: [],
                    profilePicture: "",
                  }}
                />
              }
            />
            <Route path="/employee" element={<TicketsPage />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
};

export default App;
