import React from 'react';

export const UserContext = React.createContext(null);

const AuthContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }} >
      {children}
    </UserContext.Provider>
  )
}
export default AuthContext;