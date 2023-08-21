import { useParams } from "react-router-dom";
import "./Profile.scss";
import { team } from "../../data/data";

const Profiles = () => {
  const { id } = useParams();
  const employee = team.find((member) => member.id === Number(id));

  if (employee === undefined) {
    return <p>Employee not found</p>;
  }

  return (
    <>
      <div className="employees">
        <h3 className="employees__name">{employee.name}</h3>
        <p className="employees__role">{employee.role}</p>
        <div className="employees__profile">
          <p>Experience: {employee.profile.experience}</p>
          <p>Department: {employee.profile.department}</p>
          <p>Tech Stack: {employee.profile.techstack.join(", ")}</p>
          <img src={employee.profile.profilePicture} alt="Profile" />
        </div>
      </div>
    </>
  );
};

export default Profiles;