import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import register from '../../../assets/register/Login.jpg'
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:7000/login", user);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
      
      <section className="grid grid-cols-2 items-center ">
      <div className="">
        <img src={register} alt="Register image" />
      </div>
      <div className="w-1/2 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Login Here</h2>
        <form onSubmit={handleSubmit}  className=" fieldset ">
          <label className="fieldset-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="input"
            required
          />
          <label className="fieldset-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange} 
            className="input"
            required
          />
          
          <button type="submit" className="btn bg-blue-400 mt-4">
            Login
          </button>
        </form>
        <p className="px-6 text-sm text-center dark:text-gray-400">
          {" "}
          Already have an account?
          <Link className="text-blue-300" to={"/signup"}>
           Register
          </Link>
        </p>
      </div>
    </section>
   
  );
};

export default Login;
