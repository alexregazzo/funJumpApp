import React, { createContext } from "react";

const AppAuthContext = createContext();

export const AppAuthProvider = ({ children }) => {
  return (
    <AppAuthContext.Provider
      value={{
        signed: true,
      }}
    >
      {children}
    </AppAuthContext.Provider>
  );
};

export default AppAuthContext;
