import React, { useContext } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { Authcontext } from "../../../AuthContext/AuthProvider";

const Registration = () => {
  const {userSignUp}=useContext(Authcontext)
    const handleregister = (e)=>{
        e.preventDefault();
        const form = e.target
        console.log(form)
    const name=form.name.value;
    const email=form.email.value;
    const phone=form.phone.value;
    const password=form.email.value;
    const user={name,email,phone,password};
    console.log(user);
       userSignUp(email,password)
       .then(res=>{
        console.log(res.user)
       })
       .catch(error=>{
        console.log(error)
       })

    form.reset();

  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Create Your Account</h1>
      <div className="flex justify-center items-start my-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
          <div className="card-body">
            <form onSubmit={handleregister} className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                type="name"
                name="name"
                className="input"
                placeholder="Full Name"
              />
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Phone</label>
              <input
                type="phone"
                name="phone"
                className="input"
                placeholder="Phone"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <input
                className="btn btn-neutral mt-4"
                type="submit"
                value={"Sign UP"}
              />
            </form>
            <p className="text-center">Don't have an account yet?<Link className="text-blue-400" to={'/login'}>Login</Link></p>
          </div>
          
          <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default Registration;
