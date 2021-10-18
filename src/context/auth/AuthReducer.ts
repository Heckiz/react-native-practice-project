import { AuthState } from "../../interfaces/auth";

type AuthAction =
  | { type: "RESTORE_TOKEN"; token: string }
  | { type: "SIGN_IN"; token: string }
  | { type: "SIGN_UP"; token: string }
  | { type: "SIGN_OUT" };

export const authReducer = (
  prevState: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case "SIGN_UP":
      return {
        ...prevState,
        isSignout: true,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
};
