import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../../context/auth/AuthContext";

const Login = () => {
  const { authAction } = useContext(AuthContext);
  return (
    <View>
      <Text>Login</Text>
      <Button title="sign in" onPress={async () => await authAction.signIn()} />
    </View>
  );
};

export default Login;
