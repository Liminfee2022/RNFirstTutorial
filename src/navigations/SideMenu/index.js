import React from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Container from '../../components/common/Container';
import {SETTINGS} from '../../constants/routeName';
import logout from '../../context/actions/auth/logout';
import styles from './style';
const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to Logout', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {
          logout()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {icon: <Text>T</Text>, name: 'Logout', onPress: handleLogout},
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          style={styles.imageLogo}
          source={require('../../assets/images/logo.png')}
        />
        <View style={styles.viewListItem}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
