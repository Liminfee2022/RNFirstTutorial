import React from 'react';
import {Text, View, Button} from 'react-native';

const ContactDetail = ({navigation}) => (
  <View>
    <Text>ContactDetail</Text>
    <Button title="Navigate" onPress={() => navigation.popToTop()} />
  </View>
);

export default ContactDetail;
