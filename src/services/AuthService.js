import API, { Endpoints } from "../api/axios";

export const SignUpService = async (credentials) => {
  //console.log(credentials);
  return await API.post(Endpoints.signUp, credentials);
};

export const SignInService = async (credentials) => {
  return await API.post(Endpoints.signIn, credentials);
};

export const SignOutService = async () => {
  return await API.post(Endpoints.signOut);
};

export const AuthDetailsService = async () => {
  return await API.get(Endpoints.authUser);
};
