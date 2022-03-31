import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { CONTACT_CREATE, CONTACT_DETAIL, CONTACT_LIST, SETTINGS } from '../constants/routeName';
import Contacts from '../screens/contacts';
import ContactDetail from '../screens/contactDetail';
import Settings from '../screens/settings';
import ContactCreate from '../screens/contactCreate';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
            <HomeStack.Screen name={CONTACT_CREATE} component={ContactCreate} />
            <HomeStack.Screen name={SETTINGS} component={Settings} />
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
        </HomeStack.Navigator>
    )
}
export default HomeNavigator;