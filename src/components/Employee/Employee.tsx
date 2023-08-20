import { useState } from "react";
import "./Employee.scss";

/* 
need to create a type and place the data in it.
it needs to put through:
id as number
name as string
role as string 
*/

type EmployeeProps = {
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

/* 
Create a function that takes the type as a para, deconstructed 
create a counter using useState
*/
const Employee = ({ name, role, profile }: EmployeeProps) => {
  const [ticketCount, setTicketCount] = useState(0);

  const ticketCountIncrement = () => {
    setTicketCount(ticketCount + 1);
  };

  const ticketCountDecrement = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };

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
        <button
          className="employees__tracker-button"
          onClick={ticketCountIncrement}
        >
          +
        </button>
        <p className="employees__ticket-text">Ticket Count : {ticketCount}</p>
        <button
          className="employees__tracker-button"
          onClick={ticketCountDecrement}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Employee;
