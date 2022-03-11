import { useState, createContext } from "react";

const LoginContext = createContext()

function LoginProvider({children}){
    
    const [loginstate] = useState('Login Context đây nè');

    return (
        <LoginContext.Provider value={loginstate}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginContext, LoginProvider }