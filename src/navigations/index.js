import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigtor';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';

const AppNavContainer = () => {
    const {
        authState: {isLoggedIn}
    } = useContext(GlobalContext);
    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}
export default AppNavContainer;