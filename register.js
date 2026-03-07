import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [data, setData] = useState({});

  const submit = async () => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    await axios.post("http://localhost:5000/api/users/register", formData);
    alert("Registered");
  };

  return (
    <div>
      <input placeholder="Name" onChange={e => setData({...data, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setData({...data, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setData({...data, password:e.target.value})}/>
      <input type="file" onChange={e => setData({...data, image:e.target.files[0]})}/>
      <button onClick={submit}>Register</button>
    </div>
  );
}
