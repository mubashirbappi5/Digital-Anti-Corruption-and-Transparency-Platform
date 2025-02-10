import React, { useContext } from 'react';
import { Authcontext } from '../../../AuthContext/AuthProvider';

const SocialLogin = () => {
    const {googlesignin}=useContext(Authcontext)
   const handlegoogle = ()=>{
    googlesignin()
    .then(res=>{
        console.log(res.user)
    })
    .catch(error=>{
        console.log(error)
    })
   }



    return (
        <div className=' flex flex-col justify-center'>
             <div className="divider">OR</div>
            <button onClick={handlegoogle} className='btn btn-outline'>Google Login</button>
            
        </div>
    );
};

export default SocialLogin;