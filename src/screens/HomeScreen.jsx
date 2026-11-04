import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Asma Daily</Text>

      <Button
        title="Open Calendar"
        onPress={() => navigation.navigate('Calendar')}
      />
    </View>
  );
}
