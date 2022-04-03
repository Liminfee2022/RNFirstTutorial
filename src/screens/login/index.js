import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import LoginComponent from '../../components/Login';
import login from '../../context/actions/auth/login';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = React.useState({});
  const [justSignedUp, setJustSignedUp] = React.useState(false);
  const {params} = useRoute();
  const {
    authDispatch,
    authState: {error, loading},
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({...form, userName: params.data.username});
    }
  }, [params]);

  const onSubmit = () => {
    if (form.userName && form.password) {
      login(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
