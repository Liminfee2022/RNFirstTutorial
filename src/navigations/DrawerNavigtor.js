import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeName';
import SideMenu from './SideMenu';

const getDrawerContent = navigation => {
  return <SideMenu navigation={navigation} />;
};

const DrawerNavigator = () => {
  const DrawerStack = createDrawerNavigator();
  return (
    <DrawerStack.Navigator
      drawerStyle="slide"
      drawerContent={({navigation}) => getDrawerContent(navigation)}>
      <DrawerStack.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </DrawerStack.Navigator>
  );
};
export default DrawerNavigator;
