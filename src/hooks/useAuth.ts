import useUser from "./useUser";

export interface Auth {
  isAuthenticated: boolean;
}

export const useAuth: () => Auth = () => {
  const { user } = useUser();
  const isAuthenticated = user !== null;

  return {
    isAuthenticated
  };
};
