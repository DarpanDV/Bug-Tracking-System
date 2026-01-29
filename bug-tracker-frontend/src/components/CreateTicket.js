import { useState } from "react";
import api from "../api/axios";

const CreateTicket = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIUM");

  const createTicket = async () => {
    try {
      await api.post("/tickets", {
        title,
        description,
        priority
      });
      alert("Ticket created");
    } catch (err) {
      alert("Failed to create ticket");
    }
  };

  return (
    <div>
      <h2>Create Ticket</h2>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
      <select onChange={e => setPriority(e.target.value)}>
        <option>LOW</option>
        <option>MEDIUM</option>
        <option>HIGH</option>
      </select>
      <button onClick={createTicket}>Create</button>
    </div>
  );
};

export default CreateTicket;
