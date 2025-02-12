import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "", phone: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:7000/register", user);
      alert(res.data.message);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border p-2" required />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} className="border p-2" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
