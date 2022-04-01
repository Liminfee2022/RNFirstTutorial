import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import {REGISTER} from '../../constants/routeName';
import Message from '../common/Message';

const LoginComponent = ({value}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcom to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        <Message
          retry
          retryFn={() => {
            console.log('sdfsf');
          }}
          onDismiss={() => {}}
          primary
          message="invalid credential"
        />
        <View style={styles.form}>
          <Input
            label="Username"
            // onChangeText={text => onChangeText(text)}
            value={value}
            // icon={<Text>HIDE</Text>}
            iconPosition="right"
            placeholder="Enter Username"
            error={'This field is required'}
          />
          <Input
            label="Password"
            // onChangeText={text => onChangeText(text)}
            value={value}
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            // error={'This field is required'}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <CustomButton secondary title="Submit" loading={true} />
          <View style={styles.creacteSection}>
            <Text style={styles.inforText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
