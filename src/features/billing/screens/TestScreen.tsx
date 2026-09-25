import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '@shared/components/ui';

import { SafeAreaView } from 'react-native-safe-area-context';

export const TestScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-4">
        <Text className="text-2xl font-bold text-text mb-4">Test Screen</Text>
        <Button label="Kembali" variant="ghost" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};
