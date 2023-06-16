import React from 'react';

export const UserContext = React.createContext(null);
<<<<<<< HEAD
=======
export const UserDispatchContext = React.createContext(null);

>>>>>>> c015a2d (add sso with google, create SignInPage)

const AuthContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
<<<<<<< HEAD
    <UserContext.Provider value={{ user, setUser }} >
      {children}
=======
    <UserContext.Provider value={user} >
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
>>>>>>> c015a2d (add sso with google, create SignInPage)
    </UserContext.Provider>
  )
}
export default AuthContext;