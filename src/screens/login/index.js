import React from 'react';
import {Text, View} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={text => onChangeText(text)}
        value={value}
        // icon={<Text>HIDE</Text>}
        iconPosition="right"
        error={'This field is required'}
      />
      <Input
        label="Password"
        onChangeText={text => onChangeText(text)}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
        // error={'This field is required'}
      />

      <CustomButton title="Submit" loading={true} disabled={true} />
    </Container>
  );
};

export default Login;
