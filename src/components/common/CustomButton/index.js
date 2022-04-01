import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({
  title,
  disabled,
  loading,
  primary,
  secondary,
  danger,
  onPress,
}) => {
  const [focused, setFocused] = React.useState(false);
  const getFlexDireaction = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.buttonContainer, {backgroundColor: getBgColor()}]}>
      <View style={styles.loaderSection}>
        {loading && <ActivityIndicator color={colors.primary} />}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
