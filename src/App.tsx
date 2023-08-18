import React, { useState } from "react";
import Employee from "./components/Employee/Employee";
import SearchBox from "./components/SearchBox/SearchBox";
import team from "./data/data";

const App = () => {
  const [filteredEmployees, setFilteredEmployees] = useState(team);
  const [selectedRole, setSelectedRole] = useState("");

  const handleSearch = (searchTerm: string) => {
    const filtered = team.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  const employees = filteredEmployees
    .filter((employee) => selectedRole === "" || employee.role === selectedRole)
    .map((employee) => (
      <Employee id={employee.id} name={employee.name} role={employee.role} />
    ));

  const roles = team.reduce<string[]>((result, employee) => {
    if (!result.includes(employee.role)) {
      result.push(employee.role);
    }
    return result;
  }, []);

  return (
    <>
      <div>
        <h1>Ticket Tracker</h1>
        <SearchBox onSearch={handleSearch} />
        <select value={selectedRole} onChange={handleRoleChange}>
          <option value="">All Roles</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        {employees}
      </div>
    </>
  );
};

export default App;
