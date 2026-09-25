import React from 'react';
import { View, ViewProps } from 'react-native';

export const Card: React.FC<ViewProps> = ({ children, className, ...props }) => {
  return (
    <View
      {...props}
      className={`bg-surface rounded-xl p-4 border border-border ${className ?? ''}`}
    >
      {children}
    </View>
  );
};
