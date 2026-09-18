import React from 'react';
import {TextInput, Text, View, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({label, error, ...props}) => {
  return (
    <View className="mb-3">
      {label ? (
        <Text className="text-text text-sm font-medium mb-1">{label}</Text>
      ) : null}
      <TextInput
        {...props}
        className={`border rounded-lg px-3 py-2 text-text bg-surface ${
          error ? 'border-danger' : 'border-border'
        }`}
        placeholderTextColor="#94A3B8"
      />
      {error ? <Text className="text-danger text-xs mt-1">{error}</Text> : null}
    </View>
  );
};
