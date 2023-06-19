import React from 'react';
import { UserContext } from "../auth/authContext";

const useUser = () => {
  return React.useContext(UserContext);
}

export default useUser;