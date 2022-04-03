import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT} from '../../../constants/actionTypes';

export default () => dispatch => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  dispatch({type: LOGOUT});
};
