import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/users/login", { email, password });
    localStorage.setItem("token", res.data.token);
    alert("Login Success");
  };

  return (
    <div>
      <input onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
      <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
      <button onClick={login}>Login</button>
    </div>
  );
}
