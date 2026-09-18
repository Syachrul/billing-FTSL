import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  danger: 'bg-danger',
  ghost: 'bg-transparent border border-border',
};

const variantTextClasses: Record<Variant, string> = {
  primary: 'text-white',
  secondary: 'text-white',
  danger: 'text-white',
  ghost: 'text-text',
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
}) => {
  const isDisabled = disabled || loading;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      className={`rounded-lg px-4 py-3 items-center justify-center ${variantClasses[variant]} ${
        isDisabled ? 'opacity-50' : ''
      }`}
      style={style}
      activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className={`font-semibold text-base ${variantTextClasses[variant]}`}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};
