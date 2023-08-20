import "./HomePage.scss";
import { EmployeeProps } from "./../../components/type";

type HomePageProps = {
  employee: EmployeeProps[];
};

const HomePage = ({ employee }: HomePageProps) => {
  return (
    <div>
      <h2>Welcome to the ticket tracker</h2>
      <h4>The team members are listed below:</h4>
      {employee.map((member) => (
        
        <li>{member.name}</li>
      ))}
    </div>
  );
};

export default HomePage;
