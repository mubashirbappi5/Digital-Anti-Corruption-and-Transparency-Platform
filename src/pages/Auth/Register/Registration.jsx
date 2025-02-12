import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAxiosPubic from "../../../Hooks/useAxiosPubic";
import regiser from "../../../assets/register/Register.png";

const Register = () => {
  const { userSignUp } = useAuth();
  const axiosPublic = useAxiosPubic();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value; 
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await userSignUp(email, password);
      console.log("User registered:", res.user);

      const userinfo = {
        userEmail: res.user.email, 
        name: name,
        status:'unverified',

      };

      await axiosPublic.post("/users", userinfo); 
      console.log("User saved in database");

      navigate("/"); 
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <section className="grid grid-cols-2 items-center">
      <div>
        <img src={regiser} alt="Register image" />
      </div>
      <div className="w-1/2 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="fieldset-label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input"
            required
          />
          <label className="fieldset-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            required
          />
          <label className="fieldset-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            required
          />
          <input value="Register" type="submit" className="btn bg-blue-400 mt-4" />
        </form>
        <p className="px-6 text-sm text-center dark:text-gray-400">
          {" "}
          Already have an account?
          <Link className="text-blue-300" to="/login">
            Login
          </Link>
        </p>
        <SocialLogin />
      </div>
    </section>
  );
};

export default Register;
