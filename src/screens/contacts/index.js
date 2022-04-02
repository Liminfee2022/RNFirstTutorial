import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';

const Contacts = ({navigation}) => {
  const {setOptions, toggleDrawer} = useNavigation();
  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Text style={{padding: 10}}>NAV</Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <Container>
      <Text>Contacts</Text>
      <Button
        title="Navigate"
        onPress={() => navigation.navigate('Contact create')}
      />
    </Container>
  );
};

export default Contacts;
