import React from 'react';
import {Text, View} from 'react-native';
import LoginComponent from '../../components/Login';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return <LoginComponent />;
};

export default Login;
