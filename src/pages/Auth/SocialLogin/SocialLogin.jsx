import React, { useContext } from 'react';
import { Authcontext } from '../../../AuthContext/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const froms = location.state?.from?.pathname || "/";
    const {googlesignin}=useContext(Authcontext)
   const handlegoogle = ()=>{
    googlesignin()
    .then(res=>{
        console.log(res.user)
        navigate(froms, { replace: true });
    })
    .catch(error=>{
        console.log(error)
    })
   }



    return (
        <div className=' flex flex-col justify-center'>
             <div className="divider">OR</div>
            <button onClick={handlegoogle} className='btn btn-outline'><FaGoogle />Google Login</button>
            
        </div>
    );
};

export default SocialLogin;