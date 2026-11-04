import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NameCard({ data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.arabic}>{data.arabic}</Text>

      <Text style={styles.name}>{data.name}</Text>

      <Text style={styles.meaning}>{data.meaning}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 4,
  },

  arabic: {
    fontSize: 36,
    textAlign: 'center',
  },

  name: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },

  meaning: {
    marginTop: 8,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
