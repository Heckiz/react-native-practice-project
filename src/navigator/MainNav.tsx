import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import Drawer from "./drawer/Drawer";
import AuthStack from "./stacks/AuthStack";

const MainNav = () => {
  const [logged, setLogged] = useState<boolean>(false);
  return (
    <NavigationContainer>
      {!logged ? <AuthStack /> : <Drawer />}
    </NavigationContainer>
  );
};

export default MainNav;
