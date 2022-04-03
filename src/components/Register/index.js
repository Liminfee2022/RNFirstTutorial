import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import {LOGIN} from '../../constants/routeName';
import Message from '../common/Message';

const RegisterComponent = ({
  onChange,
  onSubmit,
  form,
  error,
  loading,
  errors,
}) => {
  const navigation = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = React.useState(true);

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account here</Text>
        <View style={styles.form}>
          {error?.error && (
            <Message danger retry retryFn={() => {}} message={error?.error} />
          )}
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            error={errors.userName || error?.username?.[0]}
            onChangeText={value => onChange({name: 'userName', value})}
          />
          <Input
            label="First name"
            onChangeText={value => onChange({name: 'firstName', value})}
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            error={errors.firstName || error?.first_name?.[0]}
            placeholder="Enter First name"
            secureTextEntry={true}
          />
          <Input
            label="Last name"
            iconPosition="right"
            placeholder="Enter Last name"
            error={errors.lastName || error?.last_name?.[0]}
            onChangeText={value => onChange({name: 'lastName', value})}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            error={errors.email || error?.email?.[0]}
            onChangeText={value => onChange({name: 'email', value})}
          />
          <Input
            label="Password"
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            error={errors.password || error?.password?.[0]}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={value => onChange({name: 'password', value})}
          />
          <CustomButton
            secondary
            title="Submit"
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
