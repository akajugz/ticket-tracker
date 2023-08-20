import {team} from "../../data/data";
import React, { useState } from "react";
import Employee from "../../components/Employee/Employee";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./TrackerPage.scss"

const TicketsPage = () => {
  const [filteredEmployees, setFilteredEmployees] = useState(team);
  const [selectedRole, setSelectedRole] = useState("");

  /* 
  Function that filters through the Team to get the name searched for
  */
  const handleSearch = (searchTerm: string) => {
    const filtered = team.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  const employeeSearch = filteredEmployees
    .filter((employee) => selectedRole === "" || employee.role === selectedRole)
    .map((employee) => (
      <Employee
        id={employee.id}
        name={employee.name}
        role={employee.role}
        profile={{
          experience: employee.profile.experience,
          department: employee.profile.department,
          techstack: employee.profile.techstack,
          profilePicture: employee.profile.profilePicture,
        }}
      />
    ));

  const roles = team.reduce<string[]>((result, employee) => {
    if (!result.includes(employee.role)) {
      result.push(employee.role);
    }
    return result;
  }, []);

  return (
    <div>
      <div className="main">
        <SearchBox onSearch={handleSearch} />
        <select
          className="main__dropdown"
          value={selectedRole}
          onChange={handleRoleChange}
        >
          <option className="main__dropdown--text" value="">
            All Roles
          </option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <div className="employee-containers">{employeeSearch}</div>
      </div>
    </div>
  );
};

export default TicketsPage;
