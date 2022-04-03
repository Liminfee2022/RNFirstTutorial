import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeName';
import SideMenu from './SideMenu';
import {GlobalContext} from '../context/Provider';

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const DrawerStack = createDrawerNavigator();
  const {authDispatch} = React.useContext(GlobalContext);
  return (
    <DrawerStack.Navigator
      drawerStyle="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <DrawerStack.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </DrawerStack.Navigator>
  );
};
export default DrawerNavigator;
