import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../Firebace/Firebace.init';
export const Authcontext = createContext()
const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider();

    const googlesignin = ()=>{
        return signInWithPopup(auth, provider)
    }

    const authinfo = {
        name:'bappi',
        googlesignin,

    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;