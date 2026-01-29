import { useEffect, useState } from "react";
import api from "../api/axios";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    api.get("/tickets").then(res => setTickets(res.data));
  }, []);

  return (
    <div>
      <h2>Tickets</h2>
      <ul>
        {tickets.map(t => (
          <li key={t._id}>
            {t.title} | {t.priority} | {t.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
