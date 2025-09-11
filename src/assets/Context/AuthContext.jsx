import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) setUser(savedUser)
    }, [])

    // console.log(user);


    useEffect(() => {
        if (user) localStorage.setItem("user", JSON.stringify(user))
        else localStorage.removeItem("user");
    }, [user])


    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider