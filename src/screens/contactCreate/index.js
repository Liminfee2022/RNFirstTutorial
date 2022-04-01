import React from 'react';
import {Text, View, Button} from 'react-native';

const ContactCreate = ({navigation}) => (
  <View>
    <Text>ContactCreate</Text>
    <Button
      title="Navigate"
      onPress={() => navigation.navigate('Contact detail')}
    />
  </View>
);

export default ContactCreate;
