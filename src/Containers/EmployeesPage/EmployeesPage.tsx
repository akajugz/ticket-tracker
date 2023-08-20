import Employee from "../../components/Employee/Employee";
import { team } from "../../data/data";

const EmployeesPage = () => {
  return (
    <div>
      {team.map((employee) => (
        <Employee key={employee.id} {...employee} />
      ))}
    </div>
  );
};

export default EmployeesPage;
