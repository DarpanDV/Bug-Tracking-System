import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import CreateTicket from "./components/CreateTicket";
import TicketList from "./components/TicketList";

function App() {
  const { token, logout } = useContext(AuthContext);

  if (!token) return <Login />;

  return (
    <div>
      <h1>Bug Tracking System</h1>
      <button onClick={logout}>Logout</button>
      <CreateTicket />
      <TicketList />
    </div>
  );
}

export default App;
