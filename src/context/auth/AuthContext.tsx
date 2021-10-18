import { createContext } from "react";
import { AuthState } from "../../interfaces/auth";

type AuthContextProps = {
  authState: AuthState;
  authAction: {
    signIn: () => Promise<void>;
    signOut: () => void;
    signUp: () => Promise<void>;
  };
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
