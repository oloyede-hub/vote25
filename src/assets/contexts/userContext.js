import React,{ Children, createContext, useState} from 'react';


const ThemeContext = createContext(user);

const userContext = ({children}) => {


    const [user , setUser] = useState(null);


    return (
        <ThemeContext.Provider value={user, setUser}>
            {children}
        </ThemeContext.Provider>
    )
}

export default userContext
