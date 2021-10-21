import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/AuthScreens/Login";
import Register from "../../screens/AuthScreens/Register";

const { Navigator, Screen } = createNativeStackNavigator();
const AuthStack = () => {
  return (
      <Navigator>
        <Screen name="Login" options={{headerShown:false}} component={Login} />
        <Screen name="Register" options={{headerShown:false}} component={Register} />
      </Navigator>
  );
};

export default AuthStack;
