import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import LoginComponent from '../../components/Login';
import login from '../../context/actions/auth/login';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = React.useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading},
  } = React.useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      login(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
