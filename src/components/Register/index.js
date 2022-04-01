import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import {LOGIN} from '../../constants/routeName';

const RegisterComponent = ({value}) => {
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
            // onChangeText={text => onChangeText(text)}
            value={value}
            // icon={<Text>HIDE</Text>}
            iconPosition="right"
            placeholder="Enter Username"
            // error={'This field is required'}
          />
          <Input
            label="First name"
            // onChangeText={text => onChangeText(text)}
            value={value}
            icon={<Text>HIDE</Text>}
            iconPosition="right"
            // error={'This field is required'}
            placeholder="Enter First name"
            secureTextEntry={true}
          />
          <Input
            label="Last name"
            // onChangeText={text => onChangeText(text)}
            value={value}
            // icon={<Text>HIDE</Text>}
            iconPosition="right"
            placeholder="Enter Last name"
            // error={'This field is required'}
          />
          <Input
            label="Email"
            // onChangeText={text => onChangeText(text)}
            value={value}
            // icon={<Text>HIDE</Text>}
            iconPosition="right"
            placeholder="Enter Email"
            // error={'This field is required'}
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
