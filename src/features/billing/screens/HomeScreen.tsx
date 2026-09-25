import React from 'react';
import { Text, View } from 'react-native';

import { Button, Card } from '@shared/components/ui';

import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-4">
        <Text className="text-2xl font-bold text-text mb-2">BillingApp</Text>
        <Text className="text-textMuted mb-4">Phase 0 — Fondasi OK ✅</Text>

        <Card className="mb-4">
          <Text className="text-text font-semibold mb-2">Status Setup:</Text>
          <Text className="text-textMuted text-sm">• NativeWind aktif</Text>
          <Text className="text-textMuted text-sm">• Navigasi aktif</Text>
          <Text className="text-textMuted text-sm">• Zustand siap</Text>
          <Text className="text-textMuted text-sm">• AsyncStorage siap</Text>
        </Card>

        <Button label="Ke Halaman Test" onPress={() => navigation.navigate('Test')} />
      </View>
    </SafeAreaView>
  );
};
