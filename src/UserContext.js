import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserStorage = ({children}) => {

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null); 

  

  return (
    <UserContext.Provider
      value={{ login, setLogin, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
}