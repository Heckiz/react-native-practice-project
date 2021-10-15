import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home';

const {Navigator, Screen} = createDrawerNavigator();
const Drawer = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default Drawer;
