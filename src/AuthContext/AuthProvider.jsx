import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebace/Firebace.init';
export const Authcontext = createContext()
const AuthProvider = ({children}) => {
   const [user,setuser]=useState(null)
    const provider = new GoogleAuthProvider();

    const googlesignin = ()=>{
        return signInWithPopup(auth, provider)
    }

    const userSignUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userSignIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateuser = (profile) => {
        return updateProfile(auth.currentUser, profile);
      };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setuser(currentUser)
        })
        return () => {
            unsubscribe();
          };
    },[])
 
const signOutUser = ()=>{
    return  signOut(auth)
}
   

    const authinfo = {
        name:'bappi',
        googlesignin,
        userSignUp,
        userSignIn,
        user,
        updateuser,
        signOutUser,

    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;