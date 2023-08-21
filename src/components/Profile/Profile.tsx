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
      <div className="profile">
        <h3 className="profile__name">{employee.name}</h3>
        <img
          className="profile__image"
          src={employee.profile.profilePicture}
          alt="Profile"
        />
        <div className="profile__text">
          <p>{employee.role}</p>
          <p>Experience: {employee.profile.experience}</p>
          <p>Department: {employee.profile.department}</p>
          <p>Tech Stack: {employee.profile.techstack.join(", ")}</p>
        </div>
      </div>
    </>
  );
};

export default Profiles;
