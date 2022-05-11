import { useAuthStore } from ".";

export const getAuthStatus = () => {
  const auth = useAuthStore();

  if (auth.authenticated) {
  }
};
