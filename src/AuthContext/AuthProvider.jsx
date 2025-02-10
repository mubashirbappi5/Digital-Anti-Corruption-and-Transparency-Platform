import React, { createContext } from 'react';
export const Authcontext = createContext()
const AuthProvider = ({children}) => {

    const authinfo = {
        name:'bappi'

    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;