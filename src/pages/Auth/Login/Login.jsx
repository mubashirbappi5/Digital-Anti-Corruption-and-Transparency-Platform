import { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import register from '../../../assets/register/Login.jpg'
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  const{userSignIn } = useAuth()


  const navigate = useNavigate();
  const location = useLocation();
  const froms = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target 
    const email = form.email.value
    const password = form.password.value
    userSignIn(email,password)
    .then(res=>{
      console.log(res.user)
      navigate(froms, { replace: true });
    })
    .then(error=>{
      console.log(error)
    })
  
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
          
          <input type="submit" className="btn bg-blue-400 mt-4"/>
         
          
        </form>
        <p className="px-6 text-sm text-center dark:text-gray-400">
          {" "}
          Already have an account?
          <Link className="text-blue-300" to={"/signup"}>
           Register
          </Link>
        </p>
        <SocialLogin/>
      </div>
    </section>
   
  );
};

export default Login;
