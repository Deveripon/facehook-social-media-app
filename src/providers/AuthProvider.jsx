import { useState } from "react";
import { AuthContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthProvider = ({ children }) => {
    const [value] = useLocalStorage("auth", {});
    const [auth, setAuth] = useState(value ?? {});
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
