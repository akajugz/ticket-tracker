import "./Profile.scss";

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

const Profiles = ({ name, role, profile }: ProfileProps) => {
  return (
    <>
      <div className="employees">
        <h3 className="employees__name">{name}</h3>
        <p className="employees__role">{role}</p>
        <div className="employees__profile">
          <p>Experience: {profile.experience}</p>
          <p>Department: {profile.department}</p>
          <p>Tech Stack: {profile.techstack.join(", ")}</p>
          <img src={profile.profilePicture} alt="Profile" />
        </div>
      </div>
    </>
  );
};

export default Profiles;
