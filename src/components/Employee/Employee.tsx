import { useState } from "react";

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
};

/* 
Create a function that takes the type as a para, deconstructed 
create a counter using useState
*/
const Employee = ({ name, role }: EmployeeProps) => {
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
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
        <p>Ticket Count : {ticketCount}</p>
        <button onClick={ticketCountIncrement}>+</button>
        <button onClick={ticketCountDecrement}>-</button>
      </div>
    </>
  );
};

export default Employee;
