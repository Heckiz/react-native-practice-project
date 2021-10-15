import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Login from '../../screens/AuthScreens/Login';
import Register from '../../screens/AuthScreens/Register';

const {Navigator, Screen} = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Navigator>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />

    </Navigator>
  );
};

export default AuthStack;
