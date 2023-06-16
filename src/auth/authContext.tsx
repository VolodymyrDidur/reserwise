import React from 'react';

export const UserContext = React.createContext(null);
export const UserDispatchContext = React.createContext(null);


const AuthContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={user} >
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}
export default AuthContext;