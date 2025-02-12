import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import regiser from "../../../assets/register/Register.png";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from './../SocialLogin/SocialLogin';
const Register = () => {
  const {userSignUp} = useAuth()

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target 
    const email = form.email.value
    const password = form.password.value
    console.log(email,password)
    userSignUp(email,password)
    .then(res=>{
      console.log(res.user)
    })
    .catch(error=>{
      console.log(error)
    })

    
  };

  return (
    <section className="grid grid-cols-2 items-center ">
      <div className="">
        <img src={regiser} alt="Register image" />
      </div>
      <div className="w-1/2 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className=" fieldset ">
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
          
          <input value={'submit'} type="submit" className="btn bg-blue-400 mt-4"/>
            
         
        </form>
        <p className="px-6 text-sm text-center dark:text-gray-400">
          {" "}
          Don't have an account yet?
          <Link className="text-blue-300" to={"/login"}>
            Login
          </Link>
        </p>
        <SocialLogin/>
      </div>
    </section>
  );
};

export default Register;
