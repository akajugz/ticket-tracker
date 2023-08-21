import { NavLink } from "react-router-dom";
import "./HomePage.scss";
import { EmployeeProps } from "./../../components/type";

type HomePageProps = {
  employee: EmployeeProps[];
};

const HomePage = ({ employee }: HomePageProps) => {
  return (
    <div className="homepage">
      <h2 className="homepage__heading">Welcome to the ticket tracker!</h2>
      <h4 className="homepage__subheading">
        The team members are listed below:
      </h4>
      <div className="home-employees">
      {employee.map((member) => (
        <>
          <NavLink key={member.id} to={`/profiles/${member.id}`}>
            <img className="home-employees__image" src={member.profile.profilePicture} alt="Profile Picture" />
            <p className="home-employees__names">{member.name}</p>
          </NavLink>
        </>
      ))}
      </div>
    </div>
  );
};

export default HomePage;
