import Profiles from "../../components/Profile/Profile";

type EmployeesPageProps = {
  team: {
    id: number;
    name: string;
    role: string;
    profile: {
      experience: string;
      department: string;
      techstack: string[];
      profilePicture: string;
    };
  }[];
};

const EmployeesPage: React.FC<EmployeesPageProps> = ({ team }) => {
  return (
    <div>
      {team.map((employee) => (
        <Profiles
          key={employee.id}
          name={employee.name}
          role={employee.role}
          profile={employee.profile}
          id={0}
        />
      ))}
    </div>
  );
};

export default EmployeesPage;
