import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { AuthProvider } from "../context/auth/AuthProvider";
import Drawer from "./drawer/Drawer";
import AuthStack from "./stacks/AuthStack";

const MainNav = () => {
  const { authState } = useContext(AuthContext);
  console.log(authState);
  return (
    <NavigationContainer>
      {!authState.userToken ? <AuthStack /> : <Drawer />}
    </NavigationContainer>
  );
};

export default MainNav;
