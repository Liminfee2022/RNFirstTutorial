import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import {LOGIN} from '../../constants/routeName';

const RegisterComponent = ({onChange, onSubmit, form, errors}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcom to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account here</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            // value={value}
            // icon={<Text>HIDE</Text>}
            iconPosition="right"
            placeholder="Enter Username"
            error={errors.userName}
            onChangeText={value => onChange({name: 'userName', value})}
          />
          <Input
            label="First name"
            onChangeText={value => onChange({name: 'firstName', value})}
            // value={value}
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            error={errors.firstName}
            placeholder="Enter First name"
            secureTextEntry={true}
          />
          <Input
            label="Last name"
            // value={value}
            // icon={<Text>HIDE</Text>}
            iconPosition="right"
            placeholder="Enter Last name"
            error={errors.lastName}
            onChangeText={value => onChange({name: 'lastName', value})}
          />
          <Input
            label="Email"
            // value={value}
            // icon={<Text>HIDE</Text>}
            iconPosition="right"
            placeholder="Enter Email"
            error={errors.email}
            onChangeText={value => onChange({name: 'email', value})}
          />
          <Input
            label="Password"
            // value={value}
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            error={errors.password}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={value => onChange({name: 'password', value})}
          />
          <CustomButton
            secondary
            title="Submit"
            loading={true}
            onPress={onSubmit}
          />
          <View style={styles.creacteSection}>
            <Text style={styles.inforText}>Already have an account?</Text>
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
