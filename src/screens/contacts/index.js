import React from 'react';
import {Text, View, Button} from 'react-native';
import Container from '../../components/common/Container';

const Contacts = ({navigation}) => (
  <Container>
    <Text>Contacts</Text>
    <Button
      title="Navigate"
      onPress={() => navigation.navigate('Contact create')}
    />
  </Container>
);

export default Contacts;
