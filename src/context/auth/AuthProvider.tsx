import React, { FC, useMemo, useReducer } from "react";
import { AuthState } from "../../interfaces/auth";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";

const initialState: AuthState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider: FC<props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const authContext = useMemo(
    () => ({
      signIn: async () => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async () => {
        dispatch({ type: "SIGN_UP", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ authState: state, authAction: authContext }}>
      {children}
    </AuthContext.Provider>
  );
};
