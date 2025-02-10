import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../Firebace/Firebace.init';
export const Authcontext = createContext()
const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider();

    const googlesignin = ()=>{
        return signInWithPopup(auth, provider)
    }

    const userSignUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authinfo = {
        name:'bappi',
        googlesignin,
        userSignUp,

    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;