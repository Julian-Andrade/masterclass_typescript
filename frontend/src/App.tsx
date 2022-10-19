import { useEffect, useState } from "react";
import "./App.css";
import api from "./services/api";

import User from "./components/User";

interface IUser {
  name: string;
  email?: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;
