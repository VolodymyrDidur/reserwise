export interface Auth {
  isAuthenticated: boolean;
}

export const useAuth: () => Auth = () => {
  const isAuthenticated = true;

  return {
    isAuthenticated
  };
};
