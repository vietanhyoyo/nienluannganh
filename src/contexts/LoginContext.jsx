import { useState, createContext, useEffect } from "react";

const LoginContext = createContext()

function LoginProvider({children}){
    
    const [loginstate, setLoginState] = useState(null);

    const handleSetLogin = (value) => {
        setLoginState(value)
    }

    const value = {
        loginstate,
        handleSetLogin
    }

    useEffect(() => {
        if(localStorage.getItem('accessToken')){
            setLoginState(localStorage.getItem('accessToken'));
        }
    },[]);

    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginContext, LoginProvider }